import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { CheckBox } from "react-native-elements";
const NavigationLine = ({ active }) => (
  <View
    style={{
      flex: 1,
      height: 5,
      backgroundColor: active ? "#57D5DB" : "#DBD4D4",
      marginHorizontal: 5,
    }}
  />
);

const InterestList = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const [ratings, setRatings] = useState(Array(data.items.length).fill(0));

  const handleRatingChange = (index, rating) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => setExpanded(!expanded)}
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#F1F1F3",
          width: "90%",
          height: 50,
          borderRadius: 20,
          marginTop: 15,
          paddingHorizontal: 20,
          borderColor: "#D9D9D9",
          borderWidth: 1,
          marginHorizontal: 15,
        }}
      >
        <Icon
          name={expanded ? "caret-down" : "caret-right"}
          size={15}
          color="#9C9C9C"
        />
        <Text style={{ flex: 1, marginLeft: 10 }}>{data.title}</Text>
      </TouchableOpacity>
      {expanded && (
        <FlatList
          data={data.items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 0,
                backgroundColor: "#F1F1F3",
                width: "90%",
                height: 50,
                borderRadius: 20,
                marginTop: 5,
                justifyContent: "space-between",
                marginHorizontal: 15,
                borderWidth: 0.1,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CheckBox
                  value={ratings[index] > 0}
                  onValueChange={(value) =>
                    handleRatingChange(index, value ? 1 : 0)
                  }
                />
                <View style={{ maxWidth: 150 }}>
                  <Text style={{ marginLeft: -10, fontSize: 13 }}>{item}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <TouchableOpacity
                    key={star}
                    onPress={() => handleRatingChange(index, star)}
                    style={{ marginRight: 4 }}
                  >
                    <Icon
                      name="star"
                      size={20}
                      color={ratings[index] >= star ? "#FFD700" : "#D3D3D3"}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const AreasOfInterest = ({ navigation }) => {
  const interestData = [
    {
      title: "Accounting",
      items: [
        "Financial Accounting",
        "Cost Accounting",
        "Managerial Accounting",
        "Auditing",
        "Tax Accounting",
        "Forensic Accounting",
      ],
    },
    {
      title: "Finance",
      items: [
        "Investment Management",
        "Financial Risk Management",
        "Corporate Finance",
        "Public Finance",
        "Personal Finance",
      ],
    },
    {
      title: "Human Resources",
      items: [
        "Learning & Development",
        "Performance Management",
        "HR Information Systems",
        "Compensation & Benefits",
        "Recruiting & Staffing",
        "Organizational Structure",
        "Employee & Labor Relations",
        "Diversity Equity & Inclusion",
      ],
    },
    {
      title: "Information Technology",
      items: [
        "Systems Security",
        "Data Management",
        "IT Management",
        "Network Administration",
        "Software Development",
        "Web Development",
      ],
    },
    {
      title: "Legal",
      items: [
        "Litigation",
        "Risk Management",
        "Contract Law",
        "Import/Export Law",
        "Compliance Policies & Procedures",
        "Property Law",
        "Intellectual Property Law",
        "Employment Law",
        "Ethics",
        "Law Enforcement",
        "Criminal Justice",
      ],
    },
    {
      title: "Manufacturing",
      items: [
        "Plant Management",
        "Fabrication & Machining",
        "Reliability & Asset Management",
        "Procurement",
        "Distribution",
        "Production Installation",
      ],
    },
    {
      title: "Operations",
      items: [
        "Improve Processes",
        "LEAN & Six Sigma",
        "Production Planning & Control",
        "Quality Management",
        "Supply Chain Management",
        "Design Process",
      ],
    },
    {
      title: "Marketing & Communication",
      items: [
        "Sales Support",
        "Marketing Communications",
        "Advertising Strategy",
        "Pricing Strategy",
        "Market Research",
        "Social Media Strategy",
        "Brand Management",
        "Copy & Content Creation",
        "Imaging/Graphics",
      ],
    },
    {
      title: "Sales",
      items: [
        "Capture Management",
        "Building a Book of Business",
        "Channel Strategy",
        "Sales Forecasting",
        "Enterprise Sales",
        "Inside Sales",
        "Objection Handling",
        "Business Development",
      ],
    },
    {
      title: "Management",
      items: [
        "Delegation",
        "Emotional Intelligence",
        "Improve Processes",
        "Product Management",
        "Project Management",
        "Decision Making",
        "Negotiation Skills",
        "Develop Others",
        "Change Management",
        "Priority Management",
        "Effective Communication",
        "Conflict Management",
      ],
    },
    {
      title: "Leadership",
      items: [
        "Team Building",
        "Shaping Culture",
        "Setting Vision & Strategy",
        "Strategic Thinking",
        "Product Development",
        "Service Development",
        "Value Creation",
      ],
    },
    {
      title: "Healthcare",
      items: [
        "Dentistry",
        "Health Sciences",
        "Physician",
        "Veterinarian",
        "Pharmacist",
        "Healthcare Management",
        "Patient Care",
      ],
    },
    {
      title: "Education",
      items: [
        "Teaching",
        "Education Administration",
        "School Counseling",
        "Curriculum Development",
      ],
    },
    {
      title: "Consulting",
      items: [
        "Management Consulting",
        "Corporate Consulting",
        "Independent Consulting",
      ],
    },
    {
      title: "Government & Public Administration",
      items: [
        "Revenue & Taxation",
        "Law Enforcement",
        "Public Management & Administration",
        "Environmental & Resource Planning",
        "National Security",
        "Governance",
      ],
    },
    {
      title: "Customer Service",
      items: [
        "Customer Retention",
        "Customer Management",
        "Customer Support",
        "SaaS Customer Experience",
      ],
    },
    {
      title: "Engineering",
      items: [
        "Civil Engineering",
        "Chemical Engineering",
        "Mechanical Engineering",
        "Electrical Engineering",
        "Industrial Engineering",
        "Aerospace Engineering",
        "Biomedical Engineering",
        "Environmental Engineering",
        "Computer Engineering",
        "Materials/Textiles Engineering",
        "Nuclear Engineering",
        "Architecture",
      ],
    },
    {
      title: "Sciences",
      items: [
        "Agricultural Science",
        "Social Science",
        "Biology",
        "Chemistry",
        "Political Science",
        "Physics",
        "Psychology",
        "Mining & Petroleum",
      ],
    },
    {
      title: "Social Services",
      items: [
        "Therapists",
        "Probation Officer",
        "Rehabilitation Counselor",
        "Career Counselor",
        "Social Worker",
        "Substance Abuse Counselor",
        "Mental Health Counselor",
        "Clergy",
      ],
    },
    {
      title: "Creative / Design",
      items: [
        "Creative Arts",
        "Graphic Design",
        "Interior Design",
        "Product Design",
        "User Experience",
      ],
    },
  ];
  // Search Logic
  // TODO: Later Search Logic
  // Handle Next
  const handleNext = () => {
    // Handle navigation or any other logic for the "Next" button
    navigation.navigate("Career");
  };

  return (
    // Margin Top is missing in this. i want same level of margin as my previous pages.
    <SafeAreaView style={{ flex: 1, alignItems: "center", marginTop: 40 }}>
      <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 5 }}>
        Areas of Interest
      </Text>
      <View style={{ width: 400, height: 1.5, backgroundColor: "#DBD4D4" }} />

      <FlatList
        data={interestData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <InterestList data={item} />}
        ListHeaderComponent={() => (
          <>
            <Text
              style={{ fontSize: 17, marginTop: 10, paddingHorizontal: 15 }}
            >
              Select areas of interest and rate your expertise in each to
              receive personalized mentoring recommendations. Rate your
              expertise with the star system (1 - 5) to establish your
              proficiency.
            </Text>
            <Text
              style={{
                fontSize: 11,
                color: "#9C9C9C",
                textAlign: "left",
                marginTop: 10,
                paddingHorizontal: 15,
              }}
            >
              Your ratings are confidential and not displayed on your profile.
              We recommend selecting at least 3 options.
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#F1F1F3",
                width: "90%",
                height: 50,
                borderRadius: 20,
                marginTop: 15,
                paddingHorizontal: 20,
                borderColor: "#D9D9D9",
                borderWidth: 1,
                marginHorizontal: 15,
              }}
            >
              <Icon name="search" size={15} color="#9C9C9C" />
              <TextInput
                placeholder="Search Here"
                style={{ flex: 1, marginLeft: 10 }}
              />
            </View>
          </>
        )}
      />
      <View style={{ flexDirection: "row", height: 10, marginVertical: 10 }}>
        <NavigationLine active={true} />
        <NavigationLine active={true} />
        <NavigationLine active={true} />
        <NavigationLine active={false} />
        <NavigationLine active={false} />
      </View>
      <TouchableOpacity
        onPress={handleNext}
        style={{
          backgroundColor: "#09A1F6",
          padding: 10,
          borderRadius: 30,
          width: "90%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
          Next
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AreasOfInterest;
