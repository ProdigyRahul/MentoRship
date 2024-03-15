const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const os = require("os");
const app = express();
const morgan = require("morgan");
const port = 8080;
const cors = require("cors");

app.use(morgan("dev"));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwt = require("jsonwebtoken");

mongoose
  .connect(
    "mongodb+srv://22cs042:iiu3vedYCRb7UZht@mentorship.eoi0nsf.mongodb.net/mentorship"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.listen(port, () => {
  //* Get local IP addresses
  const interfaces = os.networkInterfaces();
  let internetConnectedIP = null;

  //* Loop through network interfaces to find the one with internet connection
  Object.values(interfaces).forEach((interface) => {
    interface.forEach((details) => {
      if (details.family === "IPv4" && !details.internal) {
        internetConnectedIP = details.address;
      }
    });
  });

  console.log(
    `Server is running on ${internetConnectedIP || "Unknown"} and Port ${port}`
  );
});

const User = require("./models/user");
const Message = require("./models/message");

//endpoint for registration of the user

app.post("/register", async (req, res) => {
  const { name, email, password, image } = req.body;

  try {
    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message:
          "Email already registered. Please try again with a different email.",
      });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10); // Hash with salt rounds 10

    // create a new User object with hashed password
    const newUser = new User({ name, email, password: hashedPassword, image });

    // save the user to the database
    await newUser.save();

    const token = createToken(newUser._id);
    res.status(201).json({ token, message: "User registered successfully" });
  } catch (err) {
    console.log("Error registering user", err);
    res.status(500).json({ message: "Error registering the user!" });
  }
});

//function to create a token for the user
const createToken = (userId) => {
  // Set the token payload
  const payload = {
    userId: userId,
  };

  // Generate the token with a secret key and expiration time
  const token = jwt.sign(payload, "Q$r2K6W8n!jCW%Zk", { expiresIn: "4h" });

  return token;
};

//endpoint for logging in of that particular user
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(404).json({ message: "Invalid Password!" });
    }

    const token = createToken(user._id);
    res.status(200).json({ token });
  } catch (error) {
    console.log("Error in finding the user", error);
    res.status(500).json({ message: "Internal server Error!" });
  }
});

//endpoint to access all the users except the user who's is currently logged in!
app.get("/users/:userId", (req, res) => {
  const loggedInUserId = req.params.userId;

  User.find({ _id: { $ne: loggedInUserId } })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.log("Error retrieving users", err);
      res.status(500).json({ message: "Error retrieving users" });
    });
});

//endpoint to send a request to a user
app.post("/friend-request", async (req, res) => {
  const { currentUserId, selectedUserId } = req.body;

  try {
    //update the recepient's friendRequestsArray!
    await User.findByIdAndUpdate(selectedUserId, {
      $push: { friendRequests: currentUserId },
    });

    //update the sender's sentFriendRequests array
    await User.findByIdAndUpdate(currentUserId, {
      $push: { sentFriendRequests: selectedUserId },
    });

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

//endpoint to show all the friend-requests of a particular user
app.get("/friend-request/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    //fetch the user document based on the User id
    const user = await User.findById(userId)
      .populate("friendRequests", "name email image")
      .lean();

    const friendRequests = user.friendRequests;

    res.json(friendRequests);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//endpoint to accept a friend-request of a particular person
app.post("/friend-request/accept", async (req, res) => {
  try {
    const { senderId, recepientId } = req.body;

    //retrieve the documents of sender and the recipient
    const sender = await User.findById(senderId);
    const recepient = await User.findById(recepientId);

    sender.friends.push(recepientId);
    recepient.friends.push(senderId);

    recepient.friendRequests = recepient.friendRequests.filter(
      (request) => request.toString() !== senderId.toString()
    );

    sender.sentFriendRequests = sender.sentFriendRequests.filter(
      (request) => request.toString() !== recepientId.toString
    );

    await sender.save();
    await recepient.save();

    res.status(200).json({ message: "Friend Request accepted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//endpoint to access all the friends of the logged in user!
app.get("/accepted-friends/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).populate(
      "friends",
      "name email image"
    );
    const acceptedFriends = user.friends;
    res.json(acceptedFriends);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const multer = require("multer");

// Configure multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "files/"); // Specify the desired destination folder
  },
  filename: function (req, file, cb) {
    // Generate a unique filename for the uploaded file
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

//endpoint to post Messages and store it in the backend
app.post("/messages", upload.single("imageFile"), async (req, res) => {
  try {
    const { senderId, recepientId, messageType, messageText } = req.body;

    const newMessage = new Message({
      senderId,
      recepientId,
      messageType,
      message: messageText,
      timestamp: new Date(),
      imageUrl: messageType === "image" ? req.file.path : null,
    });

    await newMessage.save();
    res.status(200).json({ message: "Message sent Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

///endpoint to get the userDetails to design the chat Room header
app.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    //fetch the user data from the user ID
    const recepientId = await User.findById(userId);

    res.json(recepientId);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//endpoint to fetch the messages between two users in the chatRoom
app.get("/messages/:senderId/:recepientId", async (req, res) => {
  try {
    const { senderId, recepientId } = req.params;

    const messages = await Message.find({
      $or: [
        { senderId: senderId, recepientId: recepientId },
        { senderId: recepientId, recepientId: senderId },
      ],
    }).populate("senderId", "_id name");

    res.json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//endpoint to delete the messages!
app.post("/deleteMessages", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ message: "invalid req body!" });
    }

    await Message.deleteMany({ _id: { $in: messages } });

    res.json({ message: "Message deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server" });
  }
});

app.get("/friend-requests/sent/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId)
      .populate("sentFriendRequests", "name email image")
      .lean();

    const sentFriendRequests = user.sentFriendRequests;

    res.json(sentFriendRequests);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server" });
  }
});

app.get("/friends/:userId", (req, res) => {
  try {
    const { userId } = req.params;

    User.findById(userId)
      .populate("friends")
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        const friendIds = user.friends.map((friend) => friend._id);

        res.status(200).json(friendIds);
      });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "internal server error" });
  }
});

// Endpoint to fetch user data based on userId
app.get("/user-data/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Fetch user data from the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return user data
    res.status(200).json({ name: user.name, image: user.image });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Onboarding/v1 API endpoint for welcome.js
app.post("/onboarding/v1", async (req, res) => {
  try {
    // Extract user data and userId from request body
    const {
      userId,
      First_Name,
      Last_Name,
      Pronoun,
      Gender,
      Race,
      Country,
      State,
      City,
      Role,
      Student,
      Mentor,
    } = req.body;

    // Validate required fields
    if (
      !userId ||
      !First_Name ||
      !Last_Name ||
      !Pronoun ||
      !Gender ||
      !Role ||
      Student === undefined ||
      Mentor === undefined
    ) {
      return res.status(400).json({
        message:
          "userId, First_Name, Last_Name, Pronoun, Gender, Role, Student, and Mentor are required fields.",
      });
    }

    // Find the user by userId
    const user = await User.findById(userId);

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user data with the provided fields
    user.First_Name = First_Name;
    user.Last_Name = Last_Name;
    user.Pronoun = Pronoun;
    user.Gender = Gender;
    user.Race = Race;
    user.Country = Country;
    user.State = State;
    user.City = City;
    user.Role = Role;
    user.Student = Student;
    user.Mentor = Mentor;

    // Save the updated user to the database
    await user.save();

    // Return success response
    res.status(200).json({ message: "User onboarded successfully", user });
  } catch (err) {
    console.log("Error onboarding user", err);
    res.status(500).json({ message: "Error onboarding user" });
  }
});
// Onboarding/v1 API endpoint for welcome.js
app.post("/onboarding/v1", async (req, res) => {
  try {
    // Extract user data and userId from request body
    const {
      userId,
      First_Name,
      Last_Name,
      Pronoun,
      Gender,
      Race,
      Country,
      State,
      City,
      Role,
      Student,
      Mentor,
    } = req.body;

    // Validate required fields
    if (!userId || !First_Name || !Last_Name || !Pronoun || !Gender || !Role) {
      return res
        .status(400)
        .json({
          message:
            "userId, First_Name, Last_Name, Pronoun, Gender, Role, Student, and Mentor are required fields.",
        });
    }

    // Find the user by userId
    const user = await User.findById(userId);

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user data with the provided fields
    user.First_Name = First_Name;
    user.Last_Name = Last_Name;
    user.Pronoun = Pronoun;
    user.Gender = Gender;
    user.Race = Race;
    user.Country = Country;
    user.State = State;
    user.City = City;
    user.Role = Role;
    user.Student = Student;
    user.Mentor = Mentor;

    // Save the updated user to the database
    await user.save();

    // Return success response
    res.status(200).json({ message: "User onboarded successfully", user });
  } catch (err) {
    console.log("Error onboarding user", err);
    res.status(500).json({ message: "Error onboarding user" });
  }
});
