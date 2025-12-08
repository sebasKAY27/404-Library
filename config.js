// ========== CONFIGURACIÓN DE LA BIBLIOTECA ==========
// Edita estos valores para personalizar tu biblioteca

const CONFIG = {
    // Información del sitio
    siteName: "404 Retro Library",
    siteUrl: "http://www.404-retro-library.com",
    
    // Características
    features: {
        enableSounds: true,          // Activar/desactivar sonidos
        enableLoadingScreen: true,   // Mostrar pantalla de carga
        enableNotifications: true,   // Mostrar notificaciones
        enableSearch: true,          // Activar búsqueda
        enableFavorites: true,       // Sistema de favoritos
        enableClock: true            // Reloj en tiempo real
    },
    
    // Sonidos (URLs personalizables)
    sounds: {
        click: "https://www.soundjay.com/buttons/sounds/button-16.mp3",
        popup: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
    },
    
    // Categorías disponibles
    categories: [
        { name: "Courses", icon: "help_book_cool-0.png" },
        { name: "Guides", icon: "help_book_big-0.png" },
        { name: "Systems", icon: "computer_explorer-0.png" },
        { name: "Terminals", icon: "console_prompt-0.png" },
        { name: "Repositories", icon: "directory_open_file_mydocs-0.png" },
        { name: "Components", icon: "chm-0.png" },
        { name: "Customization", icon: "desk_properties-0.png" },
        { name: "User Uploads", icon: "directory_open_file_mydocs-0.png" }
    ],
    
    // Tipos de recursos
    resourceTypes: {
        pdf: {
            label: "PDF",
            color: "#D32F2F",
            action: "open" // open, download
        },
        link: {
            label: "LINK",
            color: "#1976D2",
            action: "open"
        },
        download: {
            label: "DOWNLOAD",
            color: "#388E3C",
            action: "download"
        },
        video: {
            label: "VIDEO",
            color: "#7B1FA2",
            action: "open"
        }
    },
    
    // Mensajes personalizables
    messages: {
        noResults: "⚠️ No resources found. Try a different search term!",
        savedToFavorites: "Added to favorites!",
        removedFromFavorites: "Removed from favorites",
        openingPDF: "Opening PDF in new window...",
        openingLink: "Opening link in new window...",
        initiatingDownload: "Initiating download...",
        submitSuccess: "✓ Resource submitted successfully!",
        submitError: "⚠️ Please fill all required fields!",
        invalidURL: "⚠️ Please enter a valid URL!",
        confirmCancel: "Are you sure you want to cancel? All data will be lost.",
        confirmSubmitAnother: "Your resource has been submitted for review!\n\nWould you like to submit another resource?"
    },
    
    // Configuración de búsqueda
    search: {
        minCharacters: 1,           // Mínimo de caracteres para buscar
        searchDelay: 300,           // Delay en ms antes de buscar (debounce)
        caseSensitive: false,       // Búsqueda sensible a mayúsculas
        searchFields: ["title", "description", "category", "tags"] // Campos donde buscar
    },
    
    // Configuración de notificaciones
    notifications: {
        duration: 2000,             // Duración en ms
        position: "bottom-right"    // bottom-right, bottom-left, top-right, top-left
    },
    
    // Configuración de la pantalla de carga
    loadingScreen: {
        minDuration: 1000,          // Duración mínima en ms
        maxDuration: 3000,          // Duración máxima en ms
        message: "Loading resources... Initializing 404 System..."
    },
    
    // Configuración del reloj
    clock: {
        format: "12h",              // 12h o 24h
        showSeconds: false          // Mostrar segundos
    },
    
    // API Configuration (para backend futuro)
    api: {
        enabled: false,
        baseURL: "https://api.ejemplo.com",
        endpoints: {
            resources: "/resources",
            submit: "/submit",
            favorites: "/favorites"
        }
    },
    
    // Límites
    limits: {
        maxResourcesPerPage: 50,
        maxSearchResults: 100,
        maxTitleLength: 100,
        maxDescriptionLength: 500
    },
    
    // Colores personalizables (sobrescribe CSS)
    colors: {
        primary: "#003399",
        secondary: "#6BA8FF",
        accent: "#FFCC00",
        background: "#FFFFFF",
        text: "#000000"
    }
};

// ========== FUNCIONES DE UTILIDAD ==========

// Obtener configuración
function getConfig(path) {
    const keys = path.split('.');
    let value = CONFIG;
    for (const key of keys) {
        value = value[key];
        if (value === undefined) return null;
    }
    return value;
}

// Verificar si una característica está habilitada
function isFeatureEnabled(feature) {
    return CONFIG.features[feature] === true;
}

// Obtener mensaje personalizado
function getMessage(key) {
    return CONFIG.messages[key] || key;
}

// Aplicar colores personalizados
function applyCustomColors() {
    if (CONFIG.colors) {
        const root = document.documentElement;
        if (CONFIG.colors.primary) root.style.setProperty('--xp-blue', CONFIG.colors.primary);
        if (CONFIG.colors.secondary) root.style.setProperty('--xp-light-blue', CONFIG.colors.secondary);
        if (CONFIG.colors.accent) root.style.setProperty('--xp-yellow', CONFIG.colors.accent);
    }
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, getConfig, isFeatureEnabled, getMessage, applyCustomColors };
}

// ========== INSTRUCCIONES ==========
/*
CÓMO USAR ESTE ARCHIVO:

1. Incluye config.js ANTES de script.js en tu HTML:
   <script src="config.js"></script>
   <script src="script.js"></script>

2. Edita los valores en CONFIG según tus necesidades

3. En script.js, usa las funciones de utilidad:
   - isFeatureEnabled('enableSounds')
   - getMessage('noResults')
   - getConfig('search.minCharacters')

4. Para desactivar características, cambia true a false

5. Para cambiar colores, edita CONFIG.colors

EJEMPLOS:

// Verificar si los sonidos están habilitados
if (isFeatureEnabled('enableSounds')) {
    playSound('click');
}

// Obtener mensaje personalizado
showNotification(getMessage('savedToFavorites'));

// Obtener configuración de búsqueda
const minChars = getConfig('search.minCharacters');
*/
