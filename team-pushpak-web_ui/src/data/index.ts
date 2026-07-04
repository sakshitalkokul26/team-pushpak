export const TEAM_STATS = [
  { label: "Projects Built", value: 3 },
  { label: "Team Members", value: 26 },
  { label: "Competitions", value: 1 },
  { label: "Flight Hours", value: "100+" },
];

export const PROJECTS = [
  {
    id: "quadcopter",
    title: "Project Alpha Quadcopter",
    description: "High-agility autonomous quadcopter designed for rapid payload delivery and reconnaissance.",
    components: ["Pixhawk 4", "Raspberry Pi 4", "LiDAR Sensor", "4K Camera"],
    status: "Completed",
    techStack: ["C++", "Python", "ROS"],
    image: "/assets/Red_WINE.jpg"
  },
  {
    id: "hexacopter",
    title: "Heavy-Lift Hexacopter",
    description: "Industrial-grade hexacopter with advanced stability controls for agricultural and survey applications.",
    components: ["DJI N3", "Jetson Nano", "RTK GPS", "Thermal Camera"],
    status: "In Testing",
    techStack: ["Python", "OpenCV", "CUDA"],
    image: "/assets/Cloud grey.jpg"
  },
  {
    id: "fpv-system",
    title: "Custom FPV Drone System",
    description: "Ultra-low latency first-person view drone built for racing and complex maneuver testing.",
    components: ["Betaflight FC", "Caddx Vista", "Crossfire Nano", "High KV Motors"],
    status: "Active R&D",
    techStack: ["Betaflight", "C"],
    image: "/assets/fpv.png"
  },
  {
    id: "bgmi-system",
    title: "BGMI ",
    description: "Ultra-low latency first-person view drone built for racing and complex maneuver testing.",
    components: ["Betaflight FC", "Caddx Vista", "Crossfire Nano", "High KV Motors"],
    status: "Active R&D",
    techStack: ["Betaflight", "C"],
    image: "/assets/fpv.png"
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Aditya Kalshetti",
    role: "Team Captain",
    department: "Leadership",
    image: "/assets/team-7.jpg"
  },
  {
    name: "Aryan Bhambure",
    role: "Vice Captain",
    department: "Team Management",
    image: "/assets/team-9.jpeg"
  },
  {
    name: "Sakshi Talkokul",
    role: "Software Lead",
    department: "Software",
    image: "/assets/team-4.png"
  },
  {
    name: "Samarth Chendke",
    role: "Design Lead",
    department: "Mechanical",
    image: "/assets/team-6.jpg"
  },
  {
    name: "Shraddha Sarvgod",
    role: "Electronics Lead",
    department: "Electronics",
    image: "/assets/team-2.png"
  }
];

export const TIMELINE_EVENTS = [
  {
    year: "2022",
    title: "Team Foundation",
    description: "Team Pushpak was founded by Rishi Marthe under the guidance of Metan Sir, marking the beginning of the team's journey in UAV development."
  },
  {
    year: "2022–2024",
    title: "Leadership – Rishi Marthe",
    description: "Successfully assembled the team's first quadcopter and completed the design of the first hexacopter."
  },
  {
    year: "2024–2025",
    title: "Leadership – Varsha Manthalkar",
    description: "Achieved the first successful hexacopter flight, developed a solar cleaning application, participated in the SEA National Competition, and demonstrated drone-based wall spray painting."
  },
  {
    year: "2025–2026",
    title: "Leadership – Aditya Kalshetti",
    description: "Successfully achieved autonomous quadcopter flight and initiated the development of the FPV Drone, VTOL Aircraft, and Large-Scale Hexacopter projects."
  }
];
export const RND_TOPICS = [
  { title: "Real-Time Vision Systems", description: "Engineering ultra-low latency FPV systems for high-speed precision flight and superior spatial awareness." },
  { title: "Transitional Flight Dynamics", description: "Combining multirotor vertical agility with fixed-wing aerodynamic efficiency for extended-range missions." },
  { title: "High-Payload Architecture", description: "Designing large-scale, high power-to-weight architectures to safely and efficiently carry custom heavy payloads." },
  { title: "Embedded Control Logic", description: "Developing custom flight control logic and integrating advanced telemetry for complex, multi-modal drone hardware." }
];

export const MENTORS = [
  {
    name: "Dr. Shrinivas S. Metan",
    designation: "Faculty Mentor",
    department: "Aerospace Engineering",
    guidanceArea: "Guidance and Technical Mentorship"
  }
];
