INSERT INTO department (name)
VALUES ("Human Resources"),
       ("Finance"),
       ("Marketing"),
       ("Support"),
       ("Development");

INSERT INTO role (title, salary, department_id)
VALUES ("Human Resources Manager", 60000, 1),
       ("Human Resources Associate", 40000, 1),
       ("Finance Manager", 120000, 2),
       ("Finance Associate", 70000, 2),
       ("Marketing Manager", 100000, 3),
       ("Marketing Associate", 60000, 3),
       ("Support Manager", 60000, 4),
       ("Support Associate", 40000, 4),
       ("Development Manager", 150000, 5),
       ("Development Associate", 500000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Elliot", "Smith", 1,NULL),
       ("Amira", "Afzal", 2,1),
       ("Christoper", "Lee", 2,1),
       ("Tracy", "Carr", 2,1),
       ("Verónica", "Rodriguez", 3,NULL),
       ("Igor", "Ivanov", 4,5),
       ("Shella", "Robinson", 4,5),
       ("Kyle", "Newton", 4,5),
       ("Earl", "Davis", 5,NULL), 
       ("Emily", "Barrett", 6,9),
       ("Karen", "Bennett", 6,9), 
       ("Jaeeica", "Brady", 6,9), 
       ("Katie", "Bryant", 7,NULL), 
       ("Tonya", "George", 8,13), 
       ("Juan", "Harris", 8,13),
       ("Laura", "Williams", 8,13), 
       ("Charles", "Wells", 9,NULL),      
       ("Michelle", "Garner", 10,17),
       ("Richard", "Schmidt", 10,17),
       ("Brian", "Colon", 10,17);

