import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  carrent,
  jobit,
  faceregprj,
  mlopsprj,
  pytorchprj,
  tripguide,
  threejs,
  tiktok,
  thales,
  astar,
  ntu,
  ntuvn,
  python,
  java,
  torch,
  scikit,
  tensorflow,
  sql,
  c,
  cpp
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Quantitative Trading",
    icon: backend,
  },
  {
    title: "Artificial Intelligence",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Torch",
    icon: torch,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "scikit",
    icon: scikit,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "tensorflow",
    icon: tensorflow,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Algorithm Engineer Intern",
    company_name: "TikTok (ByteDance)",
    icon: tiktok,
    iconBg: "#383E56",
    date: "May 2024 - December 2024",
    points: [
      "Developed Algorithm for TikTok's E-Commerce Platform",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Thales Solution Asia",
    icon: thales,
    iconBg: "#E6DEDD",
    date: "September 2023 - January 2024",
    points: [
      "Conducted object detection training using YOLOX models on a custom dataset to enhance the SMRT system across various scenarios, reduced passing time though gate by 20%.",
      "Executed customized training on YOLOv models and conversion of data formats between Cocojson and txt, improved accuracy by 72%.",
      "Developed scripts for continuous testing model on videos in 48 hours, involving video input, frame extraction with customised fps rate, timestamp marking, YOLO object detection, result logging in a timestamped txt file.",
    ],
  },
  {
    title: "AI & ML Intern",
    company_name: "Agency for Science, Technology and Research (A*STAR)",
    icon: astar,
    iconBg: "#FFFFFF",
    date: "May 2023 - September 2023",
    points: [
      "Researched on project of ”Question Tagging using Knowledge and Casual Inference” with Dr. Zhou Nina.",
      "Analysed and evaluated various Language Model Models (LLMs), including LLaMa, Alpaca-Lora, and RoBERTa. Conducted local loading and testing of models with personal data, requiring data cleaning and preprocessing.",
      "Constructed text sentiment analysis model using Sentence-Transformer (SBERT) to map question text with outcomes and topics, achieved accuracy of 70%.",
      "Fine-tuned pre-trained cross/bi-encoders to training models from scratch with customized data.",
    ],
  },
  {
    title: "Student Research Assistant",
    company_name: "Nanyang Technological University",
    icon: ntuvn,
    iconBg: "#FFFFFF",
    date: "May 2023 - September 2023",
    points: [
      "Collected and analysed traffic data on-site through manual methods and video recording, organizing and labelling over 2000 pictures.",
      "Modified YOLOv5, adapting model to generate both object bounding boxes and re-identification (re-id) features. Involved adjusting loss functions, data loaders, and the YOLOv5 network.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was imposible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Facial Detection with Database",
    description:
      "This project showcasing Computer Vision application: Checking attendance",
    tags: [
      {
        name: "Open-CV",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "face_recognition",
        color: "orange-text-gradient",
      },
    ],
    image: faceregprj,
    source_code_link: "https://github.com/phanng0605/facialDetectionWithDatabase",
  },
  {
    name: "PyTorch Transformer",
    description:
      "This is my implementation of Transformer using Pytorch from scratch, going through the Encoder-Decoder structure.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "PyTorch",
        color: "green-text-gradient",
      },
      {
        name: "Transformer",
        color: "pink-text-gradient",
      },
    ],
    image: pytorchprj,
    source_code_link: "https://github.com/phanng0605/PytorchTransformer",
  },
  {
    name: "MLOps Spam Detections",
    description:
      "An email spam classifier using machine learning techniques, deploy and host using Flask and FastAPI.",
    tags: [
      {
        name: "Flask",
        color: "orange-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "Heroku",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      // {
      //   name: "Heroku",
      //   color: "purple-text-gradient"
      // }
    ],
    image: mlopsprj,
    source_code_link: "https://github.com/phanng0605/MLOps_Spam_Detections",
  },
];

export { services, technologies, experiences, testimonials, projects };
