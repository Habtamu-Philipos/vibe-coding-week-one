Mini E-Learning Platform Prototype
Overview
A simple e-learning platform built with HTML, CSS, and JavaScript. Users can:

Log in (username: "user", password: "password").
View a list of three courses.
See course details (title, description, lessons, progress).
Mark courses as completed (saved in localStorage).
Log out.

Features a clean, responsive design with hover effects on buttons and course items.
Files

index.html: Page structure (login, home, detail pages).
styles.css: Styling with hover effects and responsive layout.
script.js: Handles login, course rendering, completion, and localStorage.

Setup

Save index.html, styles.css, and script.js in one directory.
Open index.html in a browser (Chrome/Firefox) or use a local server:
Python: python -m http.server (access http://localhost:8000).
VS Code: Use Live Server extension.


No dependencies; runs in the browser.

Usage

Login: Enter user/password. Incorrect credentials show an error.
Courses: View three courses; click to see details.
Details: See title, description, lessons, progress (0% or 100%). Click "Mark as Completed" to update status.
Navigation: Use "Back to Home" to return to the course list or "Logout" to exit.
Persistence: Completion status saves in localStorage.

Notes

Login: Client-side (not secure for production). Use a backend for real authentication.
Data: Stored in localStorage. Add a database for scalability.
Tested: Works in Chrome/Firefox with no errors.
Limitations: Front-end only, basic progress tracking (0% or 100%).

Troubleshooting

Not loading: Ensure files are in the same directory; check paths in index.html.
Login fails: Use exact credentials (user/password).
Status not saving: Verify localStorage is enabled.
Errors: Check browser console (F12).

Enhancements

Add backend for secure login and data storage.
Track per-lesson progress.
Include sign-up or richer content (e.g., quizzes).

License
Free to use or modify for educational purposes.
