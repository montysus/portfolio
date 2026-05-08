export const asset = (name: string) => `/montyforge/${name}`;

type Project = {
  href: string;
  number: string;
  status: string;
  title: string;
  category: string;
  description: string;
  media?: string[];
  video?: string;
};

export const projects: Project[] = [
  {
    href: "/lifevest",
    number: "01 / 01",
    status: "ON USE",
    title: "Life Vest Deployment System",
    category: "Systems · 2023",
    description:
      "Developed in collaboration with AEROMEDIA. Field-tested on Spanish beaches for coastal maritime safety, with rapid aerial deployment from drone platforms.",
    video: "chaleco-video.mp4",
  },
];

export const tools = [
  ["Fusion 360", "https://www.autodesk.com/products/fusion-360"],
  ["AutoCAD", "https://www.autodesk.com/products/autocad"],
  ["C++", "https://isocpp.org"],
  ["Python", "https://python.org"],
  ["ROS 2", "https://ros.org"],
  ["PX4", "https://px4.io"],
  ["ArduPilot", "https://ardupilot.org"],
  ["MAVLink", "https://mavlink.io"],
  ["Gazebo", "https://gazebosim.org"],
  ["Arduino", "https://arduino.cc"],
  ["Bambu Lab", "https://bambulab.com"],
  ["Betaflight", "https://betaflight.com"],
  ["MATLAB", "https://www.mathworks.com/products/matlab.html"],
  ["RobotStudio", "https://new.abb.com/products/robotics/robotstudio"],
  ["Xilinx", "https://www.xilinx.com"],
];
