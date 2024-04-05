const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const os = require("os");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

app.use(morgan("dev"));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwt = require("jsonwebtoken");
dotenv.config();

const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL)
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

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en" dir="ltr" class="plugin-pages plugin-id-default">
  <meta
      http-equiv="content-type"
      content="text/html;charset=utf-8"
    <head>
      <meta charset="UTF-8" />
      <meta name="generator" content="Docusaurus v2.2.0" />
      <title data-rh="true">MentoRship API</title>
      <meta data-rh="true" property="og:title" content="MentoRship" />
      <meta data-rh="true" name="twitter:card" content="summary_large_image" />
      <meta data-rh="true" property="og:url" content="index.html" />
      <meta data-rh="true" name="docusaurus_locale" content="en" />
      <meta data-rh="true" name="docusaurus_tag" content="default" />
      <meta data-rh="true" name="docsearch:language" content="en" />
      <meta data-rh="true" name="docsearch:docusaurus_tag" content="default" />
      
      <meta data-rh="true" content="@vercel" name="twitter:site" />
      <meta data-rh="true" content="MentoRship" name="apple-mobile-web-app-title" />
      <meta data-rh="true" content="var(--geist-background)" name="theme-color" />
      <meta data-rh="true" content="#000000" name="msapplication-TileColor" />
      <link data-rh="true" rel="icon" href="img/favicon.ico" />
      <link data-rh="true" rel="canonical" href="index.html" />
      <link data-rh="true" rel="alternate" href="index.html" hreflang="en" />
      <link
        data-rh="true"
        rel="alternate"
        href="index.html"
        hreflang="x-default"
      />
      <script data-rh="true">
        function maybeInsertBanner() {
          window.__DOCUSAURUS_INSERT_BASEURL_BANNER && insertBanner();
        }
        function insertBanner() {
          var n = document.getElementById(
            "docusaurus-base-url-issue-banner-container"
          );
          if (n) {
            n.innerHTML =
              '\n<div id="docusaurus-base-url-issue-banner" style="border: thick solid red; background-color: rgb(255, 230, 179); margin: 20px; padding: 20px; font-size: 20px;">\n   <p style="font-weight: bold; font-size: 30px;">Your Docusaurus site did not load properly.</p>\n   <p>A very common reason is a wrong site <a href="https://docusaurus.io/docs/docusaurus.config.js/#baseurl" style="font-weight: bold;">baseUrl configuration</a>.</p>\n   <p>Current configured baseUrl = <span style="font-weight: bold; color: red;">/</span>  (default value)</p>\n   <p>We suggest trying baseUrl = <span id="docusaurus-base-url-issue-banner-suggestion-container" style="font-weight: bold; color: green;"></span></p>\n</div>\n';
            var e = document.getElementById(
                "docusaurus-base-url-issue-banner-suggestion-container"
              ),
              s = window.location.pathname,
              r = "/" === s.substr(-1) ? s : s + "/";
            e.innerHTML = r;
          }
        }
        (window.__DOCUSAURUS_INSERT_BASEURL_BANNER = !0),
          document.addEventListener("DOMContentLoaded", maybeInsertBanner);
      </script>
      <link
        rel="alternate"
        type="application/rss+xml"
        href="blog/rss.xml"
        title="MentoRship RSS Feed"
      />
      <link
        rel="alternate"
        type="application/atom+xml"
        href="blog/atom.xml"
        title="MentoRship Atom Feed"
      />
      <link rel="stylesheet" href="assets/css/styles.a6e13489.css" />
      <link rel="preload" href="assets/js/runtime_main.15de36ed.js" as="script" />
      <link rel="preload" href="assets/js/main.7942fc5e.js" as="script" />
    </head>
    <body class="navigation-with-keyboard">
      <script>
        !(function () {
          function t(t) {
            document.documentElement.setAttribute("data-theme", t);
          }
          var e = (function () {
            var t = null;
            try {
              t = localStorage.getItem("theme");
            } catch (t) {}
            return t;
          })();
          t(null !== e ? e : "light");
        })();
      </script>
      <div id="__docusaurus">
        <div id="docusaurus-base-url-issue-banner-container"></div>
        <div class="overflow-x-hidden static">
          <div role="region" aria-label="Skip to main content">
            <a
              class="skipToContent_fXgn"
              href="#docusaurus_skipToContent_fallback"
              >Skip to main content</a
            >
          </div>
          <nav class="navbar navbar--fixed-top">
            <div class="navbar__inner">
              <div class="navbar__items">
                <button
                  aria-label="Toggle navigation bar"
                  aria-expanded="false"
                  class="navbar__toggle clean-btn"
                  type="button"
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    aria-hidden="true"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                      d="M4 7h22M4 15h22M4 23h22"
                    ></path>
                  </svg></button
                ><a class="navbar__brand" href="index.html"
                  ><div class="navbar__logo">
                   
                  </div>
                  <b class="navbar__title text--truncate">MentoRship API</b></a
                ><a class="navbar__item navbar__link" href="#"
                  >Docs</a
                ><a class="navbar__item navbar__link" href="#"
                  >Quickstart</a
                >
              </div>
              <div class="navbar__items navbar__items--right">
                <a
                  href="https://github.com/prodigyRahul/MentoRship"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="navbar__item navbar__link header-social-link header-github-link"
                  aria-label="GitHub"
                ></a
                ><a
                  href="https://twitter.com/_rahulmistry"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="navbar__item navbar__link header-social-link header-twitter-link"
                  aria-label="Twitter"
                ></a
                ><a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="navbar__item navbar__link header-social-link header-discord-link"
                  aria-label="Discord"
                ></a>
                <div class="toggle_vylO colorModeToggle_DEke">
                  <button
                    class="clean-btn toggleButton_gllP toggleButtonDisabled_aARS"
                    type="button"
                    disabled=""
                    title="Switch between dark and light mode (currently light mode)"
                    aria-label="Switch between dark and light mode (currently light mode)"
                    aria-live="polite"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      class="lightToggleIcon_pyhR"
                    >
                      <path
                        fill="currentColor"
                        d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"
                      ></path></svg
                    ><svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      class="darkToggleIcon_wfgR"
                    >
                      <path
                        fill="currentColor"
                        d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div class="searchBox_ZlJk"></div>
              </div>
            </div>
            <div role="presentation" class="navbar-sidebar__backdrop"></div>
          </nav>
          <div
            id="docusaurus_skipToContent_fallback"
            class="main-wrapper mainWrapper_z2l0"
          >
            <div class="bg-[#010101]">
              <div
                class="relative min-h-screen"
                style="background-image: url(_/img/404.html)"
              >
                <div class="relative z-20 py-20 md:py-48 layout">
                  <a
                    href="#"
                    class="max-w-max mx-auto group block hover:no-underline"
                    ><div
                      class="max-w-max mx-auto rounded-full"
                      style="
                        padding: 1px;
                        background: linear-gradient(
                          263.08deg,
                          #75e0a2 0%,
                          rgba(117, 224, 162, 0.25) 21.88%,
                          rgba(117, 224, 162, 0.9) 42.71%,
                          rgba(244, 248, 92, 0.3) 65.1%,
                          rgba(244, 248, 92, 0.9) 84.38%,
                          rgba(244, 248, 92, 0.25) 100%
                        );
                        box-shadow: 0px 4px 34px 6px rgba(162, 255, 45, 0.25);
                      "
                    >
                      <div
                        class="bg-[#010101] group-hover:bg-opacity-90 duration-500 text-opacity-80 items-center hover:text-opacity-100 transition-all flex gap-1 rounded-full pl-6 pr-4 py-2 text-xs uppercase font-medium text-white"
                        style="letter-spacing: 1.2px"
                      >
                        Sail with your mentor with MentoRship<svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="w-4 h-4 text-white group-hover:translate-x-0.5 transition-all"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div></div
                  ></a>
                  <h1
                    class="mt-8 text-4xl font-semibold text-center text-white md:text-6xl"
                  >
                    The <span class="grad">MentoRship</span> API that
                    Empowers App's<!-- -->
                    <span class="grad">MentoRship</span> Experience
                  </h1>
                  <p
                    class="w-3/4 mx-auto mt-8 text-lg text-center text-white text-opacity-50 md:text-xl"
                  >
                  The MentoRship App seamlessly facilitates meaningful connections between individuals seeking guidance and experienced mentors across various fields, fostering invaluable mentorship experiences
                  </p>
                  <div
                    class="max-w-md p-0.5 relative mx-auto mt-24 bg-left-bottom hover:bg-right-bottom overflow-hidden rounded-md cursor-pointer group bg-grad2 transition-all hover:positio"
                    style="
                      background-size: 300% 300%;
                      transition-duration: 2000ms;
                    "
                  >
                    <div
                      class="py-3 text-center text-white rounded-sm bg-[#0D0B0E] font-medium"
                      style="
                        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
                          Consolas, 'Liberation Mono', 'Courier New', monospace;
                        font-size: 15px;
                      "
                    >
                      ~ Download MentoRship App
                    </div>
                  </div>
                </div>
                <img
                  src="img/globe-bottom.svg"
                  class="absolute bottom-0 z-0 w-full"
                /><img
                  src="img/globe.png"
                  class="absolute right-0 z-10 w-64 bottom-32"
                /><img
                  src="img/bg-lines.png"
                  class="absolute z-10 -translate-x-1/2 -top-24 left-1/2"
                />
              </div>
            
      <script src="assets/js/runtime_main.15de36ed.js"></script>
      <script src="assets/js/main.7942fc5e.js"></script>
    </body>
  </html>
  `);
});

const User = require("./models/user");
const Message = require("./models/message");
const GroupSession = require("./models/session");

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up storage using Cloudinary
const storages = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [
      { width: 500, height: 500, crop: "limit" },
      { quality: "auto" },
      { fetch_format: "auto" },
    ],
  },
});
// Create Multer instance with storage configuration
const uploads = multer({ storage: storages });

// Endpoint to register users with image upload
app.post("/register", uploads.single("image"), async (req, res) => {
  const { name, email, password } = req.body;
  const image = req.file ? req.file.path : null; // Check if image file is uploaded

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

    // Create a new User object with hashed password and image path
    const newUser = new User({ name, email, password: hashedPassword, image });

    // Save the user to the database
    await newUser.save();

    // Automatically add the new user as a friend to your company user
    const companyUser = await User.findById("65fe947733f40267003d6fb7");
    companyUser.friends.push(newUser._id);
    await companyUser.save();

    // Automatically add the company user as a friend to the new user
    newUser.friends.push(companyUser._id);
    await newUser.save();

    // Send automatic welcome message from your user to the new user
    const welcomeMessage = new Message({
      senderId: companyUser._id,
      recepientId: newUser._id,
      messageType: "text",
      message: `Welcome to MentoRship!

Our mission is to create a space for genuine and candid conversations to help professionals advance their careers. Learn from others and share your life experiences with others to grow as well.

• Guidelines: This is an inclusive community built on respect, trust, and transparency. Everyone is here to improve themselves. There is no room for hateful or derogatory comments or behavior.

• Where to Start:

    • Find Topics or Members that interest you. See what folks are discussing, and participate where you have questions or insights.

    • Reach out and connect with people who align with your goals!

    • Take a look at the Mentoring & Career readiness guides we provide.

We are glad you joined us and look forward to helping you learn, grow and share with your connections.

~ The MentoRship Team

P.S. We are here if you need anything, just a message away.
`,
      timestamp: new Date(),
      sent: true,
      read: false,
    });
    await welcomeMessage.save();

    // Generate JWT token for the new user
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
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: "4h",
  });

  return token;
};

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.isActive) {
      return res.status(403).json({ message: "User is disabled" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid Password!" });
    }

    // Check if the user is onboarded
    const onboarded = user.Onboarded;

    // Generate token with onboarded status
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

// Endpoint to post Messages and store it in the backend
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
      sent: true, // Mark the message as sent when created
      read: false, // Mark the message as not read initially
    });

    await newMessage.save();
    res.status(200).json({ message: "Message sent Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to post Messages and store it in the backend
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
      sent: true, // Mark the message as sent when created
      read: false, // Mark the message as not read initially
    });

    await newMessage.save();
    res.status(200).json({ message: "Message sent Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" }``);
  }
});

// Endpoint to mark a message as read
app.put("/messages/read/:messageId", async (req, res) => {
  try {
    const { messageId } = req.params;

    // Find the message by messageId and update the read status to true
    await Message.findByIdAndUpdate(messageId, { read: true });

    res.status(200).json({ message: "Message read successfully" });
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

// Endpoint to handle onboarding v2 data
app.post("/onboarding/v2", async (req, res) => {
  try {
    // Extract data from the request body
    const {
      userId,
      Affiliation,
      Headline,
      Experience,
      Education,
      Degree,
      Major,
      GradeYear,
    } = req.body;

    // Validate required fields
    if (!userId || !Headline || !Experience) {
      return res.status(400).json({
        message: "userId, Headline, and Experience are required fields.",
      });
    }

    // Find the user by userId
    const user = await User.findById(userId);

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user data with the provided fields
    user.Affiliation = Affiliation;
    user.Headline = Headline;
    user.Experience = Experience;
    user.Education = Education;
    user.Degree = Degree;
    user.Major = Major;
    user.GradeYear = GradeYear;

    // Save the updated user to the database
    await user.save();

    // Return success response
    res.status(200).json({ message: "User onboarded successfully", user });
  } catch (err) {
    console.log("Error onboarding user", err);
    res.status(500).json({ message: "Error onboarding user" });
  }
});

// POST endpoint for onboarding/v3
app.post("/onboarding/v3", async (req, res) => {
  try {
    const { userId, areasOfInterest } = req.body;

    // Find the user by userId
    const user = await User.findById(userId);
    console.log(user.name);
    console.log(areasOfInterest);
    // If user not found, return error
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user's areasOfInterest field
    user.areasOfInterest = areasOfInterest;

    // Save the updated user to the database
    await user.save();

    // Return success response
    res.status(200).json({ message: "Areas of interest updated successfully" });
  } catch (err) {
    console.log("Error updating areas of interest", err);
    res.status(500).json({ message: "Error updating areas of interest" });
  }
});

// Write POST endpoint for onboarding/v4 for Career Goals.
// POST endpoint for onboarding/v4 to update Career Goals
app.post("/onboarding/v4", async (req, res) => {
  try {
    const { userId, careerGoals } = req.body;

    // Find the user by userId
    const user = await User.findById(userId);

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user's career goals field
    user.Career_Goals = careerGoals;

    // Save the updated user to the database
    await user.save();

    // Return success response
    res.status(200).json({ message: "Career goals updated successfully" });
  } catch (err) {
    console.log("Error updating career goals", err);
    res.status(500).json({ message: "Error updating career goals" });
  }
});

// Endpoint to update or get last seen time
app.get("/user/last-seen/:recipientId", async (req, res) => {
  try {
    const { recipientId } = req.params;
    const recipient = await User.findById(recipientId);
    if (recipient) {
      res.status(200).json({ lastSeen: recipient.lastSeen });
    } else {
      res.status(404).json({ error: "Recipient not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to update sender's last seen time
app.put("/user/last-seen/:senderId", async (req, res) => {
  try {
    const { senderId } = req.params;
    const sender = await User.findByIdAndUpdate(
      senderId,
      { lastSeen: new Date() },
      { new: true }
    );
    if (sender) {
      res.status(200).json({ message: "Last seen time updated successfully" });
    } else {
      res.status(404).json({ error: "Sender not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// New endpoint to check if user is onboarded
app.get("/user-onboarded/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Fetch the user by userId
    const user = await User.findById(userId);

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the user is onboarded
    const onboarded = user.Onboarded;

    // Return onboarded status
    res.status(200).json({ onboarded });
  } catch (error) {
    console.log("Error checking user onboarded status", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Endpoint to fetch user details
app.get("/user-details/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Fetch user data from the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return user data
    res.status(200).json({
      name: user.name,
      image: user.image,
      headline: user.Headline,
      country: user.Country,
      state: user.State,
      city: user.City,
      gender: user.Gender,
      raceEthnicity: user.Race,
      role: user.Role,
      education: user.Education,
      experience: user.Experience,
      careerGoals: user.Career_Goals,
      student: user.Student,
      workingProfessional: user.Mentor,
      FirstName: user.First_Name,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to update user details
app.put("/user-update/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Fetch user data from the database
    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user details based on request body
    const {
      image,
      headline,
      country,
      state,
      city,
      gender,
      raceEthnicity,
      role,
      education,
      experience,
      careerGoals,
      student,
      workingProfessional,
    } = req.body;

    // Update user object
    user.image = image || user.image;
    user.Headline = headline || user.Headline;
    user.Country = country || user.Country;
    user.State = state || user.State;
    user.City = city || user.City;
    user.Gender = gender || user.Gender;
    user.Race = raceEthnicity || user.Race;
    user.Role = role || user.Role;
    user.Education = education || user.Education;
    user.Experience = experience || user.Experience;
    user.Career_Goals = careerGoals || user.Career_Goals;
    user.Student = student || user.Student;
    user.Mentor = workingProfessional || user.Mentor;

    // Save the updated user to the database
    user = await user.save();

    // Return success response
    res
      .status(200)
      .json({ message: "User details updated successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// New endpoint to set onboarded status for a user
app.post("/onboarded/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user by userId
    const user = await User.findById(userId);

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Set Onboarded field to true
    user.Onboarded = true;

    // Save the updated user to the database
    await user.save();

    // Return success response
    res.status(200).json({ message: "User onboarded successfully" });
  } catch (error) {
    console.log("Error onboarding user", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Endpoint to create a new session
app.post("/create-session", async (req, res) => {
  const { createdBy, sessionName, description, careerGoals, public } = req.body;
  try {
    // Save session to database
    const newSession = new GroupSession({
      createdBy,
      sessionName,
      description,
      careerGoals,
      public,
    });
    const savedSession = await newSession.save();
    res
      .status(201)
      .json({ session: savedSession, sessionId: savedSession._id });
  } catch (error) {
    console.error("Error creating session:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Endpoint to invite friends
app.post("/invite-friends/:sessionId", async (req, res) => {
  const { sessionId } = req.params;
  const { invitedFriends } = req.body;
  try {
    // Fetch session by ID
    const session = await GroupSession.findById(sessionId);
    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    // Ensure invitedFriends is an array
    if (!Array.isArray(invitedFriends)) {
      return res
        .status(400)
        .json({ message: "Invited friends should be an array" });
    }

    // Add invited friends as attendees to the session
    for (const friendId of invitedFriends) {
      const attendee = await User.findById(friendId);
      if (attendee) {
        session.attendees.push({
          userId: attendee._id,
          name: attendee.name,
          image: attendee.image,
        });
      }
    }

    // Save the updated session
    await session.save();

    res.status(200).json({ message: "Friends invited successfully" });
  } catch (error) {
    console.error("Error inviting friends:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Endpoint to upload session banner and alt text
app.post("/upload-banner/:sessionId", async (req, res) => {
  const { sessionId } = req.params;
  const { bannerUrl, bannerAltText } = req.body;
  try {
    // Fetch session by ID
    const session = await GroupSession.findById(sessionId);
    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    // Update session banner and alt text
    session.banner = bannerUrl;
    session.bannerAltText = bannerAltText;
    await session.save();
    res.status(200).json({ message: "Banner uploaded successfully" });
  } catch (error) {
    console.error("Error uploading banner:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Endpoint to select schedule
app.post("/select-schedule/:sessionId", async (req, res) => {
  const { sessionId } = req.params;
  const { date, time, duration } = req.body;
  try {
    // Fetch session by ID
    const session = await GroupSession.findById(sessionId);
    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    // Update session schedule
    session.date = date;
    session.time = time;
    session.duration = duration;
    await session.save();
    res.status(200).json({ message: "Schedule selected successfully" });
  } catch (error) {
    console.error("Error selecting schedule:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Endpoint to fetch all friends of a user with their name, image, headline, and IDs
app.get("/user-friends/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user by userId and populate the friends field
    const user = await User.findById(userId).populate({
      path: "friends",
      select: "_id name image headline", // Include _id field for friend IDs
    });

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Extract friend details (name, image, headline, and _id) from the populated friends array
    const friends = user.friends.map((friend) => ({
      _id: friend._id,
      name: friend.name,
      image: friend.image,
      headline: friend.headline, // Corrected to lowercase 'headline'
    }));

    res.status(200).json({ friends }); // Return friends array with IDs
  } catch (error) {
    console.log("Error fetching user friends:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Endpoint to retrieve the public profile of a particular user
app.get("/public-profile/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Fetch user data from the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Extract required details from the user object
    const publicProfile = {
      name: user.name,
      image: user.image,
      headline: user.Headline,
      areaOfInterest: user.areasOfInterest.map((interest) => interest.title),
      careerGoals: user.Career_Goals,
      education: user.Education,
      country: user.Country,
      state: user.State,
      role: user.Role,
      gradeYear: user.GradeYear,
      major: user.Major,
      degree: user.Degree,
    };

    // Return the public profile
    res.status(200).json(publicProfile);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to deactivate/delete user account
app.delete("/delete-account/:userId", async (req, res) => {
  const { userId } = req.params;
  const { password } = req.body;

  try {
    // Find the user by ID
    const user = await User.findById(userId);

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify user password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Deactivate/delete the account by setting isActive to false
    user.isActive = false;
    await user.save();

    // Respond with success message
    res
      .status(200)
      .json({ message: "Account deactivated/deleted successfully" });
  } catch (error) {
    console.log("Error deactivating/deleting account:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to change password
app.post("/change-password/:userId", async (req, res) => {
  const { userId } = req.params;
  const { oldPassword, newPassword } = req.body;

  try {
    // Find the user by userId
    const user = await User.findById(userId);

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify old password
    const passwordMatch = await bcrypt.compare(oldPassword, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect old password" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10); // Hash with salt rounds 10

    // Update user's password in the database
    user.password = hashedPassword;
    await user.save();

    // Respond with success message
    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.log("Error changing password:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to fetch all sessions of a user
app.get("/user-sessions/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Find all sessions where the user is the creator or an attendee
    const sessions = await GroupSession.find({
      $or: [{ createdBy: userId }, { "attendees.userId": userId }],
    });

    // Return the sessions
    res.status(200).json({ sessions });
  } catch (error) {
    console.log("Error fetching user sessions:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint for requesting name of user
app.get("/:userId/name", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ name: user.name });
  } catch (error) {
    console.error("Error fetching user name:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
