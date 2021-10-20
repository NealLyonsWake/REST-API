# RESTful API

### A travel startup have tasked me with the following scope:
1. Create a backend REST API that manages their employees
2. Data should be stored to a database
3. They want the database to show all current employees, create new employees, find employees by name, and delete existing employees

### Technologies used
1. `express` used to manage routes
2. `mongoose` used to create schema and model as part of Mongodb
3. `nodemon` used to automate server restart on save
4. Postman used to test the setup route methods: `GET`, `POST`, `PATCH` and `DELETE`.

### Typical endpoint used
1. The endpoint set up for this project is: `http://localhost:3000/api/employee/`
2. Finding a single employee will require both 'firstname' and 'lastname' as a parameter in the endpoint: `http://localhost:3000/api/employee/Alan/Henning`
3. Delete is the same inputs as finding a single employee above however the `DELETE` method is used.
4. Posting a new employee will require the following schema in a raw JSON format in the body:
`
{
"firstname": "Alan",
"lastname": "Henning",
"employeeNumber": "000111",
"designation": "CEO"
}
`
5. Updating an employee is done using a similar approach to posting but the entry 'id' should be used in the endpoint parameter: `http://localhost:3000/api/employee/69484938452383se` and the same raw JSON format headings used above as the content to update.
