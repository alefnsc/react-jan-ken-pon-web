# Table of Contents

1. [Jan Ken Pon Web App](#jan-ken-pon-web-app)
2. [Overview](#overview)
3. [Components](#components)
4. [Game Logic](#game-logic)
5. [Additional Features](#additional-features)
6. [Project Structure](#project-structure)
7. [Deployment](#deployment)
8. [How to Run Locally](#how-to-run-locally)
9. [Contact](#contact)

# Jan Ken Pon Web App

[Check out the live demo!](https://react-jan-ken-pon-web-afonseca.vercel.app/)

![Home Screen](src\assets\image-1.png\image.png)
![Instructions Modal](src\assets\image-1.png\image-1.png)
![Game Board - Timer](src\assets\image-1.png\image-2.png)
![Game Board - Move](src\assets\image-1.png\image-3.png)

# Overview {#overview}

This project is a React-based implementation of the classic Jan Ken Pon (Rock, Paper, Scissors) game. It includes features such as a timer for move selection, dynamic display of player and computer moves, game status tracking, and a responsive layout. The project utilizes Heroicons, react-spinners, react-toastify, and Tailwind for styling.

# Components {#components}

- **Header:** Displays the name of the game.
- **Main:** Encompasses all application components.
- **Score:** Shows the current game status.
- **Control:** Handles player moves.
- **GameBoard:** Displays timer and player/computer moves.
- **Home:** Displays a friendly Home Page enabling to start the game.
- **Instructions:** Provide a modal for displaying the instructions of the game.

# Game Logic {#game-logic}

- **Move Type:** A standardized type for controlling moves.
- **MoveHelpers:** Manages move types, options, and possible outcomes.
- **Result Function:** Calculates the game result.
- **RandomMove Function:** Generates a random move for the computer.
- **Logic:** Implements the game logic using states such as player1Win, player2Win, player1Move, player2Move, and score.
- **useEffect Statements:** Handle game logic and synchronize values across the application.

# Additional Features {#additional-features}

- **Toast Notifications:** Utilizes react-toastify to provide alerts about round results.

# Project Structure {#project-structure}

- **GameBoard Component:** it handles the game layout.
- **Home Page:** Includes instructions and a modal for additional information.
- **Business Rule:** The game runs in matches of three rounds, and the player who wins three rounds first wins the match.
- **Hooks:** Created hooks for opening/closing the game and showing/hiding the modal.

# Deployment {#deployment}

The project is deployed on Vercel. During deployment, there were some issues due to a deprecated type of react-toastify. Refer to the [deployment section](https://github.com/alefnsc/react-jan-ken-pon-web#deployment) for troubleshooting details.

# How to Run Locally {#how-to-run-locally}

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/alefnsc/react-jan-ken-pon-web.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

Feel free to contribute and keep rocking!

# Contact {#contact}

- **Maintainer:** Alexandre Fonseca
- **Email:** alexandrefonsecach@gmail.com
