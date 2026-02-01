// Theme Script - Force Dark Mode Only

const htmlElement = document.documentElement;

// Force dark mode permanently
function initTheme() {
    htmlElement.setAttribute('data-theme', 'dark');
    // Remove any saved theme preference
    localStorage.removeItem('portfolio-theme');
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initTheme);

// Also initialize immediately in case DOM is already loaded
initTheme();

