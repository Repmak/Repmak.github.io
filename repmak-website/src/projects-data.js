// import PromptableTraceback from './assets/promptabletraceback.gif';
import JustInTime from './assets/justintime.gif';
// import JustInTime from './assets/justintime.png';
import Jolt from './assets/jolt.gif';
// import Jolt from './assets/jolt.png';
import Connect4 from './assets/connect 4.gif';
// import Connect4 from './assets/connect 4.png';
import AuditoriumBookingSystem from './assets/auditorium booking system.gif';
// import AuditoriumBookingSystem from './assets/auditorium booking system.png';

export const projects = [
    {
        title: 'WordPiece Tokenizer',
        dates: '01/2026 - Present',
        image: null,
        imageCaption: "",
        imageLeft: true,
        description: "Currently developing a WordPiece tokenizer from scratch in C++. I plan to expand this project to seamlessly load and execute Hugging Face Transformers directly within C++ environments.",
        repo: "https://github.com/Repmak/word-piece-tokenizer",
        publicRepo: true,
        techStack: ["C++"],
        sizing: 'extra-wide',
        positioning: 'project-no-img',
        color: 'color-set-3'
    },
    {
        title: "Promptable Traceback",
        dates: "01/2026 - Present",
        image: null,
        imageCaption: "",
        imageLeft: true,
        description: "Built and maintaining an open-source Python library to streamline AI-assisted debugging by automatically capturing tracebacks, variable states, and surrounding code context.",
        repo: "https://github.com/Repmak/promptable-traceback",
        publicRepo: true,
        techStack: ["Python", "GitHub Actions", "PyPI"],
        sizing: 'big',
        positioning: 'project-img',
        color: 'color-set-2'
    },
    {
        title: "JustInTime",
        dates: "06/2025 - 12/2025",
        image: JustInTime,
        imageCaption: "Analysing how scheduling tasks impact associated financial risks.",
        imageLeft: true,
        description: "JustInTime is an intelligent project planning tool built with TensorFlow and scikit-learn to forecast delays and risks based on historical project data. By processing inputs such as team assignments, supplier details, budgets, and target completion dates, it identifies potential bottlenecks early and provides actionable insights to optimise scheduling and keep projects on track.",
        repo: "https://github.com/Repmak/JustInTime",
        publicRepo: false,
        techStack: ["Python", "HTML", "JavaScript", "CSS", "PostgreSQL", "ReactJS", "Supabase", "scikit-learn", "TensorFlow", "NumPy"],
        sizing: 'big',
        positioning: 'project-img',
        color: 'color-set-1'
    },
    {
        title: "Jolt",
        dates: "06/2025 - 06/2025",
        image: Jolt,
        imageCaption: "Generating some Indeed job insights when searching for a Sales Assistant position.",
        imageLeft: true,
        description: "A Gemini-powered Chrome extension that gives users some quick insights by matching their job preferences, availability, and experience to ideal roles.",
        repo: "https://github.com/Repmak/Jolt",
        publicRepo: false,
        techStack: ["HTML", "JavaScript", "CSS"],
        sizing: 'wide',
        positioning: 'project-img',
        color: 'color-set-1'
    },
    {
        title: "Connect 4",
        dates: "07/2024 - 08/2024",
        image: Connect4,
        imageCaption: "A quick game of Connect 4.",
        imageLeft: true,
        description: "Connect 4 game powered by the Minimax algorithm.",
        repo: "https://github.com/Repmak/Connect-4",
        publicRepo: true,
        techStack: ["Python", "pyglet"],
        sizing: 'big',
        positioning: 'project-img',
        color: 'color-set-3'
    },
    {
        title: "Auditorium Booking System",
        dates: "03/2023 - 05/2023",
        image: AuditoriumBookingSystem,
        imageCaption: "Reserving 5 seats for a showing of Ratatouille.",
        imageLeft: false,
        description: "Auditorium booking system built with Flask, HTML, JavaScript, CSS, and an SQL database featuring an intuitive interface for reserving seats to movies and plays.",
        repo: "https://github.com/Repmak/Auditorium-Booking-System",
        publicRepo: true,
        techStack: ["Python", "HTML", "JavaScript", "CSS", "SQL", "Flask"],
        sizing: 'big',
        positioning: 'project-img',
        color: 'color-set-1'
    }
];
