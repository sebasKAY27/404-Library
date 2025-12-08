// ========== DATA STRUCTURE ==========
// This structure allows easy addition of real resources with PDFs, links, etc.
const resourcesData = [
    {
        id: 1,
        title: "WinXP CSS Kit",
        category: "Components",
        description: "Complete framework for building Windows XP interfaces.",
        icon: "https://win98icons.alexmeub.com/icons/png/chm-0.png",
        saves: 1024,
        type: "download", // download, link, pdf, video
        url: "https://github.com/khang-nd/7.css",
        downloadSize: "1.2 MB",
        tags: ["CSS", "Framework", "UI"],
        author: "PixelMaster",
        date: "2024-10-24"
    },
    {
        id: 2,
        title: "ZSH Ultimate",
        category: "Terminals",
        description: "The ultimate configuration for ZSH users. Oh-My-Zsh ready.",
        icon: "https://win98icons.alexmeub.com/icons/png/console_prompt-0.png",
        saves: 856,
        type: "link",
        url: "https://github.com/ohmyzsh/ohmyzsh",
        tags: ["Terminal", "ZSH", "Config"],
        author: "ShellMaster",
        date: "2024-09-15"
    },
    {
        id: 3,
        title: "Arch Install Guide",
        category: "Guides",
        description: "Step-by-step guide to installing Arch Linux manually.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_big-0.png",
        saves: 2301,
        type: "pdf",
        url: "#", // Replace with actual PDF URL
        tags: ["Linux", "Tutorial", "Installation"],
        author: "LinuxGuru",
        date: "2024-11-01"
    },
    {
        id: 4,
        title: "Pixel Icons Pack",
        category: "Customization",
        description: "500+ free pixel art icons for your retro projects.",
        icon: "https://win98icons.alexmeub.com/icons/png/paint_file-0.png",
        saves: 542,
        type: "download",
        url: "https://win98icons.alexmeub.com/",
        downloadSize: "5.8 MB",
        tags: ["Icons", "Graphics", "Pixel Art"],
        author: "PixelArtist",
        date: "2024-08-20"
    },
    {
        id: 5,
        title: "Clippy.js",
        category: "Repositories",
        description: "Add Clippy to any website with this simple JS library.",
        icon: "https://win98icons.alexmeub.com/icons/png/msagent-0.png",
        saves: 9999,
        type: "link",
        url: "https://www.smore.com/clippy-js",
        tags: ["JavaScript", "Library", "Fun"],
        author: "RetroDevs",
        date: "2024-07-10"
    },
    {
        id: 6,
        title: "Vaporwave Mix",
        category: "User Uploads",
        description: "2 hour mix of the best vaporwave tracks for coding.",
        icon: "https://win98icons.alexmeub.com/icons/png/media_player_stream_no-0.png",
        saves: 128,
        type: "video",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        tags: ["Music", "Vaporwave", "Playlist"],
        author: "MusicLover",
        date: "2024-12-01"
    },
    // ========== 🎓 CURSOS GRATUITOS ==========
    // Frontend
    {
        id: 7,
        title: "MDN Web Docs - HTML/CSS/JS",
        category: "Courses",
        description: "La documentación más completa y oficial para aprender HTML, CSS y JavaScript. Guías, tutoriales y referencias.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_cool-0.png",
        saves: 5420,
        type: "link",
        url: "https://developer.mozilla.org/",
        tags: ["Frontend", "HTML", "CSS", "JavaScript", "Documentación"],
        author: "Mozilla",
        date: "2024-12-07"
    },
    {
        id: 8,
        title: "Curso JavaScript Completo",
        category: "Courses",
        description: "Curso completo de JavaScript en español por freeCodeCamp. Aprende desde cero hasta nivel avanzado.",
        icon: "https://win98icons.alexmeub.com/icons/png/media_player_stream_no-0.png",
        saves: 8934,
        type: "video",
        url: "https://www.youtube.com/watch?v=jS4aFq5-91M",
        tags: ["Frontend", "JavaScript", "Curso", "Español", "Video"],
        author: "freeCodeCamp Español",
        date: "2024-12-07"
    },
    {
        id: 9,
        title: "Curso HTML/CSS desde Cero",
        category: "Courses",
        description: "Aprende HTML y CSS desde cero con este curso completo de freeCodeCamp. Ideal para principiantes.",
        icon: "https://win98icons.alexmeub.com/icons/png/media_player_stream_no-0.png",
        saves: 7621,
        type: "video",
        url: "https://www.youtube.com/watch?v=mU6anWqZJcc",
        tags: ["Frontend", "HTML", "CSS", "Curso", "Principiantes"],
        author: "freeCodeCamp Español",
        date: "2024-12-07"
    },
    // Backend
    {
        id: 10,
        title: "Curso Node.js Completo",
        category: "Courses",
        description: "Curso completo de Node.js por freeCodeCamp. Aprende backend con JavaScript.",
        icon: "https://win98icons.alexmeub.com/icons/png/media_player_stream_no-0.png",
        saves: 6543,
        type: "video",
        url: "https://www.youtube.com/watch?v=Oe421EPjeBE",
        tags: ["Backend", "Node.js", "JavaScript", "Servidor", "API"],
        author: "freeCodeCamp",
        date: "2024-12-07"
    },
    {
        id: 11,
        title: "Curso Python Completo (4 horas)",
        category: "Courses",
        description: "Aprende Python desde cero en 4 horas. Curso completo y gratuito de freeCodeCamp.",
        icon: "https://win98icons.alexmeub.com/icons/png/media_player_stream_no-0.png",
        saves: 12450,
        type: "video",
        url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
        tags: ["Backend", "Python", "Programación", "Curso", "Principiantes"],
        author: "freeCodeCamp",
        date: "2024-12-07"
    },
    // Bases de Datos
    {
        id: 12,
        title: "SQL para Principiantes",
        category: "Courses",
        description: "Aprende SQL desde cero con Khan Academy. Curso interactivo y gratuito de bases de datos.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_cool-0.png",
        saves: 4532,
        type: "link",
        url: "https://www.khanacademy.org/computing/computer-programming/sql",
        tags: ["Bases de Datos", "SQL", "Khan Academy", "Interactivo"],
        author: "Khan Academy",
        date: "2024-12-07"
    },
    {
        id: 13,
        title: "PostgreSQL Tutorial Completo",
        category: "Courses",
        description: "Tutorial completo de PostgreSQL. Aprende una de las bases de datos más populares.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_big-0.png",
        saves: 3421,
        type: "link",
        url: "https://www.postgresqltutorial.com/",
        tags: ["Bases de Datos", "PostgreSQL", "SQL", "Tutorial"],
        author: "PostgreSQL Tutorial",
        date: "2024-12-07"
    },
    // DevOps
    {
        id: 14,
        title: "Docker para Principiantes",
        category: "Courses",
        description: "Curso completo de Docker por freeCodeCamp. Aprende contenedores desde cero.",
        icon: "https://win98icons.alexmeub.com/icons/png/media_player_stream_no-0.png",
        saves: 5678,
        type: "video",
        url: "https://www.youtube.com/watch?v=fqMOX6JJhGo",
        tags: ["DevOps", "Docker", "Contenedores", "Curso"],
        author: "freeCodeCamp",
        date: "2024-12-07"
    },
    {
        id: 15,
        title: "Curso Linux Completo",
        category: "Courses",
        description: "Aprende Linux desde cero con este curso completo de freeCodeCamp. Terminal, comandos y más.",
        icon: "https://win98icons.alexmeub.com/icons/png/media_player_stream_no-0.png",
        saves: 8901,
        type: "video",
        url: "https://www.youtube.com/watch?v=wBp0Rb-ZJak",
        tags: ["DevOps", "Linux", "Terminal", "Comandos", "Sistema Operativo"],
        author: "freeCodeCamp",
        date: "2024-12-07"
    },
    // ========== 🖥️ SYSTEMS (Plataformas útiles) ==========
    {
        id: 16,
        title: "Firebase",
        category: "Systems",
        description: "Plataforma de Google para desarrollo de apps. Base de datos, autenticación, hosting y más.",
        icon: "https://win98icons.alexmeub.com/icons/png/computer_explorer-0.png",
        saves: 7845,
        type: "link",
        url: "https://firebase.google.com/",
        tags: ["Backend", "Database", "Google", "Hosting", "Auth"],
        author: "Google",
        date: "2024-12-07"
    },
    {
        id: 17,
        title: "Supabase",
        category: "Systems",
        description: "Alternativa open source a Firebase. Base de datos PostgreSQL, autenticación y APIs.",
        icon: "https://win98icons.alexmeub.com/icons/png/computer_explorer-0.png",
        saves: 6234,
        type: "link",
        url: "https://supabase.com/",
        tags: ["Backend", "Database", "PostgreSQL", "Open Source", "API"],
        author: "Supabase",
        date: "2024-12-07"
    },
    {
        id: 18,
        title: "Netlify",
        category: "Systems",
        description: "Plataforma para deploy de sitios web estáticos y aplicaciones JAMstack. CI/CD incluido.",
        icon: "https://win98icons.alexmeub.com/icons/png/computer_explorer-0.png",
        saves: 5678,
        type: "link",
        url: "https://www.netlify.com/",
        tags: ["Hosting", "Deploy", "JAMstack", "CI/CD", "Frontend"],
        author: "Netlify",
        date: "2024-12-07"
    },
    {
        id: 19,
        title: "Vercel",
        category: "Systems",
        description: "Plataforma de deploy para aplicaciones frontend. Ideal para Next.js, React y más.",
        icon: "https://win98icons.alexmeub.com/icons/png/computer_explorer-0.png",
        saves: 8901,
        type: "link",
        url: "https://vercel.com/",
        tags: ["Hosting", "Deploy", "Next.js", "React", "Frontend"],
        author: "Vercel",
        date: "2024-12-07"
    },
    {
        id: 20,
        title: "GitHub Pages",
        category: "Systems",
        description: "Hosting gratuito de GitHub para sitios web estáticos. Perfecto para portfolios y docs.",
        icon: "https://win98icons.alexmeub.com/icons/png/computer_explorer-0.png",
        saves: 12340,
        type: "link",
        url: "https://pages.github.com/",
        tags: ["Hosting", "GitHub", "Gratuito", "Estático", "Portfolio"],
        author: "GitHub",
        date: "2024-12-07"
    },
    {
        id: 21,
        title: "Docker",
        category: "Systems",
        description: "Plataforma de contenedores. Empaqueta y despliega aplicaciones en cualquier entorno.",
        icon: "https://win98icons.alexmeub.com/icons/png/computer_explorer-0.png",
        saves: 15678,
        type: "link",
        url: "https://www.docker.com/",
        tags: ["DevOps", "Contenedores", "Deploy", "Infraestructura"],
        author: "Docker",
        date: "2024-12-07"
    },
    {
        id: 22,
        title: "Postman",
        category: "Systems",
        description: "Herramienta para probar APIs. Crea, prueba y documenta tus endpoints fácilmente.",
        icon: "https://win98icons.alexmeub.com/icons/png/computer_explorer-0.png",
        saves: 9876,
        type: "link",
        url: "https://www.postman.com/",
        tags: ["API", "Testing", "Desarrollo", "Herramienta", "REST"],
        author: "Postman",
        date: "2024-12-07"
    },
    {
        id: 23,
        title: "Figma",
        category: "Systems",
        description: "Herramienta de diseño colaborativo. Crea interfaces, prototipos y sistemas de diseño.",
        icon: "https://win98icons.alexmeub.com/icons/png/paint_brush-0.png",
        saves: 18765,
        type: "link",
        url: "https://figma.com/",
        tags: ["Diseño", "UI/UX", "Prototipo", "Colaborativo", "Herramienta"],
        author: "Figma",
        date: "2024-12-07"
    },
    // ========== 🧾 TERMINALS (Comandos y herramientas CLI) ==========
    // Listas y guías
    {
        id: 24,
        title: "Comandos Linux Esenciales (PDF)",
        category: "Terminals",
        description: "Libro completo de Linux con todos los comandos esenciales. PDF gratuito y descargable.",
        icon: "https://win98icons.alexmeub.com/icons/png/console_prompt-0.png",
        saves: 8765,
        type: "pdf",
        url: "https://linux-training.be/files/books/LinuxFun.pdf",
        tags: ["Linux", "Comandos", "PDF", "Terminal", "Guía"],
        author: "Linux Training",
        date: "2024-12-07"
    },
    {
        id: 25,
        title: "Bash Cheat Sheet",
        category: "Terminals",
        description: "Hoja de referencia rápida de Bash. Todos los comandos y atajos que necesitas.",
        icon: "https://win98icons.alexmeub.com/icons/png/console_prompt-0.png",
        saves: 6543,
        type: "link",
        url: "https://devhints.io/bash",
        tags: ["Bash", "CheatSheet", "Terminal", "Comandos", "Referencia"],
        author: "Devhints",
        date: "2024-12-07"
    },
    // Herramientas CLI
    {
        id: 26,
        title: "Git CLI",
        category: "Terminals",
        description: "Documentación oficial de Git. Control de versiones desde la línea de comandos.",
        icon: "https://win98icons.alexmeub.com/icons/png/console_prompt-0.png",
        saves: 12340,
        type: "link",
        url: "https://git-scm.com/",
        tags: ["Git", "CLI", "Version Control", "Terminal", "Desarrollo"],
        author: "Git",
        date: "2024-12-07"
    },
    {
        id: 27,
        title: "GitHub CLI",
        category: "Terminals",
        description: "CLI oficial de GitHub. Gestiona repos, PRs e issues desde la terminal.",
        icon: "https://win98icons.alexmeub.com/icons/png/console_prompt-0.png",
        saves: 7890,
        type: "link",
        url: "https://cli.github.com/",
        tags: ["GitHub", "CLI", "Terminal", "Git", "Desarrollo"],
        author: "GitHub",
        date: "2024-12-07"
    },
    {
        id: 28,
        title: "Firebase CLI",
        category: "Terminals",
        description: "CLI de Firebase para deploy, hosting y gestión de proyectos desde terminal.",
        icon: "https://win98icons.alexmeub.com/icons/png/console_prompt-0.png",
        saves: 5432,
        type: "link",
        url: "https://firebase.google.com/docs/cli",
        tags: ["Firebase", "CLI", "Deploy", "Google", "Terminal"],
        author: "Google",
        date: "2024-12-07"
    },
    {
        id: 29,
        title: "Supabase CLI",
        category: "Terminals",
        description: "CLI de Supabase para gestionar proyectos, migraciones y desarrollo local.",
        icon: "https://win98icons.alexmeub.com/icons/png/console_prompt-0.png",
        saves: 4321,
        type: "link",
        url: "https://supabase.com/docs/reference/cli",
        tags: ["Supabase", "CLI", "Database", "Terminal", "Backend"],
        author: "Supabase",
        date: "2024-12-07"
    },
    {
        id: 30,
        title: "Docker CLI Reference",
        category: "Terminals",
        description: "Referencia completa de comandos Docker. Gestiona contenedores desde la terminal.",
        icon: "https://win98icons.alexmeub.com/icons/png/console_prompt-0.png",
        saves: 9876,
        type: "link",
        url: "https://docs.docker.com/engine/reference/commandline/docker/",
        tags: ["Docker", "CLI", "Contenedores", "DevOps", "Terminal"],
        author: "Docker",
        date: "2024-12-07"
    },
    // ========== 📂 REPOSITORIES (GitHub Repos útiles) ==========
    // Aprendizaje
    {
        id: 31,
        title: "freeCodeCamp",
        category: "Repositories",
        description: "El repositorio de código abierto más grande del mundo para aprender a programar gratis.",
        icon: "https://win98icons.alexmeub.com/icons/png/briefcase-0.png",
        saves: 45678,
        type: "link",
        url: "https://github.com/freeCodeCamp/freeCodeCamp",
        tags: ["Aprendizaje", "Open Source", "Web", "JavaScript", "Cursos"],
        author: "freeCodeCamp",
        date: "2024-12-07"
    },
    {
        id: 32,
        title: "The Odin Project",
        category: "Repositories",
        description: "Currículo completo de desarrollo web full stack. Proyectos prácticos incluidos.",
        icon: "https://win98icons.alexmeub.com/icons/png/briefcase-0.png",
        saves: 23456,
        type: "link",
        url: "https://github.com/TheOdinProject",
        tags: ["Aprendizaje", "Full Stack", "Web", "Proyectos", "Currículo"],
        author: "The Odin Project",
        date: "2024-12-07"
    },
    {
        id: 33,
        title: "JavaScript Algorithms",
        category: "Repositories",
        description: "Algoritmos y estructuras de datos en JavaScript con explicaciones detalladas.",
        icon: "https://win98icons.alexmeub.com/icons/png/briefcase-0.png",
        saves: 34567,
        type: "link",
        url: "https://github.com/trekhleb/javascript-algorithms",
        tags: ["Algoritmos", "JavaScript", "Estructuras de Datos", "Entrevistas"],
        author: "trekhleb",
        date: "2024-12-07"
    },
    {
        id: 34,
        title: "30 Days of JavaScript",
        category: "Repositories",
        description: "Reto de 30 días para dominar JavaScript. Ejercicios diarios y proyectos.",
        icon: "https://win98icons.alexmeub.com/icons/png/briefcase-0.png",
        saves: 28901,
        type: "link",
        url: "https://github.com/Asabeneh/30-Days-Of-JavaScript",
        tags: ["JavaScript", "Reto", "30 Días", "Ejercicios", "Aprendizaje"],
        author: "Asabeneh",
        date: "2024-12-07"
    },
    {
        id: 35,
        title: "100 JS Projects (App Ideas)",
        category: "Repositories",
        description: "Colección de 100+ ideas de proyectos para practicar programación.",
        icon: "https://win98icons.alexmeub.com/icons/png/briefcase-0.png",
        saves: 19876,
        type: "link",
        url: "https://github.com/FlorinPop17/app-ideas",
        tags: ["Proyectos", "Ideas", "Práctica", "JavaScript", "Portfolio"],
        author: "FlorinPop17",
        date: "2024-12-07"
    },
    // Tecnologías
    {
        id: 36,
        title: "React",
        category: "Repositories",
        description: "Biblioteca de JavaScript para construir interfaces de usuario. Por Meta.",
        icon: "https://win98icons.alexmeub.com/icons/png/briefcase-0.png",
        saves: 56789,
        type: "link",
        url: "https://github.com/facebook/react",
        tags: ["React", "JavaScript", "UI", "Frontend", "Meta"],
        author: "Facebook/Meta",
        date: "2024-12-07"
    },
    {
        id: 37,
        title: "Next.js",
        category: "Repositories",
        description: "Framework de React para producción. SSR, SSG y más. Por Vercel.",
        icon: "https://win98icons.alexmeub.com/icons/png/briefcase-0.png",
        saves: 43210,
        type: "link",
        url: "https://github.com/vercel/next.js",
        tags: ["Next.js", "React", "SSR", "Framework", "Vercel"],
        author: "Vercel",
        date: "2024-12-07"
    },
    {
        id: 38,
        title: "Tailwind CSS",
        category: "Repositories",
        description: "Framework CSS utility-first. Diseña directamente en tu HTML.",
        icon: "https://win98icons.alexmeub.com/icons/png/briefcase-0.png",
        saves: 38765,
        type: "link",
        url: "https://github.com/tailwindlabs/tailwindcss",
        tags: ["Tailwind", "CSS", "Framework", "Utility", "Diseño"],
        author: "Tailwind Labs",
        date: "2024-12-07"
    },
    {
        id: 39,
        title: "Node.js",
        category: "Repositories",
        description: "Runtime de JavaScript del lado del servidor. La base del backend moderno.",
        icon: "https://win98icons.alexmeub.com/icons/png/briefcase-0.png",
        saves: 67890,
        type: "link",
        url: "https://github.com/nodejs/node",
        tags: ["Node.js", "JavaScript", "Backend", "Runtime", "Server"],
        author: "Node.js Foundation",
        date: "2024-12-07"
    },
    {
        id: 40,
        title: "Bun",
        category: "Repositories",
        description: "Runtime de JavaScript ultrarrápido. Alternativa moderna a Node.js.",
        icon: "https://win98icons.alexmeub.com/icons/png/briefcase-0.png",
        saves: 21098,
        type: "link",
        url: "https://github.com/oven-sh/bun",
        tags: ["Bun", "JavaScript", "Runtime", "Rápido", "Moderno"],
        author: "Oven",
        date: "2024-12-07"
    },
    // ========== 🔧 COMPONENTS (CSS/JS listos para usar) ==========
    // Vanilla JS
    {
        id: 41,
        title: "Micromodal",
        category: "Components",
        description: "Modales accesibles y ligeros en JavaScript vanilla. Sin dependencias.",
        icon: "https://win98icons.alexmeub.com/icons/png/chm-0.png",
        saves: 8765,
        type: "link",
        url: "https://github.com/ghosh/Micromodal",
        tags: ["JavaScript", "Modal", "UI", "Vanilla", "Accesible"],
        author: "Ghosh",
        date: "2024-12-07"
    },
    {
        id: 42,
        title: "Swiper",
        category: "Components",
        description: "El slider/carousel más moderno para móvil y web. Touch-enabled.",
        icon: "https://win98icons.alexmeub.com/icons/png/chm-0.png",
        saves: 12340,
        type: "link",
        url: "https://github.com/nolimits4web/swiper",
        tags: ["Slider", "Carousel", "Touch", "Mobile", "UI"],
        author: "nolimits4web",
        date: "2024-12-07"
    },
    // Tailwind
    {
        id: 43,
        title: "Flowbite",
        category: "Components",
        description: "Componentes UI con Tailwind CSS. Modales, dropdowns, navbars y más.",
        icon: "https://win98icons.alexmeub.com/icons/png/chm-0.png",
        saves: 15678,
        type: "link",
        url: "https://flowbite.com/",
        tags: ["Tailwind", "Components", "UI", "CSS", "Framework"],
        author: "Flowbite",
        date: "2024-12-07"
    },
    {
        id: 44,
        title: "DaisyUI",
        category: "Components",
        description: "Plugin de componentes para Tailwind CSS. Botones, cards, modales listos.",
        icon: "https://win98icons.alexmeub.com/icons/png/chm-0.png",
        saves: 18901,
        type: "link",
        url: "https://daisyui.com/",
        tags: ["Tailwind", "Components", "Plugin", "UI", "CSS"],
        author: "DaisyUI",
        date: "2024-12-07"
    },
    {
        id: 45,
        title: "HyperUI",
        category: "Components",
        description: "Colección gratuita de componentes Tailwind CSS. Copy & paste.",
        icon: "https://win98icons.alexmeub.com/icons/png/chm-0.png",
        saves: 9876,
        type: "link",
        url: "https://www.hyperui.dev/",
        tags: ["Tailwind", "Components", "Free", "UI", "Templates"],
        author: "HyperUI",
        date: "2024-12-07"
    },
    // CSS
    {
        id: 46,
        title: "Animate.css",
        category: "Components",
        description: "Biblioteca de animaciones CSS listas para usar. Just-add-water.",
        icon: "https://win98icons.alexmeub.com/icons/png/chm-0.png",
        saves: 23456,
        type: "link",
        url: "https://animate.style/",
        tags: ["CSS", "Animaciones", "Effects", "Biblioteca", "Ready"],
        author: "Animate.css",
        date: "2024-12-07"
    },
    {
        id: 47,
        title: "CSS Loaders",
        category: "Components",
        description: "Colección de loaders/spinners en CSS puro. Sin imágenes.",
        icon: "https://win98icons.alexmeub.com/icons/png/chm-0.png",
        saves: 11234,
        type: "link",
        url: "https://projects.lukehaas.me/css-loaders/",
        tags: ["CSS", "Loaders", "Spinners", "Loading", "Pure CSS"],
        author: "Luke Haas",
        date: "2024-12-07"
    },
    // ========== 🎨 CUSTOMIZATION (Temas y estilos) ==========
    // Temas / estilos
    {
        id: 48,
        title: "Google Fonts",
        category: "Customization",
        description: "Biblioteca de fuentes gratuitas de Google. Miles de tipografías.",
        icon: "https://win98icons.alexmeub.com/icons/png/desk_properties-0.png",
        saves: 45678,
        type: "link",
        url: "https://fonts.google.com/",
        tags: ["Fonts", "Tipografía", "Google", "Gratuito", "Web"],
        author: "Google",
        date: "2024-12-07"
    },
    {
        id: 49,
        title: "Coolors",
        category: "Customization",
        description: "Generador de paletas de colores. Crea, guarda y comparte esquemas.",
        icon: "https://win98icons.alexmeub.com/icons/png/desk_properties-0.png",
        saves: 28901,
        type: "link",
        url: "https://coolors.co/",
        tags: ["Colores", "Paletas", "Generador", "Diseño", "Herramienta"],
        author: "Coolors",
        date: "2024-12-07"
    },
    {
        id: 50,
        title: "UI Gradients",
        category: "Customization",
        description: "Colección de gradientes CSS hermosos. Copy & paste el código.",
        icon: "https://win98icons.alexmeub.com/icons/png/desk_properties-0.png",
        saves: 16543,
        type: "link",
        url: "https://uigradients.com/",
        tags: ["Gradientes", "CSS", "Colores", "Diseño", "UI"],
        author: "UI Gradients",
        date: "2024-12-07"
    },
    // VSCode
    {
        id: 51,
        title: "Material Theme",
        category: "Customization",
        description: "Tema Material Design para VSCode. El más popular y descargado.",
        icon: "https://win98icons.alexmeub.com/icons/png/desk_properties-0.png",
        saves: 34567,
        type: "link",
        url: "https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme",
        tags: ["VSCode", "Tema", "Material", "Editor", "IDE"],
        author: "Equinusocio",
        date: "2024-12-07"
    },
    {
        id: 52,
        title: "One Dark Pro",
        category: "Customization",
        description: "Tema oscuro para VSCode basado en Atom. Muy popular.",
        icon: "https://win98icons.alexmeub.com/icons/png/desk_properties-0.png",
        saves: 41234,
        type: "link",
        url: "https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme",
        tags: ["VSCode", "Tema", "Dark", "Editor", "Atom"],
        author: "binaryify",
        date: "2024-12-07"
    },
    // ========== 🎨 CSS FRAMEWORKS RETRO ==========
    {
        id: 53,
        title: "96.css (Windows 95)",
        category: "Components",
        description: "Framework CSS para crear interfaces estilo Windows 95. Retro y nostálgico.",
        icon: "https://win98icons.alexmeub.com/icons/png/windows_update-0.png",
        saves: 8765,
        type: "link",
        url: "https://97c.in/96.css/",
        tags: ["CSS", "Framework", "Windows 95", "Retro", "UI"],
        author: "97c",
        date: "2024-12-07"
    },
    {
        id: 54,
        title: "XP.css",
        category: "Components",
        description: "Framework CSS para crear interfaces estilo Windows XP. Diseño clásico de XP.",
        icon: "https://win98icons.alexmeub.com/icons/png/windows_update-0.png",
        saves: 12340,
        type: "link",
        url: "https://botoxparty.github.io/XP.css/",
        tags: ["CSS", "Framework", "Windows XP", "Retro", "UI"],
        author: "botoxparty",
        date: "2024-12-07"
    },
    {
        id: 55,
        title: "Terminal CSS (Hacker Theme)",
        category: "Customization",
        description: "Tema CSS estilo terminal hacker verde. Vibes de 2004, perfecto para proyectos retro.",
        icon: "https://win98icons.alexmeub.com/icons/png/console_prompt-1.png",
        saves: 9876,
        type: "link",
        url: "https://terminalcss.xyz/",
        tags: ["CSS", "Terminal", "Hacker", "Verde", "2004", "Retro"],
        author: "Terminal CSS",
        date: "2024-12-07"
    },
    {
        id: 56,
        title: "ASCII Art Generator",
        category: "Components",
        description: "Generador de arte ASCII. Convierte texto en arte ASCII para tus proyectos retro.",
        icon: "https://win98icons.alexmeub.com/icons/png/notepad-0.png",
        saves: 6543,
        type: "link",
        url: "https://patorjk.com/software/taag/",
        tags: ["ASCII", "Generador", "Arte", "Texto", "Retro"],
        author: "patorjk",
        date: "2024-12-07"
    },
    // ========== 🎓 CURSOS EN ESPAÑOL ==========
    {
        id: 57,
        title: "Curso HTML + CSS desde Cero (ES)",
        category: "Courses",
        description: "Curso completo de HTML y CSS en español desde cero. Aprende desarrollo web frontend.",
        icon: "https://i.ytimg.com/vi/r_0JjYUe5jo/maxresdefault.jpg",
        saves: 15678,
        type: "video",
        url: "https://www.youtube.com/watch?v=r_0JjYUe5jo",
        tags: ["HTML", "CSS", "Español", "Frontend", "Curso", "Principiantes"],
        author: "YouTube",
        date: "2024-12-07"
    },
    {
        id: 58,
        title: "JavaScript desde Cero (ES)",
        category: "Courses",
        description: "Aprende JavaScript desde cero en español. Curso completo para principiantes.",
        icon: "https://i.ytimg.com/vi/RqQ1d1qEWlE/maxresdefault.jpg",
        saves: 18901,
        type: "video",
        url: "https://www.youtube.com/watch?v=RqQ1d1qEWlE",
        tags: ["JavaScript", "Español", "Curso", "Principiantes", "Frontend"],
        author: "YouTube",
        date: "2024-12-07"
    },
    {
        id: 59,
        title: "Curso Node.js Español - Píldoras",
        category: "Courses",
        description: "Curso de Node.js en español por Píldoras Informáticas. Backend con JavaScript.",
        icon: "https://i.ytimg.com/vi/C0fKi3l0eQo/maxresdefault.jpg",
        saves: 11234,
        type: "video",
        url: "https://www.youtube.com/watch?v=C0fKi3l0eQo",
        tags: ["Node.js", "Backend", "Español", "JavaScript", "Curso"],
        author: "Píldoras Informáticas",
        date: "2024-12-07"
    },
    {
        id: 60,
        title: "Curso Python Español (freeCodeCamp)",
        category: "Courses",
        description: "Curso completo de Python en español por freeCodeCamp. Desde cero hasta avanzado.",
        icon: "https://i.ytimg.com/vi/hc3Rz6o5GgU/maxresdefault.jpg",
        saves: 22345,
        type: "video",
        url: "https://www.youtube.com/watch?v=hc3Rz6o5GgU",
        tags: ["Python", "Español", "freeCodeCamp", "Curso", "Programación"],
        author: "freeCodeCamp Español",
        date: "2024-12-07"
    },
    {
        id: 61,
        title: "Curso MySQL desde Cero (ES)",
        category: "Courses",
        description: "Aprende MySQL desde cero en español. Bases de datos relacionales completas.",
        icon: "https://i.ytimg.com/vi/5OdVJbNCSso/maxresdefault.jpg",
        saves: 9876,
        type: "video",
        url: "https://www.youtube.com/watch?v=5OdVJbNCSso",
        tags: ["MySQL", "Bases de Datos", "SQL", "Español", "Curso"],
        author: "YouTube",
        date: "2024-12-07"
    },
    {
        id: 62,
        title: "PostgreSQL Español Completo",
        category: "Courses",
        description: "Curso completo de PostgreSQL en español. Base de datos avanzada.",
        icon: "https://i.ytimg.com/vi/qw--VYLpxG4/maxresdefault.jpg",
        saves: 7654,
        type: "video",
        url: "https://www.youtube.com/watch?v=qw--VYLpxG4",
        tags: ["PostgreSQL", "Bases de Datos", "SQL", "Español", "Curso"],
        author: "YouTube",
        date: "2024-12-07"
    },
    {
        id: 63,
        title: "Curso Linux desde Cero (ES)",
        category: "Courses",
        description: "Aprende Linux desde cero en español. Terminal, comandos y administración de sistemas.",
        icon: "https://i.ytimg.com/vi/wBp0Rb-ZJak/maxresdefault.jpg",
        saves: 13456,
        type: "video",
        url: "https://www.youtube.com/watch?v=wBp0Rb-ZJak",
        tags: ["Linux", "Terminal", "Español", "Curso", "Sistema Operativo"],
        author: "freeCodeCamp Español",
        date: "2024-12-07"
    },
    // ========== 📖 GUÍAS ESENCIALES EN ESPAÑOL ==========
    {
        id: 64,
        title: "Guía HTML y CSS Completa (ES)",
        category: "Guides",
        description: "Guía completa de HTML y CSS en español. Referencia detallada con ejemplos prácticos.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_big-0.png",
        saves: 14567,
        type: "link",
        url: "https://www.mclibre.org/consultar/htmlcss/",
        tags: ["HTML", "CSS", "Guía", "Español", "Referencia", "Tutorial"],
        author: "mclibre.org",
        date: "2024-12-07"
    },
    {
        id: 65,
        title: "Flexbox en Español",
        category: "Guides",
        description: "Guía completa de CSS Flexbox en español. Aprende maquetación flexible paso a paso.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_big-0.png",
        saves: 18901,
        type: "link",
        url: "https://lenguajecss.com/css/maquetacion-y-layout/flexbox/",
        tags: ["CSS", "Flexbox", "Layout", "Español", "Guía", "Maquetación"],
        author: "LenguajeCSS",
        date: "2024-12-07"
    },
    {
        id: 66,
        title: "CSS Grid en Español",
        category: "Guides",
        description: "Guía completa de CSS Grid en español. Domina el sistema de cuadrícula de CSS.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_big-0.png",
        saves: 16789,
        type: "link",
        url: "https://lenguajecss.com/css/maquetacion-y-layout/grid/",
        tags: ["CSS", "Grid", "Layout", "Español", "Guía", "Maquetación"],
        author: "LenguajeCSS",
        date: "2024-12-07"
    },
    {
        id: 67,
        title: "JavaScript Moderno (ES)",
        category: "Guides",
        description: "Tutorial completo de JavaScript moderno en español. Desde básico hasta avanzado.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_big-0.png",
        saves: 23456,
        type: "link",
        url: "https://es.javascript.info/",
        tags: ["JavaScript", "Moderno", "ES6", "Español", "Guía", "Tutorial"],
        author: "javascript.info",
        date: "2024-12-07"
    },
    {
        id: 68,
        title: "Guía Git & GitHub (ES)",
        category: "Guides",
        description: "Guía simple de Git y GitHub en español. Aprende control de versiones fácilmente.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_big-0.png",
        saves: 19876,
        type: "link",
        url: "https://rogerdudler.github.io/git-guide/index.es.html",
        tags: ["Git", "GitHub", "Control de Versiones", "Español", "Guía"],
        author: "Roger Dudler",
        date: "2024-12-07"
    },
    {
        id: 69,
        title: "Regex en Español",
        category: "Guides",
        description: "Guía de expresiones regulares (Regex) en español. Aprende patrones y validaciones.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_big-0.png",
        saves: 11234,
        type: "link",
        url: "https://www.adictosaltrabajo.com/2017/02/20/expresiones-regulares-regex/",
        tags: ["Regex", "Expresiones Regulares", "Patrones", "Español", "Guía"],
        author: "Adictos al Trabajo",
        date: "2024-12-07"
    },
    // ========== 📚 LIBROS Y PDFs EN ESPAÑOL ==========
    {
        id: 70,
        title: "Pro Git (Libro Español)",
        category: "Guides",
        description: "Libro completo de Git en español. La guía definitiva de control de versiones.",
        icon: "https://win98icons.alexmeub.com/icons/png/file_text-0.png",
        saves: 28901,
        type: "pdf",
        url: "https://git-scm.com/book/es/v2",
        tags: ["Git", "Libro", "PDF", "Español", "Control de Versiones"],
        author: "Scott Chacon",
        date: "2024-12-07"
    },
    {
        id: 71,
        title: "Guía Bash para Principiantes (ES)",
        category: "Guides",
        description: "Bash Beginner's Guide en español. Manual completo de terminal y scripting.",
        icon: "https://win98icons.alexmeub.com/icons/png/file_text-0.png",
        saves: 15678,
        type: "pdf",
        url: "https://www.linuxito.com/files/Bash-Beginners-Guide-es.pdf",
        tags: ["Bash", "Terminal", "PDF", "Español", "Linux", "Scripting"],
        author: "Linuxito",
        date: "2024-12-07"
    },
    {
        id: 72,
        title: "TCP/IP Vol.1 (PDF Español)",
        category: "Guides",
        description: "Libro clásico de redes TCP/IP en español. Fundamentos de protocolos de red.",
        icon: "https://win98icons.alexmeub.com/icons/png/file_text-0.png",
        saves: 12340,
        type: "pdf",
        url: "https://crysol.org/docs/protocolos/tcp-ip/vol1.pdf",
        tags: ["Redes", "TCP/IP", "PDF", "Español", "Protocolos"],
        author: "CrySol",
        date: "2024-12-07"
    },
    {
        id: 73,
        title: "Introducción a C (UGR)",
        category: "Guides",
        description: "Libro de programación en C de la Universidad de Granada. PDF gratuito.",
        icon: "https://win98icons.alexmeub.com/icons/png/file_text-0.png",
        saves: 9876,
        type: "pdf",
        url: "https://ccia.ugr.es/~jfv/ed1/c/ed1c.pdf",
        tags: ["C", "Programación", "PDF", "Español", "Universidad"],
        author: "Universidad de Granada",
        date: "2024-12-07"
    },
    // ========== 📖 DOCUMENTACIÓN OFICIAL EN ESPAÑOL ==========
    {
        id: 74,
        title: "MDN Web Docs (Español)",
        category: "Guides",
        description: "Documentación oficial de Mozilla en español. HTML, CSS, JavaScript y más.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_cool-0.png",
        saves: 34567,
        type: "link",
        url: "https://developer.mozilla.org/es/",
        tags: ["MDN", "Documentación", "Español", "HTML", "CSS", "JavaScript"],
        author: "Mozilla",
        date: "2024-12-07"
    },
    {
        id: 75,
        title: "MDN - Aprende Desarrollo Web (ES)",
        category: "Courses",
        description: "Rutas de aprendizaje textuales de MDN en español. HTML, CSS y JavaScript.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_cool-0.png",
        saves: 23456,
        type: "link",
        url: "https://developer.mozilla.org/es/docs/Learn",
        tags: ["MDN", "Curso", "Español", "HTML", "CSS", "JavaScript", "Tutorial"],
        author: "Mozilla",
        date: "2024-12-07"
    },
    {
        id: 76,
        title: "SQL Interactivo (Khan Academy ES)",
        category: "Courses",
        description: "Curso interactivo de SQL en español. Aprende bases de datos con ejercicios.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_cool-0.png",
        saves: 18901,
        type: "link",
        url: "https://es.khanacademy.org/computing/computer-programming/sql",
        tags: ["SQL", "Bases de Datos", "Español", "Interactivo", "Khan Academy"],
        author: "Khan Academy",
        date: "2024-12-07"
    },
    {
        id: 77,
        title: "Docker Docs (Español)",
        category: "Guides",
        description: "Documentación oficial de Docker en español. Guía de inicio y referencia.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_cool-0.png",
        saves: 16789,
        type: "link",
        url: "https://docs.docker.com/get-started/overview/",
        tags: ["Docker", "Documentación", "Español", "Contenedores", "DevOps"],
        author: "Docker",
        date: "2024-12-07"
    },
    {
        id: 78,
        title: "Supabase Docs (Español)",
        category: "Systems",
        description: "Documentación de Supabase en español. Guía de inicio y tutoriales.",
        icon: "https://win98icons.alexmeub.com/icons/png/computer_explorer-0.png",
        saves: 14567,
        type: "link",
        url: "https://supabase.com/docs/guides/getting-started?language=es",
        tags: ["Supabase", "Documentación", "Español", "Backend", "Database"],
        author: "Supabase",
        date: "2024-12-07"
    },
    {
        id: 79,
        title: "Firebase en Español (freeCodeCamp)",
        category: "Guides",
        description: "Guía completa de Firebase en español. Qué es y cómo usarlo.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_cool-0.png",
        saves: 19876,
        type: "link",
        url: "https://www.freecodecamp.org/espanol/news/que-es-firebase/",
        tags: ["Firebase", "Español", "Guía", "Backend", "Google"],
        author: "freeCodeCamp Español",
        date: "2024-12-07"
    },
    // ========== 📂 REPOSITORIOS EN ESPAÑOL ==========
    {
        id: 80,
        title: "Aprendiendo JavaScript (ES)",
        category: "Repositories",
        description: "Repositorio completo para aprender JavaScript en español. Ejercicios y proyectos.",
        icon: "https://win98icons.alexmeub.com/icons/png/briefcase-0.png",
        saves: 21098,
        type: "link",
        url: "https://github.com/UlisesGascon/learningJS",
        tags: ["JavaScript", "Español", "Aprendizaje", "GitHub", "Ejercicios"],
        author: "Ulises Gascón",
        date: "2024-12-07"
    },
    {
        id: 81,
        title: "Aprendiendo React (midudev)",
        category: "Repositories",
        description: "Curso de React en español por midudev. Proyectos prácticos incluidos.",
        icon: "https://win98icons.alexmeub.com/icons/png/briefcase-0.png",
        saves: 28901,
        type: "link",
        url: "https://github.com/midudev/aprendiendo-react",
        tags: ["React", "Español", "midudev", "Curso", "Proyectos"],
        author: "midudev",
        date: "2024-12-07"
    },
    {
        id: 82,
        title: "Curso HTML/CSS (midudev)",
        category: "Repositories",
        description: "Proyectos HTML/CSS sin frameworks por midudev. Aprende desde cero.",
        icon: "https://win98icons.alexmeub.com/icons/png/briefcase-0.png",
        saves: 23456,
        type: "link",
        url: "https://github.com/midudev/curso-html-css",
        tags: ["HTML", "CSS", "Español", "midudev", "Proyectos"],
        author: "midudev",
        date: "2024-12-07"
    },
    {
        id: 83,
        title: "Estructuras de Datos JS (bedu)",
        category: "Repositories",
        description: "Estructuras de datos en JavaScript. Material educativo en español.",
        icon: "https://win98icons.alexmeub.com/icons/png/briefcase-0.png",
        saves: 15678,
        type: "link",
        url: "https://github.com/beduExpert/ProgramacionEstructuradaJavaScript",
        tags: ["JavaScript", "Estructuras de Datos", "Español", "Educación"],
        author: "bedu",
        date: "2024-12-07"
    },
    // ========== 🕹️ RECURSOS RETRO EN ESPAÑOL ==========
    {
        id: 84,
        title: "Linux-es (Manuales Clásicos)",
        category: "Guides",
        description: "Manuales y artículos clásicos de Linux en español. Documentación histórica.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_big-1.png",
        saves: 8765,
        type: "link",
        url: "https://www.linux-es.org/docs/",
        tags: ["Linux", "Español", "Retro", "Manuales", "Clásico"],
        author: "Linux-es",
        date: "2024-12-07"
    },
    {
        id: 85,
        title: "Awesome Retrocomputing",
        category: "Repositories",
        description: "Lista curada de recursos de retrocomputación. Historia y proyectos retro.",
        icon: "https://win98icons.alexmeub.com/icons/png/briefcase-0.png",
        saves: 12340,
        type: "link",
        url: "https://github.com/balintkissdev/awesome-retrocomputing",
        tags: ["Retro", "Computación", "Historia", "GitHub", "Colección"],
        author: "balintkissdev",
        date: "2024-12-07"
    },
    {
        id: 86,
        title: "98.css (Windows 98)",
        category: "Components",
        description: "Framework CSS para crear interfaces estilo Windows 98. Estética retro auténtica.",
        icon: "https://win98icons.alexmeub.com/icons/png/windows_update-1.png",
        saves: 19876,
        type: "link",
        url: "https://jdan.github.io/98.css/",
        tags: ["CSS", "Framework", "Windows 98", "Retro", "UI"],
        author: "jdan",
        date: "2024-12-07"
    }
];

// LocalStorage for saved resources
let savedResources = JSON.parse(localStorage.getItem('savedResources')) || [];

// Loading Screen
window.addEventListener('load', () => {
    const bar = document.getElementById('loadingBar');
    const screen = document.getElementById('loadingScreen');

    // Only run if loading screen exists
    if (bar && screen) {
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    screen.style.opacity = '0';
                    screen.style.transition = 'opacity 0.5s';
                    setTimeout(() => {
                        screen.style.display = 'none';
                        playSound('popup');
                    }, 500);
                }, 500);
            } else {
                width += Math.random() * 10;
                if (width > 100) width = 100;
                bar.style.width = width + '%';
            }
        }, 200);
    }

    // Initialize clock
    updateClock();
    setInterval(updateClock, 1000);

    // Load saved resources count
    updateSaveCounts();
});

// ========== UTILITY FUNCTIONS ==========
// Update clock in footer
function updateClock() {
    const timeEl = document.querySelector('.time');
    if (timeEl) {
        const now = new Date();
        const hours = now.getHours() % 12 || 12;
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
        timeEl.textContent = `${hours}:${minutes} ${ampm}`;
    }
}

// Sound Effects
const clickSound = document.getElementById('clickSound');
const popupSound = document.getElementById('popupSound');

function playSound(type) {
    // Only play if sound elements exist
    if (type === 'click' && clickSound) {
        clickSound.currentTime = 0;
        clickSound.play().catch(e => console.log('Audio play failed', e));
    } else if (type === 'popup' && popupSound) {
        popupSound.currentTime = 0;
        popupSound.play().catch(e => console.log('Audio play failed', e));
    }
}

// Update save counts from localStorage
function updateSaveCounts() {
    document.querySelectorAll('.xp-card').forEach((card) => {
        const id = parseInt(card.dataset.id);
        if (!id) return;

        const isSaved = savedResources.includes(id);
        const saveBtn = card.querySelector('.save-btn');
        if (saveBtn) {
            saveBtn.textContent = isSaved ? 'SAVED ✓' : 'SAVE ⭐';
            saveBtn.style.background = isSaved ?
                'linear-gradient(to bottom, #FFE88C 0%, #FFCC00 100%)' :
                'linear-gradient(to bottom, #F8F8F8 0%, #ECE9D8 100%)';

            if (isSaved) saveBtn.classList.add('saved');
            else saveBtn.classList.remove('saved');
        }
    });
}

// Add click sounds to buttons and cards
document.querySelectorAll('button, .xp-card, .sidebar-link').forEach(el => {
    el.addEventListener('mousedown', () => playSound('click'));
});

// Sidebar Toggle
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.panel-toggle');

if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('collapsed');
    });
}

// Draggable Window Logic
const windowEl = document.getElementById('resourceWindow');
const headerEl = document.getElementById('windowHeader');

if (windowEl && headerEl) {
    let isDragging = false;
    let offsetX, offsetY;

    headerEl.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - windowEl.offsetLeft;
        offsetY = e.clientY - windowEl.offsetTop;
        windowEl.style.zIndex = 1001;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            windowEl.style.left = (e.clientX - offsetX) + 'px';
            windowEl.style.top = (e.clientY - offsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

function closeWindow() {
    const windowEl = document.getElementById('resourceWindow');
    if (windowEl) {
        windowEl.style.display = 'none';
    }
}

// Card Click -> Open Window (but not when clicking buttons)
document.querySelectorAll('.xp-card').forEach((card) => {
    card.addEventListener('click', (e) => {
        // Don't open window if clicking on a button
        if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
            return;
        }

        const windowEl = document.getElementById('resourceWindow');
        if (!windowEl) return;

        const id = parseInt(card.dataset.id);
        const resource = resourcesData.find(r => r.id === id);
        if (!resource) return;

        // Populate Window
        const winTitle = document.getElementById('winTitle');
        const winHeading = document.getElementById('winHeading');
        const winDesc = document.getElementById('winDesc');
        const winCategory = document.getElementById('winCategory');
        const winImage = document.getElementById('winImage');
        const winIcon = document.getElementById('winIcon');
        const winTags = document.getElementById('winTags');

        if (winTitle) winTitle.innerText = resource.title;
        if (winHeading) winHeading.innerText = resource.title;
        if (winDesc) winDesc.innerText = resource.description;
        if (winCategory) winCategory.innerText = resource.category;
        if (winImage) winImage.src = resource.icon;
        if (winIcon) winIcon.src = resource.icon;

        // Add tags
        if (winTags && resource.tags) {
            winTags.innerHTML = resource.tags.map(tag =>
                `<span style="background: #E6E6E6; padding: 3px 8px; border-radius: 3px; font-size: 10px;">${tag}</span>`
            ).join('');
        }

        // Update "Open Resource" button to navigate to detail page
        const openBtn = windowEl.querySelector('.window-body button');
        if (openBtn) {
            openBtn.onclick = () => {
                window.location.href = 'resource.html?id=' + resource.id;
            };
        }

        // Show Window
        windowEl.style.display = 'flex';
        windowEl.style.top = '50%';
        windowEl.style.left = '50%';
        windowEl.style.transform = 'translate(-50%, -50%)'; // Ensure centering works nicely

        playSound('popup');
    });
});

// ========== SAVE FUNCTIONALITY ==========
document.querySelectorAll('.xp-card .save-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();

        const card = btn.closest('.xp-card');
        const id = parseInt(card.dataset.id);
        if (!id) return;

        const resource = resourcesData.find(r => r.id === id);
        if (!resource) return;

        const isSaved = savedResources.includes(id);

        if (isSaved) {
            // Remove from saved
            savedResources = savedResources.filter(savedId => savedId !== id);
            btn.textContent = 'SAVE ⭐';
            btn.style.background = 'linear-gradient(to bottom, #F8F8F8 0%, #ECE9D8 100%)';
            btn.classList.remove('saved');
            showNotification('Removed from favorites');
        } else {
            // Add to saved
            savedResources.push(id);
            btn.textContent = 'SAVED ✓';
            btn.style.background = 'linear-gradient(to bottom, #FFE88C 0%, #FFCC00 100%)';
            btn.classList.add('saved');
            showNotification('Added to favorites!');
        }

        localStorage.setItem('savedResources', JSON.stringify(savedResources));
        playSound('click');

        // If we are currently viewing favorites, refresh the view by triggering a click on the active filter if it's favorites
        const activeLink = document.querySelector('.sidebar-link.active');
        if (activeLink && (activeLink.textContent.toLowerCase().includes('favorit') || activeLink.textContent.includes('favorit'))) {
            // Re-trigger filtering to hide removed item instantly
            activeLink.click();
        }
    });
});

// OPEN buttons - navigate to resource detail page
document.querySelectorAll('.xp-card .xp-button').forEach((btn) => {
    if (btn.textContent.trim() === 'OPEN') {
        const card = btn.closest('.xp-card');
        const id = parseInt(card.dataset.id);

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!id) {
                window.location.href = 'resource.html';
                return;
            }

            // Navigate to resource detail page
            playSound('click');
            window.location.href = 'resource.html?id=' + id;
        });
    }
});

// Category Filtering
document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const linkText = link.textContent.trim().toLowerCase();

        // Skip navigation links (Home, Submit, etc.)
        if (linkText.includes('home') || linkText.includes('submit') ||
            linkText.includes('browse') || linkText.includes('all resources')) {
            return; // Let default navigation happen
        }

        // For category links, filter cards
        e.preventDefault();

        // Remove active class from all links
        document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        link.classList.add('active');

        const cards = document.querySelectorAll('.xp-card');
        let visibleCount = 0;

        cards.forEach(card => {
            const id = parseInt(card.dataset.id);
            const resource = resourcesData.find(r => r.id === id);

            // Should be visible defaults
            let shouldShow = false;

            if (resource) {
                const category = resource.category.toLowerCase();
                const title = resource.title.toLowerCase();

                // Match categories
                if (linkText.includes('course') && category.includes('course')) shouldShow = true;
                if (linkText.includes('curso') && category.includes('course')) shouldShow = true;
                if (linkText.includes('system') && category.includes('system')) shouldShow = true;
                if (linkText.includes('terminal') && category.includes('terminal')) shouldShow = true;
                if (linkText.includes('guide') && category.includes('guide')) shouldShow = true;
                if (linkText.includes('guía') && category.includes('guide')) shouldShow = true;
                if (linkText.includes('repositor') && category.includes('repositor')) shouldShow = true;
                if (linkText.includes('component') && category.includes('component')) shouldShow = true;
                if (linkText.includes('customiz') && category.includes('customiz')) shouldShow = true;
                if (linkText.includes('personaliz') && category.includes('customiz')) shouldShow = true;
                if (linkText.includes('upload') && category.includes('user upload')) shouldShow = true;
                if (linkText.includes('subida') && category.includes('user upload')) shouldShow = true;

                // Special filters
                if (linkText.includes('favorit')) shouldShow = savedResources.includes(id);
                if (linkText.includes('trash') || linkText.includes('basura')) shouldShow = false; // Trash is empty for now
            }

            if (shouldShow) {
                card.style.display = 'flex';
                card.style.animation = 'fadeIn 0.3s ease-in-out';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Show message if no cards found
        const grid = document.querySelector('.resource-grid');
        let noResultsMsg = document.getElementById('noResultsMsg');

        if (visibleCount === 0) {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.id = 'noResultsMsg';
                noResultsMsg.style.cssText = 'grid-column: 1 / -1; text-align: center; padding: 40px; background: #FFFFE1; border: 1px solid #F2963D; border-radius: 3px; font-size: 14px; color: #003399;';
                noResultsMsg.innerHTML = '⚠️ No resources found in this category.';
                grid.appendChild(noResultsMsg);
            } else {
                noResultsMsg.innerHTML = '⚠️ No resources found in this category.';
            }
        } else {
            if (noResultsMsg) {
                noResultsMsg.remove();
            }
        }

        playSound('click');
    });
});

// ========== SEARCH FUNCTIONALITY ==========
const searchInput = document.getElementById('search');
const searchButton = document.querySelector('.search-wrapper .xp-button');

function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.xp-card');
    let visibleCount = 0;

    if (!query) {
        // Show all if empty
        cards.forEach(card => {
            card.style.display = 'flex';
            card.style.animation = 'fadeIn 0.3s ease-in-out';
        });
        removeNoResultsMessage();
        return;
    }

    cards.forEach((card, index) => {
        const resource = resourcesData[index];
        if (!resource) return;

        const searchableText = `${resource.title} ${resource.description} ${resource.category} ${resource.tags.join(' ')}`.toLowerCase();

        if (searchableText.includes(query)) {
            card.style.display = 'flex';
            card.style.animation = 'fadeIn 0.3s ease-in-out';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    if (visibleCount === 0) {
        showNoResultsMessage(`No results found for "${query}"`);
    } else {
        removeNoResultsMessage();
    }

    playSound('click');
}

if (searchButton) {
    searchButton.addEventListener('click', performSearch);
}

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

function showNoResultsMessage(message) {
    removeNoResultsMessage();
    const grid = document.querySelector('.resource-grid');
    if (!grid) return;

    const noResultsMsg = document.createElement('div');
    noResultsMsg.id = 'noResultsMsg';
    noResultsMsg.style.cssText = 'grid-column: 1 / -1; text-align: center; padding: 40px; background: #FFFFE1; border: 1px solid #F2963D; border-radius: 3px; font-size: 14px; color: #003399;';
    noResultsMsg.innerHTML = `⚠️ ${message}`;
    grid.appendChild(noResultsMsg);
}

function removeNoResultsMessage() {
    const noResultsMsg = document.getElementById('noResultsMsg');
    if (noResultsMsg) noResultsMsg.remove();
}

// ========== NOTIFICATION SYSTEM ==========
function showNotification(message) {
    // Remove existing notification
    const existing = document.getElementById('xpNotification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.id = 'xpNotification';
    notification.style.cssText = `
        position: fixed;
        bottom: 50px;
        right: 20px;
        background: linear-gradient(to bottom, #F8F8F8 0%, #ECE9D8 100%);
        border: 1px solid #003399;
        border-radius: 3px;
        padding: 10px 15px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        font-family: var(--font-main);
        font-size: 12px;
        color: #003399;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// "Show All" functionality - click on panel headers to show all
document.querySelectorAll('.panel-header').forEach(header => {
    header.addEventListener('dblclick', () => {
        const cards = document.querySelectorAll('.xp-card');
        cards.forEach(card => {
            card.style.display = 'flex';
            card.style.animation = 'fadeIn 0.3s ease-in-out';
        });

        // Remove active class from all links
        document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));

        // Clear search
        if (searchInput) searchInput.value = '';
        removeNoResultsMessage();

        playSound('popup');
    });
});


// ========== FORM SUBMISSION ==========
const submitForm = document.querySelector('form');
if (submitForm) {
    submitForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            title: submitForm.querySelector('input[type="text"]').value,
            category: submitForm.querySelector('select').value,
            description: submitForm.querySelector('textarea').value,
            url: submitForm.querySelectorAll('input[type="text"]')[1].value,
            screenshot: submitForm.querySelector('input[type="file"]').files[0]?.name || 'No file'
        };

        // Validation
        if (!formData.title || !formData.category || formData.category === 'Select a category...' || !formData.description || !formData.url) {
            showNotification('⚠️ Please fill all required fields!');
            playSound('popup');
            return;
        }

        // URL validation
        try {
            new URL(formData.url);
        } catch {
            showNotification('⚠️ Please enter a valid URL!');
            playSound('popup');
            return;
        }

        // Success
        playSound('popup');
        showNotification('✓ Resource submitted successfully!');

        // Show success dialog
        setTimeout(() => {
            if (confirm('Your resource has been submitted for review!\n\nWould you like to submit another resource?')) {
                submitForm.reset();
            } else {
                window.location.href = 'index.html';
            }
        }, 500);
    });

    // Cancel button
    const cancelBtn = submitForm.querySelector('button[type="button"]');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to cancel? All data will be lost.')) {
                window.location.href = 'index.html';
            }
        });
    }
}

// ========== RESOURCE DETAIL PAGE ==========
// Check if we're on resource.html and load data from URL params
if (window.location.pathname.includes('resource.html')) {
    window.addEventListener('load', () => {
        const urlParams = new URLSearchParams(window.location.search);
        const resourceId = parseInt(urlParams.get('id'));

        if (resourceId) {
            const resource = resourcesData.find(r => r.id === resourceId);
            if (resource) {
                loadResourceDetails(resource);
            } else {
                showResourceNotFound();
            }
        } else {
            showResourceNotFound();
        }
    });
}

function loadResourceDetails(resource) {
    // Update page title
    document.title = `404 Retro Library - ${resource.title}`;

    // Get content container
    const contentDiv = document.getElementById('resourceContent');
    if (!contentDiv) return;

    // Check if resource is saved
    const isSaved = savedResources.includes(resource.id);

    // Get type badge
    const typeBadge = getTypeBadge(resource.type);

    // Build the HTML
    contentDiv.innerHTML = `
        <div style="display: flex; gap: 20px; margin-bottom: 20px; flex-wrap: wrap;">
            <div style="min-width: 200px; height: 150px; display: flex; align-items: center; justify-content: center; border: 2px solid #003399; background: white;">
                <img src="${resource.icon}" alt="${resource.title}" style="max-width: 128px; max-height: 128px;">
            </div>
            <div style="flex: 1; min-width: 300px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                    <h1 style="margin: 0; color: #003399; font-size: 20px;">${resource.title}</h1>
                    ${typeBadge}
                </div>
                <div style="font-size: 11px; color: #666; margin-bottom: 15px;">
                    Uploaded by: <strong>${resource.author}</strong> | 
                    Date: <strong>${resource.date}</strong> | 
                    Category: <strong>${resource.category}</strong>
                </div>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <button class="xp-button save-btn" onclick="openResourceUrl('${resource.url}', '${resource.type}')" style="padding: 6px 15px; font-weight: bold;">
                        ${getActionButtonText(resource.type)}
                    </button>
                    <button class="xp-button" onclick="toggleResourceFavorite(${resource.id})" id="favBtn-${resource.id}" style="padding: 6px 15px;">
                        ${isSaved ? 'SAVED ✓' : 'Add to Favorites ⭐'}
                    </button>
                    <button class="xp-button" onclick="window.history.back()" style="padding: 6px 15px;">
                        ← Back
                    </button>
                </div>
            </div>
        </div>

        <div style="background: white; padding: 15px; border: 1px solid #D1CFC4; margin-bottom: 15px;">
            <h3 style="margin: 0 0 10px 0; color: #003399; font-size: 14px;">Description</h3>
            <p style="font-size: 12px; line-height: 1.5; margin-bottom: 15px;">
                ${resource.description}
            </p>
            ${resource.downloadSize ? `<p style="font-size: 12px;"><strong>Size:</strong> ${resource.downloadSize}</p>` : ''}
            ${resource.tags && resource.tags.length > 0 ? `
                <div style="margin-top: 15px;">
                    <strong style="font-size: 12px;">Tags:</strong>
                    <div style="display: flex; gap: 5px; flex-wrap: wrap; margin-top: 5px;">
                        ${resource.tags.map(tag => `<span style="background: #E6E6E6; padding: 3px 8px; border-radius: 3px; font-size: 11px;">${tag}</span>`).join('')}
                    </div>
                </div>
            ` : ''}
        </div>

        <div style="background: white; padding: 15px; border: 1px solid #D1CFC4; margin-bottom: 15px;">
            <h3 style="margin: 0 0 10px 0; color: #003399; font-size: 14px;">Resource Information</h3>
            <table style="width: 100%; font-size: 12px;">
                <tr>
                    <td style="padding: 5px; font-weight: bold; width: 150px;">Type:</td>
                    <td style="padding: 5px;">${resource.type.toUpperCase()}</td>
                </tr>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">Category:</td>
                    <td style="padding: 5px;">${resource.category}</td>
                </tr>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">Author:</td>
                    <td style="padding: 5px;">${resource.author}</td>
                </tr>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">Date Added:</td>
                    <td style="padding: 5px;">${resource.date}</td>
                </tr>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">Times Saved:</td>
                    <td style="padding: 5px;">${resource.saves.toLocaleString()}</td>
                </tr>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">URL:</td>
                    <td style="padding: 5px;"><a href="${resource.url}" target="_blank" style="color: #003399; word-break: break-all;">${resource.url}</a></td>
                </tr>
            </table>
        </div>

        <div style="background: white; padding: 15px; border: 1px solid #D1CFC4;">
            <h3 style="margin: 0 0 10px 0; color: #003399; font-size: 14px; border-bottom: 1px solid #eee; padding-bottom: 5px;">
                User Comments
            </h3>
            <div style="margin-bottom: 15px; border-bottom: 1px dotted #ccc; padding-bottom: 10px;">
                <div style="font-weight: bold; font-size: 11px; color: #003399;">RetroFan99 says:</div>
                <div style="font-size: 12px; margin-top: 5px;">This is exactly what I was looking for! Thanks for sharing.</div>
            </div>
            <div style="margin-bottom: 15px; border-bottom: 1px dotted #ccc; padding-bottom: 10px;">
                <div style="font-weight: bold; font-size: 11px; color: #003399;">WebDev2024 says:</div>
                <div style="font-size: 12px; margin-top: 5px;">Great resource! Works perfectly on modern browsers.</div>
            </div>
            <div style="background: #FFFFE1; padding: 10px; border: 1px solid #F2963D; border-radius: 3px; margin-top: 15px;">
                <p style="font-size: 11px; margin: 0;">💬 Comments are coming soon! Stay tuned for the next update.</p>
            </div>
        </div>
    `;

    playSound('popup');
}

function showResourceNotFound() {
    const contentDiv = document.getElementById('resourceContent');
    if (!contentDiv) return;

    contentDiv.innerHTML = `
        <div style="text-align: center; padding: 60px 20px;">
            <img src="https://win98icons.alexmeub.com/icons/png/msg_error-0.png" width="48" alt="Error">
            <h2 style="color: #D32F2F; margin: 20px 0 10px 0;">Resource Not Found</h2>
            <p style="font-size: 12px; color: #666; margin-bottom: 20px;">
                The resource you're looking for doesn't exist or has been removed.
            </p>
            <a href="index.html" class="xp-button" style="display: inline-block; padding: 6px 15px; text-decoration: none;">
                ← Back to Library
            </a>
        </div>
    `;
}

function getTypeBadge(type) {
    const badges = {
        pdf: '<span style="background: #D32F2F; color: white; padding: 3px 8px; border-radius: 3px; font-size: 10px; font-weight: bold;">PDF</span>',
        link: '<span style="background: #1976D2; color: white; padding: 3px 8px; border-radius: 3px; font-size: 10px; font-weight: bold;">LINK</span>',
        download: '<span style="background: #388E3C; color: white; padding: 3px 8px; border-radius: 3px; font-size: 10px; font-weight: bold;">DOWNLOAD</span>',
        video: '<span style="background: #7B1FA2; color: white; padding: 3px 8px; border-radius: 3px; font-size: 10px; font-weight: bold;">VIDEO</span>'
    };
    return badges[type] || '';
}

function getActionButtonText(type) {
    const texts = {
        pdf: '📄 Open PDF',
        link: '🔗 Visit Link',
        download: '💾 Download',
        video: '🎥 Watch Video'
    };
    return texts[type] || 'Open Resource';
}

function openResourceUrl(url, type) {
    playSound('popup');

    switch (type) {
        case 'pdf':
            showNotification('Opening PDF in new window...');
            break;
        case 'link':
            showNotification('Opening link in new window...');
            break;
        case 'download':
            showNotification('Initiating download...');
            break;
        case 'video':
            showNotification('Opening video...');
            break;
    }

    setTimeout(() => {
        window.open(url, '_blank');
    }, 500);
}

function toggleResourceFavorite(resourceId) {
    const isSaved = savedResources.includes(resourceId);
    const btn = document.getElementById(`favBtn-${resourceId}`);

    if (isSaved) {
        savedResources = savedResources.filter(id => id !== resourceId);
        if (btn) btn.textContent = 'Add to Favorites ⭐';
        showNotification('Removed from favorites');
    } else {
        savedResources.push(resourceId);
        if (btn) btn.textContent = 'SAVED ✓';
        showNotification('Added to favorites!');
    }

    localStorage.setItem('savedResources', JSON.stringify(savedResources));
    playSound('click');
}
