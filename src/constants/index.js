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

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
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
    name: "TypeScript",
    icon: typescript,
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

const education = [
  {
    school: "Rice University",
    degree: "Bachelor of Science in Computer Science",
    location: "Houston, USA",
    date: "Jan 2025 - June 2025",
    icon: web,
    iconBg: "#FFFFFF",
    points: [
      "Courses: Machine Learning, Natural Language Processing, Cryptography, Internet of Things, Computer Security.",
    ],
  },
  {
    school: "Nanyang Technological University",
    degree: "Bachelor of Computing in Computer Science & Minor in Risk Analytics",
    location: "Singapore",
    date: "June 2022 - June 2026",
    icon: ntu,
    iconBg: "#FFFFFF",
    points: [
      "Courses: Investment Management with Python and Machine Learning, Deep Learning Specialization, Google Professional Data Analytics, Excel Skills for Data Analytics and Visualization, Visual & Predictive Technique.",
      "ASEAN Undergraduate Scholarship (full-ride, four-year program) awarded by Singapore's Ministry of Education.",
    ],
  },
];

const experiences = [
  {
    title: "Algorithm Engineer",
    company_name: "TikTok (ByteDance)",
    icon: tiktok,
    iconBg: "#383E56",
    date: "August 2026 - Present",
    points: [
      "Engineered an agentic pipeline to automate the evaluation of shoppable photos for TikTok Shop, implementing multi-stage model distillation and automated rubric optimization, achieving pass precision over 98\% to ensure the quality of user-facing shoppable photos.",
      "Trained and deployed an in-house model for product consistency evaluation using SFT, GRPO, and DAPO pipelines, achieving 96\% precision and 70\% recall.",
    ],
  },
  {
    title: "Algorithm Engineer Intern",
    company_name: "TikTok (ByteDance)",
    icon: tiktok,
    iconBg: "#383E56",
    date: "May 2025 - May 2026",
    points: [
      "Deployed a brand recognition model for new TikTok Shop markets (EU, LATAM), achieving 90\%+ precision, recall, and accuracy using a two-step (SFT LoRA + GRPO MLLM) training strategy, and automated the entire workflow via a custom pipeline for data preparation, annotation, training, and evaluation to enable rapid generalization to new countries.",
      "Engineered an attribute recognition model for TikTok Shop by fine-tuning Multimodal LLMs (MLLM) via Supervised Fine-Tuning (SFT); achieved 90\% accuracy, significantly improving product data representation and search relevance on the For You Page.",
      "Developed and deployed an MLLM-powered automation framework for B-end quality assessments, reducing BPO costs and accelerating algorithm deployment. This pipeline achieved 92\% end-to-end accuracy (a 10\% precision uplift over baseline) by fine-tuning MLLMs (e.g., QwenVL2.5) with Group Relative Policy Optimization (GRPO).",
    ],
  },
  {
    title: "Algorithm Engineer Intern",
    company_name: "TikTok (ByteDance)",
    icon: tiktok,
    iconBg: "#383E56",
    date: "May 2024 - December 2024",
    points: [
      "Developed and optimized algorithmic solutions for product profiling by creating a new algorithm that utilizes an embedding model for candidate retrieval, further enhanced by fine-tuning with a Siamese network using triplet loss, achieving a 95\% accuracy rate for the top 30 retrieved candidates.",
      "Integrated and deployed the attribute normalization service across the entire attribute service, constructing thrift files and connecting client and server to test performance and latency; achieved 87\% accuracy and improved the service's Queries Per Second (QPS) by 200\%.",
      "Developed a pipeline leveraging the Multimodal Large Language Model (InternVL2) to align product categories, properties, and values across diverse e-commerce platforms, achieving 95\% alignment accuracy and a 0.94 F1 score.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Thales Solutions Asia",
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
    date: "May 2023 - August 2023",
    points: [
      "Researched project 'Question Tagging using Knowledge and Causal Inference' under guidance of Dr. Zhou Nina.",
      "Analyzed and evaluated Language Models (LLMs), including LLaMa, Alpaca-Lora, and RoBERTa, by conducting local loading and testing with personal data, which involved data cleaning and preprocessing.",
      "Analyzed text sentiment using Sentence-Transformer to map questions to outcomes and topics, achieved 86\% accuracy.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "Nanyang Technological University",
    icon: ntu,
    iconBg: "#FFFFFF",
    date: "March 2023 - May 2023",
    points: [
      "Processed, analyzed, and annotated over 2000 images extracted from video footage in Pick-Up and Drop-Off zones.",
      "Enhanced the YOLOv5 architecture to output object bounding boxes and re-identification attributes by refactoring loss functions, data loaders, network configurations of YOLOv5, achieve over 80\% accuracy with 0.8 IoU threshold."
    ],
  },
];

const testimonials = [];

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

export { services, technologies, experiences, education, testimonials, projects, navLinks };
