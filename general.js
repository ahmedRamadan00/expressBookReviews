const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

// Function to get all books
async function getAllBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        return response.data; // Array of books
    } catch (error) {
        console.error('Error fetching all books:', error.message);
        return null;
    }
}

// Function to get book by ISBN
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`${BASE_URL}/books/${isbn}`);
        return response.data; // Single book object
    } catch (error) {
        console.error(`Error fetching book with ISBN ${isbn}:`, error.message);
        return null;
    }
}

// Function to get books by author
async function getBooksByAuthor(author) {
    try {
        const encodedAuthor = encodeURIComponent(author);
        const response = await axios.get(`${BASE_URL}/author/${encodedAuthor}`);
        return response.data; // Array of books by author
    } catch (error) {
        console.error(`Error fetching books by author "${author}":`, error.message);
        return null;
    }
}

// Function to get books by title
async function getBooksByTitle(title) {
    try {
        const encodedTitle = encodeURIComponent(title);
        const response = await axios.get(`${BASE_URL}/title/${encodedTitle}`);
        return response.data; // Array of books with matching title
    } catch (error) {
        console.error(`Error fetching books with title "${title}":`, error.message);
        return null;
    }
}

// Export functions
module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};
