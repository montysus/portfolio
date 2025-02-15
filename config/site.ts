export const siteConfig = {
  name: "shadcn/ui",
  url: "https://ui.shadcn.com",
  ogImage: "https://ui.shadcn.com/og.jpg",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn-ui/ui",
  },
};

export const userInfo = {
  skills: [
    "PCB Design",
    "ABB RobotStudio",
    "Arduino",
    "OrCAD",
    "CAD",
    "C++",
    "Python",
    "MATLAB",
    "Fusion 360",
  ],
  experiences: [
    {
      title: "Drone Operator and Emergency Response Specialist",
      company: "Coastal Rescue Team",
      period: "2021 - Present",
      description:
        "Conducted surveillance and rescue operations using advanced drones like the DJI Matrice 300 RTK. Managed over 150 flight hours and performed aerial deployment of life jackets to enhance emergency response efficiency.",
    },
    {
      title: "Robotics Developer",
      company: "ROBORESCUE UMA, University of Málaga",
      period: "2020 - Present",
      description:
        "Collaborated on the design and development of an articulated mobile robot for emergency scenarios. Applied advanced robotics concepts to create innovative solutions for rescue operations.",
    },
    {
      title: "Life Jacket Deployment System Designer",
      company: "Independent Project",
      period: "2021",
      description:
        "Designed, fabricated, and implemented a drone-based system to release life jackets rapidly in emergencies. This project improved rescue response times significantly and demonstrated the potential of integrating drone technology with life-saving operations.",
    },
  ],
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};
