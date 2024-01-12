import {
  mobile,
  creator,
  web,
  firebase,
  flutter,
  reactjs,
  git,
  figma,
  starbucks,
  tesla,
  connectedSS,
  griotSS,
  courtCaseSS,
  raktDataSS,
  chatBotSS,
  writer,
  dart,
  getx,
  riverpod,
  jira,
  bktd,
  connected,
  griot,
  paketta,
  learnJava,
  realEstate,
  six,
  tamara,
  entsol360,
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
    title: "UI Enthusiast",
    icon: figma,
  },
  {
    title: "Flutter Developer",
    icon: flutter,
  },
  {
    title: "React Native Developer",
    icon: reactjs,
  },
  {
    title: "MVVM Clean Architecture",
    icon: writer,
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Riverpod",
    icon: riverpod,
  },
  {
    name: "Getx",
    icon: getx,
  },
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Freelance Flutter Developer",
    company_name: "",
    // icon: starbucks,
    letter: "F",
    iconBg: "#383E56",
    // iconBg: "#E6DEDD",
    date: "March 2020 - February 2023",
    points: [
      'Built various apps, including "Book The Driver", "Griot" and "Connected Society" demonstrating expertise Flutter development.',
      "Implemented robust MVVM architecture in Flutter projects, adhering to best practices to enhance code maintainability.",
      "Demonstrated commitment to industry best practices, ensuring code quality, performance, and maintainability in every project",
      // "Developing and maintaining mobile and web applications using Flutter and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "EntSol360",
    icon: entsol360,
    iconBg: "#383E56",
    date: "March 2023 - Current",
    points: [
      "Developing and maintaining feature rich e-Learning solutions using Flutter. Features such as interactive quizzes, and live lecture streaming",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring compatibility across devices like Mobile & Tablets.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
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
    name: "Connected Society",
    description:
      "Connected Society, a streamlined Flutter app, integrates Firebase for real-time chatting and secure authentication. The app excels in event management, personalized profiles, and a community marketplace. Responsive design ensures a seamless, cross-device experience. Notably, I've seamlessly integrated a payment gateway for added functionality. Explore Connected Society on Google Play for a firsthand experience of my comprehensive Flutter skills.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Payment Gateway",
        color: "pink-text-gradient",
      },
      {
        name: "Realtime Chat",
        color: "orange-text-gradient",
      },
      {
        name: "Video Calling",
        color: "blue-text-gradient",
      },
    ],
    image: connected,
    isPlayStore: true,
    source_code_link: "https://play.google.com/store/apps/details?id=comconnected.society",
    app_store_link: "https://apps.apple.com/in/app/connected-society/id1624949876",
  },
  {
    name: "Book The Driver",
    description:
      "BookTheDriver, available on Google Play, showcases my end-to-end Flutter proficiency. The Passenger app features real-time tracking, map integration, and driver alerts, ensuring a seamless booking experience. Simultaneously, the Driver app streamlines navigation and ride management. Integrated with the Stripe payment gateway, these apps underscore my commitment to comprehensive, user-friendly solutions in the competitive cab booking landscape",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "API Integration",
        color: "green-text-gradient",
      },
      {
        name: "Stripe Payment gateway",
        color: "pink-text-gradient",
      },
      {
        name: "Maps Integration",
        color: "blue-text-gradient",
      },
      {
        name: "Realtime Location Tracking",
        color: "orange-text-gradient",
      },
    ],
    image: bktd,
    isPlayStore: true,
    source_code_link: "https://play.google.com/store/apps/details?id=com.bookthedriver.passengerapp",
    app_store_link: "https://apps.apple.com/us/app/bookthedriver-passenger-app/id1176581953",
  },
  {
    name: "Edukor e-Learning",
    description:
      "Explore Edukor e-Learning on Google Play for a glimpse into my Flutter expertise. This feature-rich platform seamlessly delivers engaging content, interactive quizzes, and live lecture streaming, ensuring a user-friendly interface across devices. Progress tracking enhances the learning experience, showcasing my commitment to innovative, accessible, and visually appealing e-learning solutions.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "API Integration",
        color: "green-text-gradient",
      },
      {
        name: "Progress Tracking",
        color: "pink-text-gradient",
      },
      {
        name: "Video Lecture Streaming",
        color: "orange-text-gradient",
      },
    ],
    image: tamara,
    isPlayStore: true,
    app_store_link: "https://apps.apple.com/us/app/edukor-e-learning/id6471849870",
    source_code_link: "https://play.google.com/store/apps/details?id=com.elearning.edukor",
  },
  {
    name: "Griot",
    description:
      "Griot Stories, a Flutter-powered app, showcases my skills in delivering seamless cross-platform experiences. Available on Google Play, it emphasizes audio streaming and background playback. The app's elegant design reflects my proficiency in crafting user-friendly interfaces with Flutter, underscoring my commitment to seamless and engaging app development.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Audio Streaming",
        color: "pink-text-gradient",
      },
      {
        name: "Custom Playlists",
        color: "orange-text-gradient",
      },
    ],
    image: griot,
    isPlayStore: true,
    source_code_link: "https://play.google.com/store/apps/details?id=com.griot.stories",
  },
  {
    name: "Learn Java",
    description:
      "Learn Java on Google Play epitomizes my Flutter prowess in education tech. This app offers interactive Java learning with live video lectures, result generation, and report features for a comprehensive educational experience. Its seamless design underscores my commitment to user-friendly, feature-rich educational solutions.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Student Report Generation",
        color: "pink-text-gradient",
      },
      {
        name: "Video Lecture Streaming",
        color: "orange-text-gradient",
      },
    ],
    image: learnJava,
    isPlayStore: true,
    source_code_link: "https://play.google.com/store/apps/details?id=learn.java.withatulsharma",
  },
  {
    name: "Paketta",
    description:
      "Paketta, crafted for Hangyo, Paketta showcases my Flutter expertise by enabling real-time monitoring of temperature-sensitive deliveries. This app efficiently tracks trucks, providing key data on location and temperature. Users can set notifications for specific locations and temperature deviations, highlighting my skill in creating streamlined solutions for precise and efficient delivery logistics.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "API Integration",
        color: "green-text-gradient",
      },
      {
        name: "Realtime Sensor Tracking",
        color: "pink-text-gradient",
      },
      {
        name: "Custom Alerts",
        color: "orange-text-gradient",
      },
      {
        name: "Maps & Navigation",
        color: "blue-text-gradient",
      },
    ],
    image: paketta,
    isPlayStore: true,
  },
];

export { services, technologies, experiences, testimonials, projects };
