//-----------------------------INSTRUCTIONS------------------------------------------
//To install sqlite-async you just need to has a npm running with your PC, and then do those codes: npm install sqlite-async. And that will be enough, just wait for download.
//Database is a little more complicate when you're dealing with erro in your program, because it not show you exactly where the erro is and neither what it is exactly, it just give you some tips about the erro, so be extremally careful with you typing, and good luck <3.
//To open a database you will click on database.sqlite with the right button and select the option Open database, and then look at the bottom for SQLITE EXPLORER and click it, and it'll open
//----------------------------------------------------------------------------------
//----------------------------------------CODE--------------------------------------
//Calling and creating a database file and database.
const Database = require('sqlite-async')
Database.open(__dirname + '/database.sqlite').then(execute)
//Using a function to deal with db, and it's important to know that db is an object too.
//Knowing that db is an object, it has property and function as exec, where you'll do codes of db inside it.
function execute(db) {
    //Creating the tables in database
    //To create tables you need to do this CREATE TABLE IF NOT EXISTS nameOfYourTable ();.
    //To add a column you need to: nameOfColumn TYPEOFREPOST(if is an integer or something) and if you add PRIMARY KEY, it'll means that the nameOfColumn will be the key to define your table.
    //Every classes has a connection with proffy, because probably will be some proffy that has two different subjects, so we can use the same id for it and connect the table proffys with the table classes.
    //Every classes has a connection with class_schedule, because it is the time that the proffy do, and which day on week he give it.
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER, 
            time_from INTEGER,
            time_to INTEGER
        )
    `)
}
//Adding return to db, make it return it's value to the calling function.