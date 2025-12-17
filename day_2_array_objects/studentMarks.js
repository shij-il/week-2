const students=[
  { name: "shijil", marks: 78 },
  { name: "navin", marks: 45 },
  { name: "adru", marks: 92 },
  { name: "hishal", marks: 60 },
  { name: "yash", marks: 35 }
];

console.log("📘 Student Marks List:");
console.log("----------------------");

students.forEach((student, index) => {
  console.log(`${index + 1}. ${student.name} - ${student.marks} marks`);
});

const passedStudents = students.filter(student => student.marks >= 50);

console.log("\n✅ Passed Students:");
passedStudents.forEach(student => {
  console.log(`${student.name} - ${student.marks}`);
});

const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
const average = totalMarks / students.length;

console.log("\n📊 Average Marks:", average.toFixed(2));