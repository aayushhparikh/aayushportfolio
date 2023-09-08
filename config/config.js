import profile from "./profile.png";
import {
  faAppStore,
  faGithub,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";

export const navigation = {
  name: "Aayush",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
};
export const intro = {
  title: "Hey, I'm Aayush",
  description: "A software engineer that is always eager to learn new things.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    // {
    //   title: "Resume",
    //   link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
    //   isPrimary: false,
    // },
  ],
};

export const about = {
  title: "Who I am",
  description: [
    "I'm a fourth-year Software Engineering student at Ontario Tech University, and my enthusiasm for software development has been a part of my life since high school. Back then, I started coding websites for fun during my free time, This early exposure ignited my passion for software engineering, and it became clear that pursuing a degree in this field was the right path for me. When not immersed in coding, I enjoy hitting the gym and playing basketball. These activities provide a balance to my tech-focused interests, keeping me physically active and mentally refreshed.",
  ],
};

export const work = {
  title: "Experience",
  cards: [
    {
      title: "CIBC",
      jobTitle: "Application Developer",
      date: "May 2023 - Present",
      description: [
        "Helped continuously push changes to CIBC's growing Private Wealth Management Software utilizing Java to ensure seamless user experience when using the application",
      ],
      icons: null,
    },
    {
      title: "FGF Brands",
      jobTitle: "Automation Software QA",
      date: "Sept 2021 - Aug 2022",
      description: [
        "Created and maintained a suite of over 500 automated tests, utilizing Java and Selenium, resulting in a 50% reduction in manual testing time",
      ],
      icons: null,
    },
  ],
};

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Fresh Market",
      description:
        "E-Commerce application using Android Studio that allows users to log in and add items to a cart saving all their data on a SQL Lite Database",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/aayushhparikh/FreshMarket",
        },
      ],
    },
    {
      title: "Online Bookstore",
      description:
        "A user-friendly bookstore that allows users to quickly find books relevant to their enrolled courses and provides efficient search methods for ease of access",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/aayushhparikh/OTU-Bookstore",
        },
      ],
    },
    {
      title: "ChatR",
      description:
        "Real-time chat messaging system that allows users to exchange messages securely",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/aayushhparikh/Secure-Chat-System/",
        },
      ],
    },
    {
      title: "Lie Detector Algorithm",
      description:
        "Utilized TensorFlow and Keras to train a deep learning model that achieved an accuracy of 86% in detecting deception from video transcripts.",
      icons: [
        {
          icon: faGithub,
          link: "https://colab.research.google.com/drive/1XF5iTZYciL6DgLbxsZLPgs7AjF-_aRe1?usp=sharing",
        },
      ],
    },
  ],
};

export const contact = {
  title: "Get in touch",
  description:
    "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at aayush.b.parikh@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:aayush.b.parikh@gmail.com",
      isPrimary: true,
    },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: "Aayush Parikh",
  description:
    "I am currently a fourth year Software Engineering student at Ontario Tech University, I have a passion for software engineering.",
  image: profile.src,
};
