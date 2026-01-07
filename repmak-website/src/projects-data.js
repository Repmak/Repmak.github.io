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
        year: 2026,
        data: [
            {
                title: 'WordPiece Tokenizer',
                dates: '01/2026 - Present',
                image: null,
                imageCaption: "",
                imageLeft: true,
                description: "Currently developing a Byte-Level Byte Pair Encoding tokeniser from scratch in C++. I plan to expand this project to seamlessly load and execute Hugging Face transformers directly within C++ environments.",
                githubUrl: "https://github.com/Repmak/https://github.com/Repmak/teehee-might-delete",
                pypiUrl: "",
                publicRepo: true,
                techStack: ["C++"],
                sizeClass: '',
                colorClass: 'widget-color-1'
            },
            {
                title: "Promptable Traceback",
                dates: "01/2026 - Present",
                image: null,
                imageCaption: "",
                imageLeft: true,
                description: "Developed a lightweight Python library designed to streamline AI-assisted debugging by automatically capturing tracebacks, variable states, and surrounding code context. It formats this 'state of the world' into LLM-optimised reports, featuring built-in security masking to protect sensitive data during the debugging process.",
                githubUrl: "https://github.com/Repmak/promptable-traceback",
                pypiUrl: "https://pypi.org/project/promptable-traceback/",
                publicRepo: true,
                techStack: ["Python", "GitHub Actions", "PyPI", "TOML"],
                sizeClass: 'widget-wide',
                colorClass: 'widget-color-2'
            }
        ]
    },
    {
        year: 2025,
        data: [
            {
                title: "JustInTime",
                dates: "06/2025 - 12/2025",
                image: JustInTime,
                imageCaption: "Analysing how scheduling tasks impact associated financial risks.",
                imageLeft: true,
                description: "JustInTime is an intelligent project planning tool built with TensorFlow and scikit-learn to forecast delays and risks based on historical project data. By processing inputs such as team assignments, supplier details, budgets, and target completion dates, it identifies potential bottlenecks early and provides actionable insights to optimise scheduling and keep projects on track.",
                githubUrl: "https://github.com/Repmak/JustInTime",
                pypiUrl: "",
                publicRepo: false,
                techStack: ["Python", "HTML", "JavaScript", "CSS", "PostgreSQL", "ReactJS", "Supabase", "scikit-learn", "TensorFlow", "NumPy"],
                sizeClass: 'widget-extra-wide',
                colorClass: 'widget-color-3'
            },
            {
                title: "Jolt",
                dates: "06/2025 - 06/2025",
                image: Jolt,
                imageCaption: "Generating some Indeed job insights when searching for a Sales Assistant position.",
                imageLeft: true,
                description: "A Gemini-powered Chrome extension that gives users some quick insights by matching their job preferences, availability, and experience to ideal roles.",
                githubUrl: "https://github.com/Repmak/Jolt",
                pypiUrl: "",
                publicRepo: false,
                techStack: ["HTML", "JavaScript", "CSS"],
                sizeClass: '',
                colorClass: 'widget-color-4'
            }
        ]
    },
    {
        year: 2024,
        data: [
            {
                title: "Connect 4",
                dates: "07/2024 - 08/2024",
                image: Connect4,
                imageCaption: "A quick game of Connect 4.",
                imageLeft: true,
                description: "A Connect 4 game built with Pyglet, featuring an interactive GUI and an AI opponent powered by the minimax algorithm. (This project played a key role in securing direct entry into the second year of the Computer Science program at the University of St Andrews.)",
                githubUrl: "https://github.com/Repmak/Connect-4",
                pypiUrl: "",
                publicRepo: true,
                techStack: ["Python", "pyglet"],
                sizeClass: 'widget-extra-big',
                colorClass: 'widget-color-3'
            }
        ]
    },
    {
        year: 2023,
        data: [
            {
                title: "Auditorium Booking System",
                dates: "03/2023 - 05/2023",
                image: AuditoriumBookingSystem,
                imageCaption: "Reserving 5 seats for a showing of Ratatouille.",
                imageLeft: false,
                description: "An auditorium booking system built with Flask, HTML, JavaScript, CSS, and an SQL database featuring an intuitive interface for reserving seats to movies and plays.",
                githubUrl: "https://github.com/Repmak/Auditorium-Booking-System",
                pypiUrl: "",
                publicRepo: true,
                techStack: ["Python", "HTML", "JavaScript", "CSS", "SQL", "Flask"],
                sizeClass: 'widget-extra-big',
                colorClass: 'widget-color-2'
            }
        ]
    }
];
