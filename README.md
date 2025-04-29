# MyStore Backend

This is the backend service for the MyStore application, built using **NestJS** and **TypeORM** with a **PostgreSQL** database.

## Tech Stack

- Node.js
- NestJS
- TypeORM
- PostgreSQL

## Prerequisites

- Node.js installed (>= 16.x)
- PostgreSQL installed and running
- Database MyStore created

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vinay4194/mystore-backend.git
   cd my-store-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup Environment (Optional):**

   - Configure app.module.ts to connect to your local PostgreSQL database.
   - Example DB connection:
     ```typescript
     TypeOrmModule.forRoot({
       type: 'postgres',
       host: 'localhost',
       port: 5432,
       username: 'your_db_username',
       password: 'your_db_password',
       database: 'MyStore',
       entities: [Product, Category],
       synchronize: false, // Set true only during development
     });
     ```

4. **Run the backend server:**

   ```bash
   npm run start:dev
   ```

   The API will be available at:

   - http://localhost:3001

## API Endpoints

| Method | Route     | Description                              |
| ------ | --------- | ---------------------------------------- |
| GET    | /products | Fetch all products with category details |
