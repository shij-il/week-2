# 🌗 Light / Dark Theme Toggle – DOM Manipulation

A simple **Light / Dark Theme Toggle** project built using **HTML, CSS, and JavaScript** as part of my **Weekly JavaScript Learning Workout – Day 4**.

This project focuses on **DOM manipulation, dynamic styling, and classList methods**.

---

##  Project Overview

The Light / Dark Theme Toggle allows users to switch between light and dark modes dynamically without reloading the page.

The project demonstrates how JavaScript can:
- Add and remove CSS classes
- Toggle styles dynamically
- Respond to user click events
- Maintain clean separation between logic and styling

---
## 📂 Project Structure
theme-toggle/
│
├── index.html # HTML structure
├── style.css # Styling & themes
└── script.js # DOM manipulation logic

## 🌐 What is DOM?

**DOM (Document Object Model)** represents the HTML document as a tree of objects that JavaScript can interact with.

Using the DOM, JavaScript can:
- Select elements
- Change styles dynamically
- Update content
- Handle user events

 DOM acts as a bridge between **HTML and JavaScript**.

---

##  Concepts Practiced (Day 4)

### ✔ classList Methods
```javascript
element.classList.add("dark");
element.classList.remove("dark");
element.classList.toggle("dark");

✔ CSS Selectors
css
Copy code
.dark {
  background-color: #121212;
  color: white;
}

.dark .container {
  background-color: #1e1e1e;
}
✔ Dynamic Styling
Styles change dynamically based on user interaction instead of inline styling.

✔ Event Handling
javascript
Copy code
button.addEventListener("click", () => {
  body.classList.toggle("dark");
});

Features
Light / Dark theme switching
Dynamic button text update
Smooth UI transitions
Clean DOM-based styling
Beginner-friendly structure

 Technologies Used
HTML5
CSS3
JavaScript (ES6)
DOM Manipulation

📚 Learning Outcome
Strong understanding of classList
Proper CSS & JS separation
Real-world DOM styling approach
Improved confidence in dynamic UI handling