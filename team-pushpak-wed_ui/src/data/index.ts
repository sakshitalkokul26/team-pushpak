export const TEAM_STATS = [
  { label: "Projects Built", value: 12 },
  { label: "Team Members", value: 45 },
  { label: "Competitions", value: 8 },
  { label: "Flight Hours", value: "500+" },
];

export const PROJECTS = [
  {
    id: "quadcopter",
    title: "Project Alpha Quadcopter",
    description: "High-agility autonomous quadcopter designed for rapid payload delivery and reconnaissance.",
    components: ["Pixhawk 4", "Raspberry Pi 4", "LiDAR Sensor", "4K Camera"],
    status: "Completed",
    techStack: ["C++", "Python", "ROS"],
    image: "/assets/quadcopter.jpg"
  },
  {
    id: "hexacopter",
    title: "Heavy-Lift Hexacopter",
    description: "Industrial-grade hexacopter with advanced stability controls for agricultural and survey applications.",
    components: ["DJI N3", "Jetson Nano", "RTK GPS", "Thermal Camera"],
    status: "In Testing",
    techStack: ["Python", "OpenCV", "CUDA"],
    image: "/assets/hexacopter.jpg"
  },
  {
    id: "fpv-system",
    title: "Custom FPV Drone System",
    description: "Ultra-low latency first-person view drone built for racing and complex maneuver testing.",
    components: ["Betaflight FC", "Caddx Vista", "Crossfire Nano", "High KV Motors"],
    status: "Active R&D",
    techStack: ["Betaflight", "C"],
    image: "/assets/fpv.jpg"
  },
  {
    id: "fpv-system",
    title: "BGMI ",
    description: "Ultra-low latency first-person view drone built for racing and complex maneuver testing.",
    components: ["Betaflight FC", "Caddx Vista", "Crossfire Nano", "High KV Motors"],
    status: "Active R&D",
    techStack: ["Betaflight", "C"],
    image: "/assets/fpv.jpg"
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Aarav Sharma",
    role: "Team Captain",
    department: "Leadership",
    image: "/assets/team-1.jpeg"
  },
  {
    name: "Harsh waghmode ",
    role: "IGL",
    department: "Assualter",
    image: "/assets/team-9.jpeg"
  },
  {
    name: "Priya Patel",
    role: "Lead Avionics Engineer",
    department: "Electronics",
    image: "/assets/team-2.jpg"
  },
  {
    name: "Rohan Gupta",
    role: "Head of Software",
    department: "Software",
    image: "/assets/team-3.jpg"
  },
  {
    name: "Neha Singh",
    role: "Aerodynamics Specialist",
    department: "Mechanical",
    image: "/assets/team-4.jpg"
  }
];

export const TIMELINE_EVENTS = [
  { year: "2021", title: "Team Founded", description: "Team Pushpak was established with a vision to innovate in UAV tech." },
  { year: "2022", title: "First Custom Build", description: "Successfully launched our first in-house quadcopter." },
  { year: "2023", title: "National Competition", description: "Secured Top 5 position at the National Drone Tech Expo." },
  { year: "2024", title: "Autonomous Navigation", description: "Achieved fully autonomous GPS-denied indoor flight." }
];

export const RND_TOPICS = [
  { title: "Autonomous Navigation", description: "Developing AI-driven SLAM algorithms for GPS-denied environments." },
  { title: "Obstacle Detection", description: "Real-time 3D mapping using LiDAR and depth cameras." },
  { title: "Swarm Robotics", description: "Coordinating multi-drone systems for complex search and rescue missions." },
  { title: "Custom Flight Controllers", description: "Designing PCB layouts tailored for our specific payload requirements." }
];

export const MENTORS = [
  {
    name: "Dr. Vikram Singh",
    designation: "Professor",
    department: "Aerospace Engineering",
    guidanceArea: "Aerodynamics & Propulsion"
  },
  {
    name: "Dr. Ananya Reddy",
    designation: "Associate Professor",
    department: "Computer Science",
    guidanceArea: "AI & Autonomous Systems"
  }
];
