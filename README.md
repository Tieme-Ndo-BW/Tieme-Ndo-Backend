# Tieme-Ndo-Backend

# Clients Table Field Names and Types

| Value | Type |
| ------| ------|
| FirstName| String |
| LastName| String |
| VillageName| String |
| LoanAmount | Integer |
| CurrentAmount | Integer |
| LoanInitiation| Date(String) |
| DueDate | Date(String) |
| BagsOfMaize | Integer(Optional) |
| Goal | Integer(Optional) |


# Endpoints

| CRUD Operation | URL | Authentication |
| -------------- | ------| ----------|
| .GET to view all clients | https://lambda-tmb.herokuapp.com/api/clients | Not REQUIRED |
| .GET to view a specific client | https://lambda-tmb.herokuapp.com/api/clients/:id | Not REQUIRED |
| .POST to create a new client | https://lambda-tmb.herokuapp.com/api/clients | REQUIRED |
| .DELETE to delete a single client | https://lambda-tmb.herokuapp.com/api/clients/:id | REQUIRED |
| .PUT to change any values of a given client | https://lambda-tmb.herokuapp.com/api/clients/:id | REQUIRED |


# Staff Member Field Names and Types

| Value | Type |
| ----- | ----- |
| Username | String |
| Password | String |
| FirstName | String |
| LastName | String |
| Birthday | Date(String) |

# Endpoints 

| CRUD Operation | URL | Authentication |
| ------------- | -------- | ---------- |
| .POST to register a new staff member | https://lambda-tmb.herokuapp.com/api/auth/register | Not REQUIRED |
| .POST to login and receive a JSON token (MUST register a staff member first!!) | https://lambda-tmb.herokuapp.com/api/auth/login | Not REQUIRED |
| .GET to view all staff members | https://lambda-tmb.herokuapp.com/api/auth/ | REQUIRED |
| .GET to view a specific staff member | https://lambda-tmb.herokuapp.com/api/auth/:id | REQUIRED |
| .DELETE to a single staff member | https://lambda-tmb.herokuapp.com/api/auth/:id | REQUIRED |
| .PUT to change any values of a given staff member | https://lambda-tmb.herokuapp.com/api/auth/:id | REQUIRED |
