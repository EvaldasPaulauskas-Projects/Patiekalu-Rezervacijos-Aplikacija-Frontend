# PatiekaluRezervacijosAplikacija - Frontend

The PatiekaluRezervacijosAplikacija Frontend is a user interface for managing food reservations. This application interacts with the backend API, allowing users to authenticate, manage food items, and handle reservations.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- Axios: A promise-based HTTP client for making API requests.
- React Router: For navigation and routing within the application.
- Tailwind CSS: A utility-first CSS framework for styling.

## Installation
1. Clone the repository: 
   ```bash
   git clone https://github.com/yourusername/PatiekaluRezervacijosAplikacija.git
   ```
2. Navigate to the project directory: 
   ```bash
   cd PatiekaluRezervacijosAplikacija
   ```
3. Install the dependencies: 
   ```bash
   npm install
   ```
4. Start the development server: 
   ```bash
   npm start
   ```
   The application will be running on http://localhost:3000.

## Features
- User Authentication: Users can register and log in to their accounts.
- Food Management: Users can add, edit, and delete food items.
- Reservation Management: Users can make and manage their food reservations.
- Admin Panel: Admins can manage users and view their profiles.

## API Endpoints

### User Endpoints
- **Login:**
  - Method: POST
  - Endpoint: /auth/login
  - Request Body: 
    ```json
    {
      "username": "user@example.com",
      "password": "yourpassword"
    }
    ```
  - Response: 
    ```json
    {
      "token": "your.jwt.token",
      "user": {
        "id": 1,
        "username": "user@example.com"
      }
    }
    ```

- **Register:**
  - Method: POST
  - Endpoint: /auth/register
  - Request Body: 
    ```json
    {
      "username": "user@example.com",
      "password": "yourpassword"
    }
    ```
  - Response: 
    ```json
    {
      "message": "User registered successfully."
    }
    ```

### Food Management Endpoints
- **Get All Foods:**
  - Method: GET
  - Endpoint: /foods
  - Response: 
    ```json
    [
      {
        "id": 1,
        "name": "Pizza",
        "description": "Delicious cheese pizza",
        "price": 8.99
      },
      {
        "id": 2,
        "name": "Burger",
        "description": "Juicy beef burger",
        "price": 5.99
      }
    ]
    ```

- **Create Food:**
  - Method: POST
  - Endpoint: /food
  - Request Body: 
    ```json
    {
      "name": "New Food Item",
      "description": "Description of the new food item",
      "price": 10.00
    }
    ```
  - Response: 
    ```json
    {
      "message": "Food item created successfully.",
      "food": {
        "id": 3,
        "name": "New Food Item",
        "description": "Description of the new food item",
        "price": 10.00
      }
    }
    ```

- **Update Food:**
  - Method: PUT
  - Endpoint: /food/{id}
  - Request Body: 
    ```json
    {
      "name": "Updated Food Item",
      "description": "Updated description",
      "price": 12.00
    }
    ```
  - Response: 
    ```json
    {
      "message": "Food item updated successfully."
    }
    ```

- **Delete Food:**
  - Method: DELETE
  - Endpoint: /food/{id}
  - Response: 
    ```json
    {
      "message": "Food item deleted successfully."
    }
    ```

### Reservation Management Endpoints
- **Reserve Food:**
  - Method: POST
  - Endpoint: /reserve
  - Request Body: 
    ```json
    {
      "foodId": 1,
      "userId": 1,
      "reservationDate": "2024-10-01T12:00:00Z"
    }
    ```
  - Response: 
    ```json
    {
      "message": "Reservation made successfully.",
      "reservation": {
        "id": 1,
        "foodId": 1,
        "userId": 1,
        "reservationDate": "2024-10-01T12:00:00Z"
      }
    }
    ```

- **Get All Reservations:**
  - Method: GET
  - Endpoint: /reserved/all
  - Response: 
    ```json
    [
      {
        "id": 1,
        "foodId": 1,
        "userId": 1,
        "reservationDate": "2024-10-01T12:00:00Z"
      }
    ]
    ```

- **Delete Reservation:**
  - Method: DELETE
  - Endpoint: /reserved/{id}
  - Response: 
    ```json
    {
      "message": "Reservation deleted successfully."
    }
    ```

## Getting Started
Ensure the backend application is running. Open your browser and go to http://localhost:3000 to access the frontend application.

## Security
This application uses JWT for user authentication, ensuring that protected routes are accessible only to authenticated users.

## License
This project is licensed under the MIT License.
