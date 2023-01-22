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
VALUES ("Elliot", "Smith", 1,1),
       ("Amira", "Afzal", 2,NULL),
       ("Christoper", "Lee", 2,NULL),
       ("Tracy", "Carr", 2,NULL),
       ("Verónica", "Rodriguez", 3,5),
       ("Igor", "Ivanov", 4,NULL),
       ("Shella", "Robinson", 4,NULL),
       ("Kyle", "Newton", 4,NULL),
       ("Earl", "Davis", 5,9), 
       ("Emily", "Barrett", 6,NULL),
       ("Karen", "Bennett", 6,NULL), 
       ("Jaeeica", "Brady", 6,NULL), 
       ("Katie", "Bryant", 7,13), 
       ("Tonya", "George", 8,NULL), 
       ("Juan", "Harris", 8,NULL),
       ("Laura", "Williams", 8,NULL), 
       ("Charles", "Wells", 9,17),      
       ("Michelle", "Garner", 10,NULL),
       ("Richard", "Schmidt", 10,NULL),
       ("Brian", "Colon", 10,NULL);

