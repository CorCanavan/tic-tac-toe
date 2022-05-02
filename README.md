# Tic-caT-Toe
:black_cat: A furry and purry spin on a classic game. :dog2:

## Table of Contents
  - [Introduction](#introduction)
  - [Technologies](#technologies)
  - [Features](#features)
  - [Illustrations](#illustrations)
  - [GitHub Link](#github-link)
  - [Possible Future Extensions](#possible-future-extensions)
  - [Set Up](#set-up)
  - [Sources](#sources)
  - [Contributor](#contributor)
  - [Lessons Learned](#lessons-learned)
  - [Project Specs](#project-specs)
  - [Project Inspiration](#project-inspiration)

## Introduction
Grab a friend to play Tic-caT-Toe and see who gets 3-in-a-row! Choose from either the brown dog :dog2: or black cat :black_cat: emoji as your token. This app tracks player wins so multiple rounds are encouraged!

## Technologies
- Javascript
- HTML
- CSS

## Features
- A player is able to select an empty space on the board and have their token show up. The banner updates to display the token of which player's turn it currently is. A player cannot click on a space that is already occupied by another player. It will remain their turn until they click on an empty space.
- A player can win by connecting 3 horizontally, vertically, or diagonally. When a win occurs, the top banner changes to declare the winner. The player side bar is updated to reflect the number of wins the player has total. The game restarts itself after a brief pause.
- A draw can occur, in which case the top banner declares a draw and neither player's win count increases or decreases. The game restarts after a brief pause.

## Illustrations
https://user-images.githubusercontent.com/97919748/165367781-19dca6d9-f08c-49e6-8f34-743945cc30a3.mov

## GitHub Link
Visit my deployed link [here](https://corcanavan.github.io/tic-tac-toe/)

## Possible Future Extensions
- Persist player win data using local storage in order for number of wins to persist across page refreshes.
- Add animation and hover states to improve user experience.
- Generate different winning messages to display when a player has won.

## Set Up
  1. Fork this repo  
  2. Clone the repo to your local machine
  3. View the project in the browser by running `open index.html` in your terminal

## Sources
- [CSS Tricks](https://css-tricks.com/)
- [MDN](http://developer.mozilla.org/en-US/)
- [W3Schools](https://www.w3schools.com/)
- [Stack Overflow](https://stackoverflow.com/)

## Contributor
- [Corinne Canavan](https://github.com/CorCanavan)
  - [LinkedIn](https://www.linkedin.com/in/corinnecanavan/)

## Lessons Learned
- There is SO MUCH that goes into bringing an application to life, even something as seemingly simple as a game of tic-tac-toe! I realized the importance of breaking down the project into sections (planning, HTML/CSS, JavaScript) and then whittling down each section into steps with smaller, more digestible pieces, and focusing on each individual, smaller piece at a time. It was really easy for me to get super overwhelmed by the project as a whole and then my brain would go in 7 different directions at once, so breaking it down was an absolute must.
- Drawing out a spec of the app on paper first and deciding which HTML elements should make up each part before writing in the HTML file was beneficial. CSS grid came in really handy for creating the tic-tac-toe board!
- Approaching the JavaScript portion was daunting; I found it helpful to take a giant step back and prioritize pseudocoding out the entire game in steps before diving into actually writing any code. The logic for checking for a winner really threw me for a loop (or 2)! :smile: It was interesting to figure out how to "translate" the game logic from plain speak into something the computer can understand and work with.

## Project Specs
- The spec for this project can be found [here](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo-v2.html).

## Project Inspiration
- The theme for Tic-caT-Toe was inspired by my own furries: :black_cat: Doc Holliday and Mesa :dog2:
<img src="https://user-images.githubusercontent.com/97919748/165383229-e763586f-6b35-4b88-8c23-a8fcabdd0110.jpeg" width=50% height=50%>
