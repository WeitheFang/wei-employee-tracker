const inquirer = require("inquirer");
const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection(
  {
    host: "localhost",
    port: 3001,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "employee_db",
  },
  console.log(`Connected to the movies_db database.`)
);

function start() {
  inquirer
    .prompt({
      name: "selection",
      type: "list",
      message: "Please select from the options below:",
      choices: [
        "View all employees",
        "View all departments",
        "View all roles",
        "Add employee",
        "Add department",
        "Add role",
        "Update employee role",
        "Exit",
      ],
    })
    .then((answer) => {
      if (answer.selection === "View all employees") {
        console.log("Viewing all employees!");
        viewAllEmployees();
      } else if (answer.selection === "View all departments") {
        console.log("Viewing all departments!");
        viewAllDepartments();
      } else if (answer.selection === "View all roles") {
        console.log("Viewing all roles!");
        viewAllRoles();
      } else if (answer.selection === "Add employee") {
        addEmployee();
      } else if (answer.selection === "Add department") {
        addDepartment();
      } else if (answer.selection === "Add role") {
        addRole();
      } else if (answer.selection === "Update employee role") {
        updateEmployeeRole();
      } else {
        console.log("Goodbye!");
        db.end();
      }
    });
}
function viewAllEmployees() {
  const sql = "SELECT * FROM employees";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.table(result);
  });
  start();
}
function viewAllDepartments() {
  const sql = "SELECT * FROM department";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.table(result);
  });
  start();
}
function viewAllRoles() {
  const sql = "SELECT * FROM role";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.table(result);
  });
  start();
}
function addEmployee() {}
function addDepartment() {}
function addRole() {}
function updateEmployeeRole(role) {}

start();
