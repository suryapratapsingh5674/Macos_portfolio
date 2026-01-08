const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Dec 15, 2025",
    title:
      "Frontend Is Not Easy, Backend Is Not Hard — This Is the Lie",
    image: "/images/blog2.png",
    link: "https://devexplorer.hashnode.dev/frontend-is-not-easy-backend-is-not-hard-this-is-the-lie",
  },
  {
    id: 2,
    date: "19 Feb, 2024",
    title: "Mastering Web Animations with GSAP: A Comprehensive Guide",
    image: "/images/blog3.png",
    link: "https://devexplorer.hashnode.dev/mastering-web-animations-with-gsap-a-comprehensive-guide",
  },
  {
    id: 3,
    date: "14 Jan, 2024",
    title: "JS DOM Manipulation Best Practices – with Examples",
    image: "/images/blog1.png",
    link: "https://devexplorer.hashnode.dev/js-dom-manipulation-best-practices-with-examples",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/suryapratapsingh5674",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/suryat6574",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/surya-pratap-singh-tomar/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Movie Info Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "movie-info Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-8",
          description: [
            "CineScope is a modern movie and TV show discovery platform built using React and the TMDB API.",
            "It allows users to explore trending and popular movies, TV shows, and people with smooth infinite scrolling and fast navigation.",
            "Instead of being a basic list-based app, CineScope focuses on rich discovery — detailed pages with trailers, cast information, social links, and direct access to IMDb, Wikidata, and official websites.",
            "The application features category-based browsing, a global search system, dynamic routing, and a clean UI powered by modern frontend tools. State management is handled using Redux Toolkit, with Axios for API communication and smooth scrolling via Lenis.",
            "Think of it as a lightweight IMDb-style experience — fast, visual, and focused on exploration rather than clutter.",
            "Tech Stack:React.js, Redux Toolkit, TMDB API, Axios, Tailwind CSS, Lenis"
          ],
        },
        {
          id: 2,
          name: "movei-info-react.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://movei-info-react.vercel.app/",
          position: "top-5 left-49",
        },
        {
          id: 4,
          name: "movie-info.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-5 right-20",
          imageUrl: "/images/project-1.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "URL Shortener Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-43",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "URL Shortener Application.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "URL Shortener is a lightweight URL shortener application that converts long, cluttered links into clean, shareable short URLs.",
            "It focuses on speed, simplicity, and reliability — no unnecessary UI noise.",
            "Users can generate short links instantly, copy them with a single click, and use them anywhere without friction.",
            "Behind the scenes, the app handles redirection efficiently, ensuring fast response times and consistent behavior.",
            "The project is built to demonstrate core backend concepts such as routing, request handling, data storage, and URL redirection logic, while keeping the frontend minimal and functional.",
            "Think of it as a stripped-down version of Bitly — focused on function first, polish second.",
            "Tech Stack (adjust if needed): JavaScript, Node.js, Express.js, MongoDB (or whatever you actually used)"
          ],
        },
        {
          id: 2,
          name: "URL-Shortener.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://url-chi-five.vercel.app/",
          position: "top-5 left-49",
        },
        {
          id: 4,
          name: "URL-Shortener-Application.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-5 right-20",
          imageUrl: "/images/project-2.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 left-5",
        // },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Foodly — Full Stack Food Delivery App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-5 left-7",
      children: [
        {
          id: 1,
          name: "Foodly — Full Stack Food Delivery App.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Foodly is a full stack food delivery web application that lets users browse restaurants, view menus, place food orders, and track order status in real time.",
            "The frontend offers a responsive and user-friendly interface for discovering dishes, filtering by category or restaurant, adding items to cart, and checking out with seamless navigation and state management.",
            "The backend powers user authentication, restaurant and menu data, order creation, and secure order handling with REST APIs. It manages data persistence, session control, and route protection for both customers and admin roles.",
            "Designed as a real-world clone of a food ordering platform, this project demonstrates CRUD operations, API integration, user flows, and full stack architecture.",
            "Tech Stack: React (frontend), Node.js + Express (backend), MongoDB (database), REST APIs, and JWT for auth."
          ],
        },
        {
          id: 2,
          name: "Foodly.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://foodly-frontend-brown.vercel.app/",
          position: "top-5 left-49",
        },
        {
          id: 4,
          name: "Foodly.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-5 right-20",
          imageUrl: "/images/project-3.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/gallary/surya.png",
    },
    // {
    //   id: 2,
    //   name: "casual-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-10 right-76",
    //   imageUrl: "/images/adrian-2.jpg",
    // },
    // {
    //   id: 3,
    //   name: "conference-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-10 left-60",
    //   imageUrl: "/images/adrian-3.jpeg",
    // },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-30",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/gallary/surya.png",
      description: [
        "Hey! I’m Surya 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-8",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-30",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };