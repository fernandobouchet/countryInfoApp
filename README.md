Country Information Application

This project consist in two small applications to provide information about countries. The project includes a Backend built with Node.js (Express) and a Frontend built with React (Next.js) using TypeScript.

## Project Overview

### Tech Stack

- **Backend**: Node.js (Express.js)
- **Frontend**: React.js (Next.js)

## Project Structure

The project is divided into two folders:

- `backend`: Contains the code for the Node.js backend server.
- `frontend`: Contains the code for the React frontend application.

Each of these applications can run in parallel and communicate on different ports.

## Getting started

>[!IMPORTANT]
You need to set up the enviroment variables as shown below:

## Configure Environment Variables:

Create a .env file in the frontend folder and define the necessary variables, such as in the backend backend folder.

### Frontend

- **API_URL**: URL for the backend API
  ```env
  API_URL="http://localhost:5000/api/v1"

### Backend

- **API_URL**: URL for the backend API
  ```env
  COUNTRIES_API_URL="https://date.nager.at/api/v3"
  POPULATION_FLAGS_API_URL="https://countriesnow.space/api/v0.1/countries"
  PORT=5000

**Clone the repository**:
   ```bash
  git clone https://github.com/fernandobouchet/countryInfoApp
cd countryInfoApp
npm install
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
The backend server should be running on PORT defined in the backend enviroment variable or 5001 by default.


---

## Backend

### Tech Stack

- **Node.js**: Express.js


### Endpoints

1. **Get Available Countries**
   - **URL**: `/api/v1/countries`
   - **Method**: `GET`
   - **Description**: Retrieves a list of available countries using the Date Nager API.
   - **Response**: 
     - **200 OK**: Returns an array of country names.
     - **Example**:
       ```json
       [
       { "countryCode": "AR",
        "name": "argentina"
       },
       { "countryCode": "UK",
        "name": "ukraine"
       },
       ]
       ```

2. **Get Country Info**
   - **URL**: `/api/v1/countries/:countryCode:countryName`
   - **Method**: `GET`
   - **Description**: Retrieves detailed information about a specific country based on the country code and name.
   - **Parameters**: 
     - `countryCode`: The code of the country to retrieve information for (e.g., `AR` for Argentina).
     - `countryName`: The name of the country to retrieve information for (e.g., `argentina` for Argentina).
   - **Response**:
     - **200 OK**: Returns an object containing:
       - **flagUrl**: A URL to the country’s flag image.
       - **countryInfo**: A list of countries that share a border with the selected country.
       - **populationData**: Historical population data.
     - **Example**:
       ```json
       {
         "countryInfo": {
          "commonName": "Argentina",
          "officialName": "Argentina Republic",
          "countryCode": "AR",
          "region": "Americas",
          "borders": ["borders"],
          },
         "flagUrl": {
          "data": "https://countriesnow.space/api/v0.1/countries/flag/images/UA.png",
       }
         "populationData": [
           {"year": 2000, "value": 48400000},
           {"year": 2010, "value": 46000000},
           {"year": 2020, "value": 41000000}
         ]
       }
       ```

## Frontend

### Tech Stack

- **React.js**
- **Next.js**
- **shadcnui**
- **next-themes**

### Features

1. **Country List Page**
   - **Route**: `/`
   - **Description**: Displays a list of countries fetched from the backend endpoint.
   - **Functionality**:
     - Each country name is clickable and navigates the user to the corresponding Country Info Page.

2. **Country Info Page**
   - **Route**: `/countries/[countryCode]`
   - **Description**: Displays detailed information about the selected country.
   - **Functionality**:
     - **Country Name**: Displayed prominently at the top.
     - **Country Flag**: Displayed alongside the country name using the URL fetched from the backend.
     - **Border Countries**:
       - Shows a list of countries that border the selected country.
       - Each border country name is clickable and navigates the user to the corresponding Country Info Page.
     - **Population Chart**: Implements a chart that shows the country’s population over time.
