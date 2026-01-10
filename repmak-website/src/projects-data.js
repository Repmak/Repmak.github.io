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
        description: "Currently developing a WordPiece tokenizer from scratch in C++. I plan to expand this project to seamlessly load and execute Hugging Face Transformers directly within C++ environments.",
        repo: "https://github.com/Repmak/word-piece-tokenizer",
        publicRepo: true,
        techStack: ["C++"],
        sizing: 'extra-wide',
        positioning: '',
        color: 'color-set-3'
    },
    {
        title: "Promptable Traceback",
        dates: "01/2026 - Present",
        image: null,
        description: "Built and maintaining an open-source Python library to streamline AI-assisted debugging by automating crash reporting.",
        repo: "https://github.com/Repmak/promptable-traceback",
        publicRepo: true,
        techStack: ["Python", "GitHub Actions", "PyPI"],
        sizing: 'wide',
        positioning: '',
        color: 'color-set-2'
    },
    {
        title: "JustInTime",
        dates: "06/2025 - 12/2025",
        image: JustInTime,
        description: "Project planning tool capable of forecasting delays and risks based on historical project data, including team assignments, supplier details, budgets, and target completion dates.",
        repo: "https://github.com/Repmak/JustInTime",
        publicRepo: false,
        techStack: ["Python", "HTML", "JavaScript", "CSS", "PostgreSQL", "ReactJS", "Supabase", "scikit-learn", "TensorFlow", "NumPy"],
        sizing: 'big',
        positioning: 'half-split-vertical',
        color: 'color-set-1'
    },
    {
        title: "Jolt",
        dates: "06/2025 - 06/2025",
        image: null,
        // image: Jolt,
        description: "Chrome extension for personalised job matching and instant insights.",
        repo: "https://github.com/Repmak/Jolt",
        publicRepo: false,
        techStack: ["HTML", "JavaScript", "CSS"],
        sizing: 'wide',
        positioning: 'half-split-vertical',
        color: 'color-set-1'
    },
    {
        title: "Connect 4",
        dates: "07/2024 - 08/2024",
        image: Connect4,
        imageCaption: "A quick game of Connect 4.",
        description: "Connect 4 game powered by the Minimax algorithm.",
        repo: "https://github.com/Repmak/Connect-4",
        publicRepo: true,
        techStack: ["Python", "pyglet"],
        sizing: 'big',
        positioning: 'half-split-vertical',
        color: 'color-set-3'
    },
    {
        title: "Auditorium Booking System",
        dates: "03/2023 - 05/2023",
        image: AuditoriumBookingSystem,
        description: "Auditorium booking system for reserving seats to movies and plays.",
        repo: "https://github.com/Repmak/Auditorium-Booking-System",
        publicRepo: true,
        techStack: ["Python", "HTML", "JavaScript", "CSS", "SQL", "Flask"],
        sizing: 'big',
        positioning: 'half-split-vertical',
        color: 'color-set-2'
    }
];
