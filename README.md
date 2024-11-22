# Name_Reverser_API

## Overview
The **Name Reverser API** is a simple Express.js API that provides an endpoint to reverse the given name passed as a query parameter or a JSON payload. The API returns a JSON object containing the original name and its reversed version.

This project is designed to be easily extendable for future functionalities, such as handling form submissions.

---

## Features
- Accepts a name through query parameters or POST body.
- Returns a JSON response with the original and reversed name.
- Modular structure for scalability.
- Includes detailed comments explaining code functionality.

---

## API Endpoints

### 1. `GET /reverse-name`
Reverse a name passed as a query parameter.

**Request Example:**
```
GET /reverse-name?name=Alice
```
**Response Example:**
```
{
  "original": "Tunde",
  "reversed": "ednuT"
}
```

### 2. `POST /reverse-name`
Reverse a name provided in a JSON payload.

**Request Example:**
```
POST /reverse-name
Content-Type: application/json

{
  "name": "Tunde"
}
```

**Response Example:**
```
{
  "original": "Tunde",
  "reversed": "ednuT"
}
```


## Project Structure
```
Name_Reverser_API/
├── app.js                # Main server file
├── routes/
│   └── route.js          # Route definitions
├── controllers/
│   └── controller.js     # Logic for reversing names
├── .gitignore            # Specifies which files to ignore in Git
├── package-lock.json     # Dependency lock file
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation

```


## How It Works
1. **GET Endpoint:**
  - Query parameters are parsed using req.query.
  - The name parameter is reversed using JavaScript string methods.

2. **POST Endpoint:**
  - Request body is parsed using express.json() middleware.
  - The name key in the body is reversed.

3. **Future Extensions:**
  - The modular design allows easy addition of form submission handling.
  - Additional features (e.g., user authentication, database storage) can be integrated.




## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)


### Steps
1. Clone the repository:
```
git clone https://github.com/your-username/name-reverser-api.git
```

2. Navigate to the project directory:
```
cd name-reverser-api
```

3. Install dependencies:
```
npm install
```

4. Start the server:
```
npm run start
```

5. Access the API at `http://localhost:2200`.
