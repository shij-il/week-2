#  Login Form Validation – JavaScript (Day 5)

This project is part of my **Weekly JavaScript Learning Workout – Day 5**, focusing on **Forms and Client-Side Validation** using **HTML, CSS, and JavaScript**.

The goal of this task is to understand how JavaScript handles form submissions, validates user input, and displays meaningful error messages using DOM manipulation.

---

## 🚀 Project Overview

The **Login Form Validation** project checks user inputs before allowing form submission.  
It ensures that the username and password meet basic validation rules and provides real-time feedback to users.

This project simulates how real login forms work on websites.

---
## 📂 Project Structure
login-form-validation/
│
├── index.html # Form structure
├── style.css # Styling and error visuals
└── script.js # Validation logic & DOM manipulation


---

## 🧠 Concepts Covered (Day 5)

### ✅ Forms & Events
- Form submit handling
- `addEventListener("submit")`
- `event.preventDefault()`

### ✅ Input Handling
- Reading input values using `.value`
- Trimming whitespace with `.trim()`

### ✅ Validation Logic
- Empty field checks
- Minimum length validation
- Username format validation
- Password strength validation

### ✅ DOM Manipulation
- Showing and hiding error messages
- Changing input border styles dynamically
- Displaying success messages

---

## 🛡️ Validation Rules Implemented

### 🔹 Username Validation
- Cannot be empty
- Minimum **4 characters**
- Only **letters and numbers** allowed

### 🔹 Password Validation
- Cannot be empty
- Minimum **6 characters**
- Must contain **at least one number**

---

## 🧪 How Validation Works

1. User clicks the **Login** button
2. Page refresh is prevented using `preventDefault()`
3. JavaScript checks each input field
4. Errors are shown below inputs if validation fails
5. Input borders turn red for invalid fields
6. Success message appears if all checks pass

---

## 🧾 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- DOM Manipulation

##  Learning Outcomes
- Clear understanding of form handling in JavaScript
- Practical use of `preventDefault()`
- Writing clean and readable validation logic
- Using DOM to improve user experience
- Basics of regular expressions (Regex)
