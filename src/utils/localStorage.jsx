const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1",
          "taskDescription": "Complete the financial report.",
          "taskDate": "2024-12-10",
          "taskCategory": "Finance"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 2",
          "taskDescription": "Prepare the presentation for the meeting.",
          "taskDate": "2024-12-08",
          "taskCategory": "Presentation"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Task 3",
          "taskDescription": "Fix the bug in the login system.",
          "taskDate": "2024-12-05",
          "taskCategory": "Development"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1",
          "taskDescription": "Update the user interface design.",
          "taskDate": "2024-12-12",
          "taskCategory": "Design"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 2",
          "taskDescription": "Conduct a user feedback survey.",
          "taskDate": "2024-12-07",
          "taskCategory": "Research"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Task 3",
          "taskDescription": "Create a new API endpoint.",
          "taskDate": "2024-12-03",
          "taskCategory": "Development"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1",
          "taskDescription": "Write documentation for the new feature.",
          "taskDate": "2024-12-15",
          "taskCategory": "Documentation"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 2",
          "taskDescription": "Integrate the new payment gateway.",
          "taskDate": "2024-12-10",
          "taskCategory": "Integration"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 3",
          "taskDescription": "Set up the new database.",
          "taskDate": "2024-12-01",
          "taskCategory": "Database"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1",
          "taskDescription": "Prepare the quarterly budget report.",
          "taskDate": "2024-12-13",
          "taskCategory": "Finance"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 2",
          "taskDescription": "Attend the client meeting for project updates.",
          "taskDate": "2024-12-09",
          "taskCategory": "Meeting"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 3",
          "taskDescription": "Fix the issue in the customer dashboard.",
          "taskDate": "2024-12-06",
          "taskCategory": "Support"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1",
          "taskDescription": "Create a new feature for the website.",
          "taskDate": "2024-12-11",
          "taskCategory": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Task 2",
          "taskDescription": "Update the website content.",
          "taskDate": "2024-12-05",
          "taskCategory": "Content"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 3",
          "taskDescription": "Test the new website features.",
          "taskDate": "2024-12-03",
          "taskCategory": "Testing"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 4",
          "taskDescription": "Write blog posts for the company website.",
          "taskDate": "2024-12-02",
          "taskCategory": "Content"
        }
      ]
    }
  ];
  

    const admin = [
            {
              "id": 1,
              "email": "admin@example.com",
              "password": "123"
            } 
    ];

    export const setLocalStorage = ()=>{

        localStorage.setItem('employees',JSON.stringify(employees))
        localStorage.setItem('admin',JSON.stringify(admin))
    }

    export const getLocalStorage = ()=>{

      const employees =  JSON.parse(localStorage.getItem('employees'))
      const admin =  JSON.parse(localStorage.getItem('admin'))

      console.log(employees, admin)
    
    }