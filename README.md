# wei-employee-tracker

## Description

This application is a command-line application that allows the user to interact with a MySQL database. The database contains three tables: employee, role, and department. The user is able to view, add, update, and delete the data in the database.

## Installation

Before using this application, please make sure you have these programs installed:

- Visual Studio Code
- Node.js
- MySQL database

Next, please use the following code to clone this repository and make sure the package.json file is included.

```
$ git@github.com:WeitheFang/wei-employee-tracker.git
$ cd wei-employee-tracker
```

You will also need to place a .env file in the root directory of the project, in order to connect to your MySQL database. Here's the format used by this application:

file: .env

```
DB_PASSWORD=''
```

## Usage

Once the required programs are installed, please run:

```
npm i
```

Next, please create a MySQL database on your local machine using the schema.sql file located in the /db/ directory(From the MySQL CLI, source db/schema.sql)

Then run the following code in MySQL to initiate the seeding process:

```
source db/seeds.sql
```

Finally, run the following command to start the application:

```
npm start
```

From there, simply run the application in the terminal and follow the prompts to interact with the database.

Walk through video for the application: https://drive.google.com/file/d/1EHvBro28WytOMRfCPsbCcEAOyU0ngSr1/view?usp=share_link

## Credits

N/A

## License

No license used
