const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const figlet = require("figlet");

require("dotenv").config();

console.log(figlet.textSync("EMPLOYEE TRACKER"));

const db = mysql.createConnection(
  {
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
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
        "Delete Department",
        "Delete Role",
        "Delete Employee",
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
      } else if (answer.selection === "Delete Department") {
        deleteDepartment();
      } else if (answer.selection === "Delete Role") {
        deleteRole();
      } else if (answer.selection === "Delete Employee") {
        deleteEmployee();
      } else {
        console.log("Goodbye!");
        db.end();
      }
    });
}
const viewAllEmployees = () => {
  const sql = `SELECT E.id AS id, E.first_name AS first_name, E.last_name AS last_name, 
    R.title AS role, D.name AS department, CONCAT(M.first_name, " ", M.last_name) AS manager
    FROM EMPLOYEE AS E LEFT JOIN ROLE AS R ON E.role_id = R.id
    LEFT JOIN DEPARTMENT AS D ON R.department_id = D.id
    LEFT JOIN EMPLOYEE AS M ON E.manager_id = M.id;`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("");
    console.table(result);
  });
  start();
};

const viewAllDepartments = () => {
  const sql = "SELECT * FROM department";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("");
    console.table(result);
  });
  start();
};

const viewAllRoles = () => {
  const sql = `SELECT R.id AS id, title, salary, D.name AS department
    FROM ROLE AS R LEFT JOIN DEPARTMENT AS D
    ON R.department_id = D.id;`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("");
    console.table(result);
  });
  start();
};

const addDepartment = () => {
  inquirer
    .prompt({
      name: "add_department",
      type: "input",
      message: "What is the name of the department you would like to add?",
    })
    .then((answer) => {
      const sql = `INSERT INTO department (name) VALUES (?)`;
      db.query(sql, answer.add_department, (err, res) => {
        if (err) throw err;
        console.log("Department added!");
        viewAllDepartments();
      });
      start();
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        name: "add_role",
        type: "input",
        message: "What is the name of the role you would like to add?",
      },
      {
        name: "add_salary",
        type: "input",
        message: "What is the salary of the role you would like to add?",
      },
      {
        name: "add_department_id",
        type: "input",
        message: "What is the department id of the role you would like to add?",
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
      db.query(
        sql,
        [answer.add_role, answer.add_salary, answer.add_department_id],
        (err, res) => {
          if (err) throw err;
          console.log("Role added!");
          viewAllRoles();
        }
      );
      start();
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: "add_first_name",
        type: "input",
        message:
          "What is the first name of the employee you would like to add?",
      },
      {
        name: "add_last_name",
        type: "input",
        message: "What is the last name of the employee you would like to add?",
      },
      {
        name: "add_role_id",
        type: "input",
        message: "What is the role id of the employee you would like to add?",
      },
      {
        name: "add_manager_id",
        type: "input",
        message:
          "What is the manager id of the employee you would like to add?",
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
      db.query(
        sql,
        [
          answer.add_first_name,
          answer.add_last_name,
          answer.add_role_id,
          answer.add_manager_id,
        ],
        (err, res) => {
          if (err) throw err;
          console.log("Employee added!");
          viewAllEmployees();
        }
      );
      start();
    });
};

const updateEmployeeRole = () => {
  inquirer
    .prompt([
      {
        name: "update_employee_role",
        type: "input",
        message: "What is the id of the employee you would like to update?",
      },
      {
        name: "update_role_id",
        type: "input",
        message:
          "What is the new role id of the employee you would like to update?",
      },
    ])
    .then((answer) => {
      const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
      db.query(
        sql,
        [answer.update_role_id, answer.update_employee_role],
        (err, res) => {
          if (err) throw err;
          console.log("Employee role updated!");
          viewAllEmployees();
        }
      );
      start();
    });
};

const deleteEmployee = () => {
  inquirer
    .prompt({
      name: "delete_employee",
      type: "input",
      message: "What is the id of the employee you would like to delete?",
    })
    .then((answer) => {
      const sql = `DELETE FROM employee WHERE id = ?`;
      db.query(sql, answer.delete_employee, (err, res) => {
        if (err) throw err;
        console.log("Employee deleted!");
        viewAllEmployees();
      });
      start();
    });
};

const deleteRole = () => {
  inquirer
    .prompt({
      name: "delete_role",
      type: "input",
      message: "What is the id of the role you would like to delete?",
    })
    .then((answer) => {
      const sql = `DELETE FROM role WHERE id = ?`;
      db.query(sql, answer.delete_role, (err, res) => {
        if (err) throw err;
        console.log("Role deleted!");
        viewAllRoles();
      });
      start();
    });
};

const deleteDepartment = () => {
  inquirer
    .prompt({
      name: "delete_department",
      type: "input",
      message: "What is the id of the department you would like to delete?",
    })
    .then((answer) => {
      const sql = `DELETE FROM department WHERE id = ?`;
      db.query(sql, answer.delete_department, (err, res) => {
        if (err) throw err;
        console.log("Department deleted!");
        viewAllDepartments();
      });
      start();
    });
};

start();
