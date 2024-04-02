# echo-app
This is application is based on koa.Js and feathersjs

### Prerequisites

- Node.js (v14.x or later)
- npm (Node Package Manager)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/arya0618/echo-app.git
   cd echo-app


2. echo-app

   ```bash
   npm install
   npm run start

3. Test server health

   ```bash
   curl --location --request GET 'http://localhost:4000/echo' --header 'Content-Type: application/json' 

4. Test POSt api

   ```bash
   curl --location 'http://localhost:4000/echo' \
--header 'Content-Type: application/json' \
--data-raw '{
  "employee": {
    "name": "John Doe",
    "age": 30,
    "position": "Software Engineer",
    "department": "Engineering",
    "salary": 60000
  },
  "address": {
    "street": "123 Main Street",
    "city": "Anytown",
    "state": "Anystate",
    "zipcode": "12345"
  },
  "contacts": [
    {
      "type": "email",
      "value": "john.doe@example.com"
    },
    {
      "type": "phone",
      "value": "123-456-7890"
    }
  ]
}
' 
