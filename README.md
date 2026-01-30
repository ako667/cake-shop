# Cake Shop Project

## Project Description

This project is a simple online cake shop with the ability to add, edit, and delete cakes. It is built using Node.js, Express, MongoDB, and Mongoose. The project includes full CRUD (Create, Read, Update, Delete) functionality for the "Cake" objects.

---

## Features Implemented

- Clean architecture with separation into **Models**, **Routes**, and **Controllers**.
- Full CRUD functionality for "Cake" objects:
  - Creating a cake with required fields: name, price, description, and image URL.
  - Viewing a list of all cakes.
  - Editing cake details.
  - Deleting cakes.
- Validation of required fields.
- Ability to add an image via URL.
- Connection to MongoDB Atlas using a secure `.env` file (no passwords hardcoded).
- Server can be started with `start` and `dev` scripts (using nodemon for development).
- Frontend built with HTML, CSS, and JavaScript to interact with the API.

---

## Project Evaluation Criteria

| Criteria             | Description                                                                                  | Weight |
|----------------------|----------------------------------------------------------------------------------------------|--------|
| Architecture & CRUD  | Code is cleanly separated into models, routes, and controllers. Full CRUD implemented.      | 25%    |
| Security & RBAC      | Use of `.env` to store sensitive data securely. (RBAC can be added later)                   | 25%    |
| Defense & Reliability| Error handling, validation, no passwords in code, proper API responses.                      | 50%    |

---

## How to Run the Project

1. Clone the repository.
2. Create a `.env` file with the following content:
```
bash
MONGO_URI=mongodb+srv://cakeuser:kuka12345@cluster0.axv1yrw.mongodb.net/cakeShop?retryWrites=true&w=majority
```
# 3. Install dependencies:
```bash
npm install
```
# Run the project in development mode:
```
bash
npm run dev
```
# Open in browser: http://localhost:3000

## Screenshot of the Site
![Cake Shop site screenshot](./Снимок%20экрана%202026-01-30%20223704.png)

## Conclusion
This project demonstrates basic skills in working with Node.js, Express, and MongoDB. I implemented full cake management functionality, added image URL support, and configured secure environment variable storage via .env to enhance security.
