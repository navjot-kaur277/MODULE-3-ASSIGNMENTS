import createNavbar from './navbar.js';
import createFooter from './footer.js';
import { checkAuth, logout } from './auth.js';

/**
 * Loads the common components (Navbar and Footer) into the document.
 */
export const loadCommonComponents = () => {
    const header = document.querySelector('header');
    const footer = document.querySelector('body > footer'); // Target the last footer

    if (header) {
        header.innerHTML = createNavbar();
    }
    if (footer) {
        footer.innerHTML = createFooter();
    }

    // Attach logout functionality if the button exists
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            logout();
            // Redirect to login page after logout
            window.location.href = 'login.html';
        });
    }
};

/**
 * Protects a route, redirecting to login if the user is not authenticated.
 * @param {string} currentPage - The name of the current page (e.g., 'todos.html').
 */
export const protectRoute = (currentPage) => {
    if (currentPage === 'todos.html' && !checkAuth()) {
        alert('You must be logged in to access the Todos page.');
        window.location.href = 'login.html';
    }
};

// Execute on script load for all pages
loadCommonComponents();