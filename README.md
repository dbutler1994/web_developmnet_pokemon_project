Pokémon Trading Card Collection App
===================================

Overview
--------

This project is a **Pokémon Trading Card Collection Web App**, designed to help users **manage their card collections, track wishlists, and view detailed card data**. The app consists of two main components:

-   **API** (Backend): Built with **Node.js & Express**, handling data retrieval, user authentication, and collection management.

-   **Web App** (Frontend): Provides an interactive interface for users to browse, filter, and manage their Pokémon cards.

Tech Stack
----------

### Backend (API)

-   **Node.js** & **Express.js** (Web server & routing)

-   **MySQL** (Database for storing card details, users, and collections)

-   **bcrypt** (Password hashing for security)

-   **dotenv** (Environment variable management)

-   **Express Middleware** (Validation, authentication, session handling, and error management)

### Frontend (Web App)

-   **HTML, CSS, JavaScript** (UI & interactions)

-   **EJS (Embedded JavaScript Templates)** (For rendering dynamic views)

-   **AJAX & Axios** (For making requests to the backend)

-   **jQuery** (For handling dynamic updates and API interactions)

Features
--------

### API Features

-   **User Authentication:** Register, login, update details, and delete accounts.

-   **Session-Based Authentication:** Uses `express-session` to maintain user sessions for authentication.

-   **Card Management:** Retrieve Pokémon cards by set, collection, or filters.

-   **Wishlist & Collection Tracking:** Users can add/remove cards from wishlists and collections.

-   **Filtering & Sorting:** Search for cards by rarity, set, name, or other attributes.

-   **Pagination:** Improves performance & user experience by allowing users to browse large card collections efficiently.

-   **API Key Authentication:** Secure access to API endpoints with a secret key.

-   **Error Handling:** Custom `404` and `500` error pages enhance user experience.

-   **Frontend Uses EJS Templates:** The UI dynamically renders data using EJS.

Installation & Setup
--------------------

### Prerequisites

Ensure you have the following installed:

-   **Node.js** (v14 or later)

-   **MySQL** (Database setup required)

-   **Git** (For cloning the repository)

### Setup Steps

1.  **Clone the Repository:**

    ```
    git clone https://github.com/dbutler1994/web_development_pokemon_project.git
    cd web_development_pokemon_project
    ```

2.  **Install Dependencies:**

    ```
    cd API
    npm install

    cd ../webapp
    npm install
    ```

    This will install the following required dependencies:

    -   `express`

    -   `mysql2`

    -   `bcrypt`

    -   `dotenv`

    -   `express-session`

    -   `nodemon`

3.  **Set Up Environment Variables:**

    -   Create a `.env` file in the `API` directory and configure the following:

        ```
        PORT=4000
        API_KEY=your_secret_api_key
        API_CONTENT_TYPE=application/json
        BASE_IMAGE_URL=https://assets.tcgdex.net/en
        FILTER_PREFIX=filter_
        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=your_password
        DB_NAME=pokemon_db
        ```

4.  **Set Up the Database:**

    -   Import the provided SQL dump file to create the required tables and populate the database with initial data.

    -   Run the following command in MySQL:

        ```
        mysql -u root -p  < API/database/pokemon_db.sql
        ```

    -   Ensure that the database credentials in your `.env` file match your MySQL setup.

5.  **Start the API Server:**

    ```
    npm start
    ```

6.  **Run the Web App (Frontend):**

    -   Navigate to the `webapp` directory and start the frontend (once uploaded).

    ```
    cd ../webapp
    npm start  # or use your frontend build command
    ```

API Authentication (API Key Middleware & Headers)
-------------------------------------------------

This API is secured using an **API key**. Requests must include the `x-api-key` header with a valid key.

-   The API key is stored in **environment variables** and must match the key configured in `.env`.

-   `setCustomHeaders.js` middleware automatically adds the API key and `Content-Type` to responses.

-   If a request **lacks an API key** or provides an **invalid key**, the server responds with:

    ```
    { "message": "Unauthorized" }
    ```

### Example Usage with cURL

```
curl -H "x-api-key: your_secret_api_key" http://localhost:4000/cards
```

Future Improvements
-------------------
-   **Improve Frontend UI** with a modern framework like React.

-   **Improve project structe such as creating data models** to better align with MVC framework.

-   **Add caching for frequently used queries** to speed up access .
