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
});

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
document.querySelectorAll('.xp-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Don't open window if clicking on a button
        if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
            return;
        }

        const windowEl = document.getElementById('resourceWindow');
        if (!windowEl) return;

        const title = card.querySelector('.card-title')?.innerText || '';
        const desc = card.querySelector('.card-desc')?.innerText || '';
        const category = card.querySelector('.card-category')?.innerText || '';
        const iconSrc = card.querySelector('.card-icon img')?.src || '';

        // Populate Window
        const winTitle = document.getElementById('winTitle');
        const winHeading = document.getElementById('winHeading');
        const winDesc = document.getElementById('winDesc');
        const winCategory = document.getElementById('winCategory');
        const winImage = document.getElementById('winImage');
        const winIcon = document.getElementById('winIcon');

        if (winTitle) winTitle.innerText = title;
        if (winHeading) winHeading.innerText = title;
        if (winDesc) winDesc.innerText = desc;
        if (winCategory) winCategory.innerText = category;
        if (winImage) winImage.src = iconSrc;
        if (winIcon) winIcon.src = iconSrc;

        // Show Window
        windowEl.style.display = 'flex';
        windowEl.style.top = '50%';
        windowEl.style.left = '50%';

        playSound('popup');
    });
});

// OPEN buttons navigate to resource page
document.querySelectorAll('.xp-card .xp-button').forEach(btn => {
    if (btn.textContent.trim() === 'OPEN') {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card click
            window.location.href = 'resource.html';
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
            const category = card.querySelector('.card-category')?.textContent.toLowerCase() || '';
            const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';

            let shouldShow = false;

            // Match categories
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
            if (linkText.includes('favorit') && title.includes('favorit')) shouldShow = true;
            if (linkText.includes('trash') && title.includes('trash')) shouldShow = true;
            if (linkText.includes('basura') && title.includes('trash')) shouldShow = true;

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
                noResultsMsg.innerHTML = '⚠️ No resources found in this category yet. Check back soon!';
                grid.appendChild(noResultsMsg);
            }
        } else {
            if (noResultsMsg) {
                noResultsMsg.remove();
            }
        }

        playSound('click');
    });
});

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

        // Remove no results message
        const noResultsMsg = document.getElementById('noResultsMsg');
        if (noResultsMsg) noResultsMsg.remove();

        playSound('popup');
    });
});
