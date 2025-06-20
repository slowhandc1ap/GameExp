# Player EXP System API

A robust API for managing player experience points (EXP) and leveling systems, designed for games such as RPGs, Idle Games, or Farming Games. This project provides a scalable backend solution with a modular architecture.

## Features

- **Player Creation**: Register new players with unique usernames.
- **EXP and Leveling**: Add EXP to players, with automatic level-ups based on thresholds.
- **Player Information**: Retrieve detailed player data by ID.
- **Leaderboard**: Display the top 10 players by level.
- **Database Management**: Utilize Prisma ORM with MariaDB for efficient data handling.
- **Modular Architecture**: Structured with MVC pattern and Service Layer for maintainability.

## Tech Stack

- **Backend**: Node.js, Express, TypeScript
- **Database**: MariaDB (compatible with MySQL)
- **ORM**: Prisma
- **Testing**: Postman
- **Containerization**: Docker
- **Optional UI**: phpMyAdmin for database visualization

## Requirements

- Node.js (LTS version recommended, e.g., v20.x)
- Docker and Docker Compose
- npm (Node Package Manager)

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd GameExp
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Database with Docker**
   ```bash
   docker-compose up -d
   ```
   This starts MariaDB and, optionally, phpMyAdmin as configured.

4. **Run Database Migrations**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the Server**
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:3000`.

## API Endpoints

| Method | Endpoint                | Description                       |
|--------|-------------------------|-----------------------------------|
| POST   | `/users`                | Create a new player              |
| GET    | `/users/:id`            | Retrieve player info by ID       |
| POST   | `/users/:id/exp`        | Add EXP to a player              |
| GET    | `/users/ranking/top`    | Get top 10 players by level      |

### Example Request Bodies

**Create a New Player**
```json
{
  "username": "korn"
}
```

**Add EXP to a Player**
```json
{
  "gainExp": 250
}
```

## Project Structure

```
src/
├── app.ts                   # Configures routes and middleware
├── index.ts                 # Server entry point
├── routes/
│   └── user.routes.ts       # API endpoint definitions
├── controllers/
│   └── user.controller.ts   # Handles requests and responses
├── services/
│   └── user.service.ts      # Business logic
├── db/
│   └── prisma.ts            # Prisma Client instance
└── utils/
    └── level-calculator.ts  # Level-up calculation logic
```

## Leveling Logic

The leveling system uses a predefined EXP threshold map for each level. Example:

```typescript
const LEVEL_EXP_MAP = {
  1: 100,
  2: 200,
  3: 400,
  4: 800,
  5: 1600
};
```

When a player's EXP exceeds the threshold for their current level, they level up, and the consumed EXP is deducted.

## Testing the API

Use Postman or a similar tool to test the following endpoints:
- `POST /users`
- `GET /users/1`
- `POST /users/1/exp`
- `GET /users/ranking/top`

## Optional: phpMyAdmin Setup

To visualize the database:
- Open `http://localhost:8080` in a browser.
- **Credentials**:
  - Server: `localhost`
  - Username: `gameuser`
  - Password: `gamepass`
  - Database: `exp_game_db`

![Editor _ Mermaid Chart-2025-06-20-100136](https://github.com/user-attachments/assets/42d2067b-b9df-4370-b67a-d57bf55a23aa)

## Support

For questions or issues:
- Open an issue on the repository.
- Submit a pull request for contributions.
- Contact: tanakornit1407@example.com
