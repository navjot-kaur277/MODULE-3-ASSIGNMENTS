// js/auth.js

// Key for storing all registered users
const USERS_STORAGE_KEY = 'registeredUsers';
// Key for storing the currently logged-in user
const CURRENT_USER_KEY = 'currentUser';

/**
 * Retrieves the list of all registered users from localStorage.
 * @returns {Array<Object>} The list of users.
 */
const getUsers = () => {
    const usersJson = localStorage.getItem(USERS_STORAGE_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
};

/**
 * Registers a new user and stores them in localStorage.
 * @param {string} username
 * @param {string} password
 * @returns {boolean} True if signup was successful, false if user already exists.
 */
export const signup = (username, password) => {
    const users = getUsers();
    if (users.some(user => user.username === username)) {
        console.error('Signup failed: Username already exists.');
        return false;
    }

    const newUser = { username, password };
    users.push(newUser);
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    console.log('Signup successful!');
    return true;
};

/**
 * Logs in a user.
 * @param {string} username
 * @param {string} password
 * @returns {boolean} True if login was successful, false otherwise.
 */
export const login = (username, password) => {
    const users = getUsers();
    const user = users.find(
        user => user.username === username && user.password === password
    );

    if (user) {
        // On successful login, store the current user (e.g., their username)
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ username: user.username }));
        console.log('Login successful!');
        return true;
    }

    console.error('Login failed: Invalid credentials.');
    return false;
};

/**
 * Logs out the current user.
 */
export const logout = () => {
    localStorage.removeItem(CURRENT_USER_KEY);
    console.log('Logout successful!');
};

/**
 * Checks if a user is currently logged in.
 * @returns {boolean} True if a user is logged in.
 */
export const checkAuth = () => {
    return localStorage.getItem(CURRENT_USER_KEY) !== null;
};