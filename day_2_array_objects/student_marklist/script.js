const students = [
  { name: "Akhil", marks: 78 },
  { name: "Rahul", marks: 45 },
  { name: "Neha", marks: 92 },
  { name: "Sneha", marks: 60 },
  { name: "Arjun", marks: 35 }
];

const tableBody = document.getElementById("tableBody");

students.forEach(student => {
    const row = document.createElement("tr");

    const status = student.marks >= 50 ? "Pass" : "Fail";
    const statusClass = student.marks >= 50 ? "pass" : "fail";

    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.marks}</td>
        <td class="${statusClass}">${status}</td>
    `;

    tableBody.appendChild(row);
});
