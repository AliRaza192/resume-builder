import TEMPLATE_ONE_IMG from "../assets/template1.png";
import TEMPLATE_TWO_IMG from "../assets/template2.png";
import TEMPLATE_THREE_IMG from "../assets/template3.png";

export const resumeTemplates = [
  {
    id: "01",
    thumbnailImg: TEMPLATE_ONE_IMG,
    colorPaletteCode: "themeOne",
  },
  {
    id: "02",
    thumbnailImg: TEMPLATE_TWO_IMG,
    colorPaletteCode: "themeTwo",
  },
  {
    id: "03",
    thumbnailImg: TEMPLATE_THREE_IMG,
    colorPaletteCode: "themeThree",
  },
];

export const themeColorPalette = {
  themeOne: [
    ["#EBFDF7", "#A1F4FD", "#CEFAFE", "#00B8DB", "#4A5565"],
    ["#E9FBF8", "#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"],
    ["#E9FBFD", "#93E9FA", "#62C2FB", "#8579D1", "#4B4B5C"],
    ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
    ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
    ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9CF5", "#2D3748"],
    ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
    ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
    ["#F9FCFF", "#E3F0F9", "#C0DDEE", "#6CA6CF", "#4654E5"],
    ["#FFDF6", "#FFF4D7", "#FFE7A0", "#FFD000", "#5753E4"],
    ["#FCFFF", "#C8F0FF", "#99F0FF", "#007BA7", "#2B3A42"],
    ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#A4A4AA", "#222222"],
    ["#E3F2FD", "#90CAF9", "#a8d2f4", "#1E88E5", "#0D47A1"],
  ],
};

export const DUMMY_RESUME_DATA = {
  profileInfo: {
    profileImg: null,
    profilePreviewUrl: "", // Note: using profilePreviewUrl instead of previewUrl based on the template code
    fullName: "John Doe",
    designation: "Senior Software Engineer",
    summary:
      "Passionate and results-driven developer with 6+ years of experience building web applications with modern JavaScript frameworks. Specialized in React, Node.js and cloud infrastructure. Strong problem-solving abilities with a focus on creating efficient, scalable, and maintainable code.",
  },
  contactInfo: {
    email: "john.doe@example.com",
    phone: "+1234567890",
    location: "#12 Anywhere, Any City, Any Country",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
    website: "johndoe.com",
  },
  workExperience: [
    {
      id: "exp1",
      companyName: "Tech Solutions Inc.", // Using companyName as per template code
      role: "Senior Software Engineer", // Using role as per template code
      startDate: "2021-01",
      endDate: "Present",
      description:
        "Led development of cloud-based applications using React and Node.js. Improved system performance by 40% through code optimization and implemented CI/CD pipeline for streamlined deployments. Mentored junior developers and conducted code reviews.",
    },
    {
      id: "exp2",
      companyName: "Digital Innovations LLC",
      role: "Software Developer",
      startDate: "2018-03",
      endDate: "2020-12",
      description:
        "Developed and maintained web applications for enterprise clients using JavaScript, HTML5, and CSS3. Created reusable component library that reduced development time by 30%. Optimized database queries resulting in 25% faster page loads.",
    },
    {
      id: "exp3",
      companyName: "WebTech Solutions",
      role: "Junior Developer",
      startDate: "2016-06",
      endDate: "2018-02",
      description:
        "Assisted in the development of responsive websites and web applications. Collaborated with designers to implement UI/UX improvements. Participated in daily stand-ups and sprint planning.",
    },
  ],
  education: [
    {
      id: "edu1",
      institution: "Massachusetts Institute of Technology",
      degree: "Master of Science in Computer Science",
      startDate: "2014-09",
      endDate: "2016-05",
      location: "Cambridge, MA",
    },
    {
      id: "edu2",
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Engineering",
      startDate: "2010-09",
      endDate: "2014-05",
      location: "Berkeley, CA",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "CI/CD",
    "GraphQL",
    "Redux",
    "Jest",
    "Webpack",
    "Git",
  ],
  projects: [
    {
      id: "proj1",
      title: "E-commerce Platform",
      description:
        "Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented payment processing, user authentication, and admin dashboard.",
      github: "github.com/johndoe/ecommerce",
      liveDemo: "ecommerce-demo.johndoe.com",
    },
    {
      id: "proj2",
      title: "Task Management App",
      description:
        "Developed a responsive task management application with real-time updates and collaborative features using React, Firebase, and Redux.",
      github: "github.com/johndoe/taskmanager",
      liveDemo: "taskapp.johndoe.com",
    },
    {
      id: "proj3",
      title: "Weather Forecast App",
      description:
        "Created a weather application that provides real-time forecasts using OpenWeatherMap API. Features include location detection, favorites, and hourly/daily forecasts.",
      github: "github.com/johndoe/weatherapp",
      liveDemo: "weather.johndoe.com",
    },
  ],
  certifications: [
    {
      id: "cert1",
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2022",
    },
    {
      id: "cert2",
      title: "Google Professional Cloud Developer",
      issuer: "Google Cloud Platform",
      year: "2021",
    },
    {
      id: "cert3",
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      year: "2020",
    },
    {
      id: "cert4",
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      year: "2021",
    },
  ],
  languages: [
    {
      id: "lang1",
      language: "English",
      proficiency: "Native",
    },
    {
      id: "lang2",
      language: "Spanish",
      proficiency: "Professional working proficiency",
    },
    {
      id: "lang3",
      language: "French",
      proficiency: "Elementary proficiency",
    },
  ],
  interests: [
    "Open Source Development",
    "Machine Learning",
    "Blockchain Technology",
    "UI/UX Design",
    "Technical Writing",
    "IoT Projects",
  ],
};
