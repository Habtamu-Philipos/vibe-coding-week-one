Mini E-Learning Platform Prototype
Overview
This is a simple e-learning platform prototype built with HTML, CSS, and JavaScript. It allows users to:

Log in with a username and password (client-side, for demo purposes).
View a list of at least three courses.
See course details (title, description, lessons, and progress) when a course is clicked.
Mark a course as completed, with status saved in localStorage.
Log out to return to the login page.

The design is clean and responsive, with hover effects on buttons and course items. The project is a functional prototype, not a production-ready system, as per the requirements.
Features

Login System: Simple client-side authentication (username: "user", password: "password").
Course List: Displays three courses with titles and completion status.
Course Details: Shows course title, description, lessons, and progress (0% or 100% based on completion).
Completion: Users can mark courses as completed, with status persisting via localStorage.
Navigation: Includes a "Back to Home" button to return to the course list and a "Logout" button.
Styling: Clean, simple design with hover effects (buttons: blue to darker blue, green to darker green for completed; course items: gray to darker gray, green to darker green for completed).

Files

index.html: Defines the structure with login, home, and detail pages.
styles.css: Provides styling for a responsive, clean interface with hover effects.
script.js: Handles login, course data, rendering, completion logic, and localStorage persistence.

Setup Instructions

Clone or Download:
Create a directory (e.g., elearning-prototype).
Save the three files (index.html, styles.css, script.js) in this directory.


Run the Application:
Open index.html in a modern web browser (e.g., Chrome, Firefox) by double-clicking it or using a local server.
To use a local server (recommended for proper file loading):
With Python: Run python -m http.server in the directory and access http://localhost:8000.
With VS Code: Use the Live Server extension.




Dependencies: None. The project uses vanilla HTML, CSS, and JavaScript, running entirely in the browser.

Usage

Login:
Enter username: user and password: password.
Click "Login". Incorrect credentials will show an error message.


View Courses:
After logging in, see a list of three courses (e.g., Introduction to HTML, CSS Fundamentals, JavaScript Basics).
Click a course to view its details.


Course Details:
View the course title, description, list of lessons, and progress (0% if not started, 100% if completed).
Click "Mark as Completed" to mark the course as done (button updates and disables).
Click "Back to Home" to return to the course list.


Logout:
Click the "Logout" button (top-right) to return to the login page.


Persistence:
Course completion status is saved in the browser's localStorage and persists across page reloads.



Notes

Login System: The login is a simple client-side check for demo purposes (username: "user", password: "password"). It is not secure for production use. A backend (e.g., Node.js, Firebase) could be added for real authentication.
Data Storage: Course data and completion status are stored in localStorage, sufficient for a prototype. A backend database could be integrated for scalability.
Progress: Progress is binary (0% or 100%) for simplicity. Per-lesson progress could be added by extending the JavaScript logic.
Testing: The prototype has been tested in Chrome and Firefox with no console errors. All features (login, course list, details, completion, logout) work as expected.
Limitations: This is a front-end-only prototype without server-side logic or advanced user management. It meets the project brief's focus on functionality over production-readiness.

Troubleshooting

Page not loading correctly: Ensure all three files are in the same directory and that file paths in index.html (href="styles.css", src="script.js") are correct.
Login issues: Verify the exact credentials (user/password). Case matters.
Completion not saving: Check if localStorage is enabled in your browser (usually enabled by default).
Console errors: Open the browser's developer tools (F12) to check for errors and ensure files are loaded.

Future Enhancements

Add a backend (e.g., Node.js, Express, MongoDB) for secure user authentication and data storage.
Implement per-lesson progress tracking and completion.
Add user sign-up functionality with form validation.
Enhance styling with animations or a CSS framework (e.g., Bootstrap).
Include course content (e.g., videos, quizzes) for a richer experience.

License
This project is a prototype for educational purposes and can be freely used or modified.
