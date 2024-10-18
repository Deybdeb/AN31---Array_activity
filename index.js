//  Create the studentGrades Array
let studentGrades = [
    ["Vanessa", [85, 90, 78], "pass"],
    ["Patricia", [70, 65, 72], "pass"],
    ["Roth", [88, 92, 95], "pass"],
];

// Add Another Student's Data
studentGrades.push(["Dave", [60, 75, 68], "pass"]);

//Calculate Average Grades and Update Status

// Function to calculate the average of an array
const calculateAverage = (grades) => grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

// Iterate through each student, calculate average, and update status
studentGrades.forEach(student => {
    const [name, grades, status] = student;
    const average = calculateAverage(grades);

    console.log(`${name}'s average grade: ${average.toFixed(2)}`);

    // Update status based on average grade
    if (average < 70) {
        student[2] = "fail";
    }
});

//Use map() for Optimization (to create updatedStudentGrades array)
const updatedStudentGrades = studentGrades.map(student => {
    const [name, grades, status] = student;
    const average = calculateAverage(grades);

    // Update status based on average grade
    let newStatus = "pass";
    if (average < 70) newStatus = "fail";

    return [name, grades, newStatus];
});

console.log("Updated studentGrades:", updatedStudentGrades);

//  Calculate the Class Average
const classAverage = studentGrades.reduce((sum, student) => {
    const grades = student[1];
    const average = calculateAverage(grades);
    return sum + average;
}, 0) / studentGrades.length;

console.log(`Class average: ${classAverage.toFixed(2)}`);

// Implement Grading Scale
const gradingScale = studentGrades.map(student => {
    const [name, grades, status] = student;
    const average = calculateAverage(grades);

    // Update status based on average grade
    let newStatus = "pass";
    if (average < 70) newStatus = "fail";
    else if (average > 85) newStatus = "honor pass";

    return [name, grades, newStatus];
});

console.log("Grading scale:", gradingScale);
