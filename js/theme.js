// Theme Toggle Script - Dark mode by default

const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;
const THEME_KEY = 'portfolio-theme';

// Initialize theme - Always default to dark mode
function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
    setTheme(savedTheme);
}

// Set theme and update UI
function setTheme(theme) {
    if (theme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.textContent = '☀️';
    } else {
        htmlElement.removeAttribute('data-theme');
        if (themeToggle) themeToggle.textContent = '🌙';
    }
    localStorage.setItem(THEME_KEY, theme);
}

// Toggle theme
function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Add event listener to theme toggle button
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initTheme);

// Also initialize immediately in case DOM is already loaded
initTheme();
