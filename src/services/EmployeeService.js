export class EmployeeService{
    static employeeList = [
        {
            "id": 1,
            "name": "Adebayo Sadiq",
            "username": "Bret",
            "email": "sadiq.biz",
            isSelected : false //this is by default and later gets changed when selected
        },
        {
            "id": 2,
            "name": "Toluope Mutiat",
            "username": "Antone",
            "email": "tolulope.tv",
            isSelected : false
        },
        {
            "id": 3,
            "name": "James Samson",
            "username": "Sam",
            "email": "jamessamson.net",
            isSelected : false
        },
        {
            "id": 4,
            "name": "Park Thomas",
            "username": "Kariane",
            "email": "Julianne.OConner@kory.org",
            isSelected : false
        },
        {
            "id": 5,
            "name": "Judas Neil",
            "username": "Kamren",
            "email": "judasneil.ca",
            isSelected : false
        },
        {
            "id": 6,
            "name": "lucio hettinger",
            "username": "luc",
            "email": "Lucio_Hettinger@annie.ca",
            isSelected : false
        },
        {
            "id": 7,
            "name": "arthur caprico",
            "username": "arth",
            "email": "arthurcaprico.ca",
            isSelected : false
        },
        {
            "id": 8,
            "name": "ryantyller",
            "username": "ryan",
            "email": "ryantyller.ca",
            isSelected : false
        }
    ];

    static getAllEmployees(){
        return this.employeeList; //this jsut returs the objects....ordinary const XXX = the data will do it too
    }
}
