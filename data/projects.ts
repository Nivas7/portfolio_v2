export type Project = {
  title: string;
  description: string;
  imgPath: string;
  techs: string[];
  githubLink?: string;
  liveLink?: string;
  status: "online" | "building" | "offline";
};

export const projects: Project[] = [
  {
    title: "Tamil Ocr",
    description:
      "The Tamil OCR project is a web-based application designed to recognize and extract Tamil text from images.",
    imgPath: "/project-images/tamil_ocr.png",
    techs: [
      "ReactJS",
      "NextJS",
      "Flask",
      "Shadcn UI",
      "TailwindCSS",
      "Python",
      "OpenCV",
      "CNN",
      "craft-text-detector",
    ],
    githubLink: "https://github.com/nivas7/tamil_ocr",
    liveLink: "https://tamil-ocr-tau.vercel.app",
    status: "online",
  },
  {
    title: "Deta",
    description:
      "A A Personal data logging application built with React Native. Deta combines the Japanese word for data with clean, minimalist approach to personal information management.",
    imgPath: "/project-images/nivas7_Deta.png",
    techs: [
      "React Native",
      "SanKey Flow",
      "React Native Svg",
      "Expo",
      "React Native Web View",
    ],
    githubLink: "https://github.com/nivas7/deta",
    liveLink: "",
    status: "online",
  },
  {
    title: "Chat Bot",
    description:
      "high-level chatbot in Python that provides exceptional customer service by answering user queries on a website or application",
    imgPath: "/project-images/chatbot.png",
    techs: ["NextJS", "ReactJS", "TailwindCSS", "Next Auth", "Flask"],
    liveLink: "https://github.com/nivas7/chatbot",
    status: "offline",
  },
  {
    title: "Recurring Date Picker",
    description:
      "A customizable recurring date picker component built with React, Tailwind CSS v4, and TypeScript. Supports flexible daily, weekly, and monthly recurrence patterns.",
    imgPath: "/project-images/recurrence_date.png",
    techs: ["ReactJS", "NextJS", "TailwindCSS v4", "TypeScript", "Jest"],
    liveLink: "https://github.com/nivas7/Recurring-Date-Picker-Component",
    status: "offline",
  },
  {
    title: "Nivaz Blog",
    description: "My personal Blogging Site.",
    imgPath: "/project-images/portfolio_v1.png",
    techs: ["ReactJS", "NextJS", "TailwindCSS", "MagicUI"],
    githubLink: "https://github.com/nivas7/nivas7.github.io",
    liveLink: "https://nivas7.github.io",
    status: "online",
  },
];
