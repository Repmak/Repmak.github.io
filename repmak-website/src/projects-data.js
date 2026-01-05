// import PromptableTraceback from './assets/promptabletraceback.gif';
import JustInTime from './assets/justintime.gif';
import Jolt from './assets/jolt.gif';
import Connect4 from './assets/connect 4.gif';
import AuditoriumBookingSystem from './assets/auditorium booking system.gif';


export const projects = [
    {
        title: 'example',
        dates: 'dates',
        imageCaption: "",
        description: "",
        githubUrl: "https://github.com/Repmak/promptable-traceback",
        publicRepo: true,
        techStack: ["C++"],
        cols: 2,
        rows: 2,
        colorClass: 'widget-color-1'
    },
    {
        title: "PromptableTraceback",
        dates: "Ongoing development",
        image: null,
        imageCaption: "",
        description: "",
        githubUrl: "https://github.com/Repmak/promptable-traceback",
        publicRepo: true,
        techStack: ["Python", "GitHub Actions", "PyPI", "TOML"],
        cols: 2,
        rows: 2,
        colorClass: 'widget-color-2'
    },
    {
        title: "JustInTime",
        dates: "06/2025 - 12/2025",
        image: JustInTime,
        imageCaption: "Analysing how scheduling tasks impact associated financial risks.",
        description: "JustInTime is an intelligent project planning tool built with TensorFlow and scikit-learn to forecast delays and risks based on historical project data. By processing inputs such as team assignments, supplier details, budgets, and target completion dates, it identifies potential bottlenecks early and provides actionable insights to optimise scheduling and keep projects on track.",
        githubUrl: "https://github.com/Repmak/JustInTime",
        publicRepo: false,
        techStack: ["Python", "HTML", "JavaScript", "CSS", "PostgreSQL", "ReactJS", "Supabase", "scikit-learn", "TensorFlow", "NumPy"],
        cols: 2,
        rows: 2,
        colorClass: 'widget-color-3'
    },
    {
        title: "Jolt",
        dates: "06/2025 - 06/2025",
        image: Jolt,
        imageCaption: "Generating some Indeed job insights when searching for a Sales Assistant position.",
        description: "A Gemini-powered Chrome extension that gives users some quick insights by matching their job preferences, availability, and experience to ideal roles.",
        githubUrl: "https://github.com/Repmak/Jolt",
        publicRepo: false,
        techStack: ["HTML", "JavaScript", "CSS"],
        cols: 1,
        rows: 2,
        colorClass: 'widget-color-4'
    },
    {
        title: "Connect 4",
        dates: "07/2024 - 08/2024",
        image: Connect4,
        imageCaption: "A quick game of Connect 4.",
        description: "A Connect 4 game built with Pyglet, featuring an interactive GUI and an AI opponent powered by the minimax algorithm. (This project played a key role in securing direct entry into the second year of the Computer Science program at the University of St Andrews.)",
        githubUrl: "https://github.com/Repmak/Connect-4",
        publicRepo: true,
        techStack: ["Python", "pyglet"],
        cols: 2,
        rows: 2,
        colorClass: 'widget-color-3'
    },
    {
        title: "Auditorium Booking System",
        dates: "03/2023 - 05/2023",
        image: AuditoriumBookingSystem,
        imageCaption: "Reserving 5 seats for a showing of Ratatouille.",
        description: "An auditorium booking system built with Flask, HTML, JavaScript, CSS, and an SQL database featuring an intuitive interface for reserving seats to movies and plays.",
        githubUrl: "https://github.com/Repmak/Auditorium-Booking-System",
        publicRepo: true,
        techStack: ["Python", "HTML", "JavaScript", "CSS", "SQL", "Flask"],
        cols: 1,
        rows: 2,
        colorClass: 'widget-color-2'
    }
];
