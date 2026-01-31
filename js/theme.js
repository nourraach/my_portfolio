// Theme Toggle Script - Dark/Light mode with persistence

const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;
const THEME_KEY = 'portfolio-theme';

// Initialize theme from localStorage or default to light
function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
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
    const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
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
