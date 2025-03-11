// Write your solution in this file!

// Initialize an example employee object
let employee = {
    name: "John Doe",
    title: "Software Engineer",
    department: "Engineering"
};

// Function to update an employee's key with a new value and return a new object (non-destructive)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value }; // Use spread operator to create a copy with the new key-value
}

// Function to destructively update an employee's key with a new value
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Update the original employee object
    return employee; // Return the updated employee
}

// Function to delete a key from an employee object and return a new object (non-destructive)
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // Create a shallow copy of the employee
    delete newEmployee[key]; // Delete the specified key from the copy
    return newEmployee; // Return the new employee object
}

// Function to destructively delete a key from the employee object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Delete the key directly from the original employee
    return employee; // Return the updated employee
}
