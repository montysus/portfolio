export const asset = (name: string) => `/montyforge/${name}`;

export const projects = [
  {
    href: "/anvil3",
    number: "01 / 02",
    status: "IN DEVELOPMENT",
    title: "Modular Release System - Anvil-III",
    category: "Autonomous Drone Systems · 2026",
    description:
      "Adaptive payload release mechanism for drones. 5 kg capacity, any payload shape, <100 ms deployment. Fielded with Scandinavian Drone Company for offshore resupply in the North Sea.",
    media: [
      "anvil3-r1.png",
      "anvil3-r2.png",
      "anvil3-r3.png",
      "anvil3-r4.png",
      "anvil3-r5.png",
    ],
  },
  {
    href: "/lifevest",
    number: "02 / 02",
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
