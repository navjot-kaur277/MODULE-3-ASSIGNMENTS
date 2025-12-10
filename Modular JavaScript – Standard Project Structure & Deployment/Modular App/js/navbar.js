// js/navbar.js

/**
 * Returns the HTML string for the navigation bar.
 * @returns {string} The Navbar HTML.
 */
const createNavbar = () => {
    // Check if a user is logged in (simplified check)
    const isLoggedIn = localStorage.getItem('currentUser') !== null;

    let links = '';
    if (isLoggedIn) {
        // Links for logged-in users
        links = `
            <a href="todos.html">Todos</a>
            <button id="logout-btn">Logout</button>
        `;
    } else {
        // Links for guests
        links = `
            <a href="index.html">Home</a>
            <a href="signup.html">Signup</a>
            <a href="login.html">Login</a>
        `;
    }

    return `
        <nav>
            <h1>My Modular App</h1>
            <div class="nav-links">
                ${links}
            </div>
        </nav>
    `;
};

export default createNavbar;