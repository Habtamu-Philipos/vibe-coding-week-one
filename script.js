// Course data
let courses = [
    {
        id: 1,
        title: 'Introduction to HTML',
        description: 'Learn the basics of HTML for web development.',
        lessons: ['What is HTML?', 'HTML Elements', 'HTML Attributes', 'HTML Forms'],
        completed: false
    },
    {
        id: 2,
        title: 'CSS Fundamentals',
        description: 'Style your web pages with CSS.',
        lessons: ['CSS Syntax', 'Selectors', 'Box Model', 'Flexbox and Grid'],
        completed: false
    },
    {
        id: 3,
        title: 'JavaScript Basics',
        description: 'Add interactivity with JavaScript.',
        lessons: ['Variables and Data Types', 'Functions', 'DOM Manipulation', 'Events'],
        completed: false
    }
];

// Load from localStorage if available
const storedCourses = localStorage.getItem('courses');
if (storedCourses) {
    courses = JSON.parse(storedCourses);
}

let currentCourseId = null;
let isLoggedIn = false;

// Show login page initially
document.getElementById('login').style.display = 'block';

// Simple client-side login (username: user, password: password)
document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('login-error');
    
    if (username === 'user' && password === 'password') {
        isLoggedIn = true;
        document.getElementById('login').style.display = 'none';
        document.getElementById('home').style.display = 'block';
        renderCourseList();
        error.style.display = 'none';
    } else {
        error.style.display = 'block';
    }
});

// Logout
document.getElementById('logout-btn').addEventListener('click', () => {
    isLoggedIn = false;
    document.getElementById('home').style.display = 'none';
    document.getElementById('detail').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('login-error').style.display = 'none';
});

// Render course list
function renderCourseList() {
    if (!isLoggedIn) return;
    const list = document.getElementById('course-list');
    list.innerHTML = '';
    courses.forEach(course => {
        const item = document.createElement('li');
        item.classList.add('course-item');
        if (course.completed) {
            item.classList.add('completed');
        }
        item.textContent = course.title + (course.completed ? ' (Completed)' : '');
        item.addEventListener('click', () => showDetail(course.id));
        list.appendChild(item);
    });
}

// Show course detail
function showDetail(id) {
    if (!isLoggedIn) return;
    const course = courses.find(c => c.id === id);
    if (!course) return;

    currentCourseId = id;
    document.getElementById('home').style.display = 'none';
    document.getElementById('detail').style.display = 'block';

    document.getElementById('course-title').textContent = course.title;
    document.getElementById('course-description').textContent = course.description;
    document.getElementById('course-progress').textContent = course.completed ? 'Progress: 100% (Completed)' : 'Progress: 0% (Not Started)';

    const lessonList = document.getElementById('lesson-list');
    lessonList.innerHTML = '';
    course.lessons.forEach(lesson => {
        const item = document.createElement('li');
        item.classList.add('lesson-item');
        item.textContent = lesson;
        lessonList.appendChild(item);
    });

    const completeBtn = document.getElementById('complete-btn');
    if (course.completed) {
        completeBtn.textContent = 'Completed';
        completeBtn.classList.add('completed');
        completeBtn.disabled = true;
    } else {
        completeBtn.textContent = 'Mark as Completed';
        completeBtn.classList.remove('completed');
        completeBtn.disabled = false;
    }
}

// Mark course as completed
document.getElementById('complete-btn').addEventListener('click', () => {
    if (!isLoggedIn) return;
    const course = courses.find(c => c.id === currentCourseId);
    if (course) {
        course.completed = true;
        localStorage.setItem('courses', JSON.stringify(courses));
        showDetail(currentCourseId);
        renderCourseList();
    }
});

// Back to home
document.getElementById('back-btn').addEventListener('click', () => {
    if (!isLoggedIn) return;
    document.getElementById('detail').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    renderCourseList();
});
