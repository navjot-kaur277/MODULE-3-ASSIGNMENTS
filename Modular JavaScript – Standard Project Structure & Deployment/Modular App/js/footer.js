// js/footer.js

/**
 * Returns the HTML string for the footer.
 * @returns {string} The Footer HTML.
 */
const createFooter = () => {
    const currentYear = new Date().getFullYear();
    return `
        <footer>
            <p>&copy; ${currentYear} Modular App. All rights reserved.</p>
        </footer>
    `;
};

export default createFooter;