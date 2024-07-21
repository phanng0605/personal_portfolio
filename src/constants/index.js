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
  cpp,
  stock,
  homepage,
  spotifan1,
  airst,
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
      "Developed and optimized algorithmic solutions for product profiling, focusing on attribute normalization models, achieving an 89\% accuracy rate. This model is currently deployed in the recommendation production line.",
      "Optimised algorithms for unified product representations by constructing a new algorithm utilizing an embedding model and fine-tuning with Siamese network using triplet loss, achieving a 91\% accuracy rate.",
      "Maintained \& improved robustness, stability and computational efficiencies of algorithm solutions in live business.",
    ],
  },
  {
    title: "Stock Trader",
    company_name: "Self-Employed",
    icon: stock,
    iconBg: "#FFFFFF",
    date: "March 2024 - Jul 2024",
    points: [
      "Developed and backtested over 10 quantitative trading strategies (alphas) using historical data and Python pyfolio, backtrader, yfinance libraries, with return of over 70\% and a Sharpe ratio exceeding 3.0 across multiple strategies.",
      "Constructed diversifed portfolio with over 10 stocks in the US market, including prominent tickers (NVDA, AAPL, etc.) and gained over \$300 profit with original \$700 fund invested through online broker.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Thales Solution Asia",
    icon: thales,
    iconBg: "#E6DEDD",
    date: "September 2023 - January 2024",
    points: [
      "Conducted object detection training using YOLOX models on a custom dataset to enhance the SMRT system across various scenarios, reducing gate passing time by 20\%.",
      "Executed training on YOLOv models and data conversion between CocoJSON and TXT, achieved 72\% accuracy.",
      "Developed scripts for continuous model testing on videos within 48 hours, including video input, frame extraction at a customized FPS rate, timestamp marking, YOLO object detection, and result logging in a timestamped TXT file.",
    ],
  },
  {
    title: "AI & ML Intern",
    company_name: "Agency for Science, Technology and Research (A*STAR)",
    icon: astar,
    iconBg: "#FFFFFF",
    date: "May 2023 - September 2023",
    points: [
      "Researched project 'Question Tagging using Knowledge and Causal Inference' under guidance of Dr. Zhou Nina.",
      "Analyzed and evaluated Language Models (LLMs), including LLaMa, Alpaca-Lora, and RoBERTa, by conducting local loading and testing with personal data, which involved data cleaning and preprocessing.",
      "Constructed text sentiment analysis model using Sentence-Transformer (SBERT) to map question text with outcomes and topics, achieved accuracy of 86%.",
      "Fine-tuned pre-trained cross/bi-encoders to training models from scratch with customized data.",
    ],
  },
  {
    title: "Student Research Assistant",
    company_name: "Nanyang Technological University",
    icon: ntu,
    iconBg: "#FFFFFF",
    date: "May 2023 - September 2023",
    points: [
      "Conducted onsite traffic data collection utilizing manual counting and video surveillance methodologies.",
      "Processed, analyzed, and annotated over 2000 images extracted from video footage in Pick-Up and Drop-Off zones.",
      "Enhanced the YOLOv5 architecture to output object bounding boxes and re-identification attributes by refactoring loss functions, data loaders, network configurations of YOLOv5, achieve over 80\% accuracy with 0.8 IoU threshold."
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
    name: "Spotify Clone",
    description:
      "This is a Spotify clone using Typescript, React for FE and BE development and Supabase for database management.",
    tags: [
      {
        name: "React",
        color: "orange-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
    ],
    image: spotifan1,
    source_code_link: "https://spotify-clone-blush-five-56.vercel.app/",
  },
  {
    name: "AIRST - research paper summarization",
    description:
      "This AI tool app built on Streamlit library provides a user-friendly tool for accessing key information from academic literature.",
    tags: [
      {
        name: "Streamlit",
        color: "orange-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "Summarization",
        color: "pink-text-gradient",
      },
      {
        name: "LLMs",
        color: "blue-text-gradient",
      },
      // {
      //   name: "Heroku",
      //   color: "purple-text-gradient"
      // }
    ],
    image: airst,
    source_code_link: "https://github.com/pvhuwung/AIRST-research-paper-summarization",
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
  {
    name: "RentLah!",
    description:
      "RentLah! provides a user friendly platform streamline the rental process, making it easier for our users to find a perfect home.",
    tags: [
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
      // {
      //   name: "Heroku",
      //   color: "purple-text-gradient"
      // }
    ],
    image: homepage,
    source_code_link: "https://github.com/phanng0605/RentLah",
  },
];

export { services, technologies, experiences, testimonials, projects };
