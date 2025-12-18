🔢 Counter App – DOM Manipulation in JavaScript

A simple and interactive **Counter Application** built using **HTML, CSS, and JavaScript**.  
This project is mainly created to **learn and practice DOM (Document Object Model) manipulation** and **event handling** in JavaScript.

---

## 🚀 Project Overview

The Counter App allows users to:
- ➕ Increment the counter
- ➖ Decrement the counter
- 🔄 Reset the counter

All updates happen **dynamically without page reload**, using JavaScript DOM manipulation.

This project is ideal for **beginners learning JavaScript fundamentals and DOM concepts**.

---
## 📂 Project Structure
counter_app/
│
├── index.html # HTML structure of the app
├── style.css # Styling and layout
└── script.js # JavaScript logic & DOM manipulation


---

What is DOM?

**DOM (Document Object Model)** is a programming interface that represents an HTML document as a **tree of objects**.

It allows JavaScript to:
- Access HTML elements
- Modify text and HTML content
- Change styles dynamically
- Respond to user interactions (clicks, inputs, etc.)

👉 In simple terms:  
**DOM acts as a bridge between HTML and JavaScript.**

---
##  DOM Concepts Used in This Project

### 1️⃣ Selecting Elements
Elements are selected using DOM methods so JavaScript can control them.

```javascript
document.getElementById("counter");
document.querySelector("#increment");
document.querySelector("#reset");

2️⃣ Updating Content (innerText)
The counter value is updated dynamically.
counterDisplay.innerText = count;

3️⃣ Styling Through DOM
Text color and status are updated based on the counter value.
counterDisplay.style.color = "green";

4️⃣ Event Handling (click)
User interactions are handled using event listeners.
button.addEventListener("click", () => {
  count++;
});

5️⃣ Conditional Rendering
The UI changes based on counter value (positive, negative, zero).
if (count > 0) {
  status.innerText = "Counter is Positive";
}
----
⚪Features
Increment counter
Decrement counter
Reset counter
Dynamic UI updates
Color change based on value
Status message display
Fully DOM-driven logic
-----
⚪Technologies Used
HTML5 – Structure
CSS3 – Styling & layout
JavaScript (ES6) – Logic
DOM Manipulation – Dynamic updates
------
📚 Learning Outcomes
By completing this project, you will learn:
How DOM works internally
Selecting and manipulating elements
Handling user events
Updating UI dynamically
Writing clean and structured JavaScript code