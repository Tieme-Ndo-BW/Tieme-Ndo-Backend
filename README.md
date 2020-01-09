# Tieme-Ndo-Backend

# Clients Table Field Names and Types

| Value | Type |
| ------| ------|
| FirstName| String |
| LastName| String |
| VillageName| String |
| LoanAmount | Integer |
| CurrentAmount | Integer |
| LoanInitiation| Date |
| DueDate | Date |
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

