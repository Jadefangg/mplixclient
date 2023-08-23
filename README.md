# Movies-couch_client
## Table of Contents:
* [Overview](#overview)
* [How to Run](#how-to-run)
* [Links](#links)
* [Process](#process)
* [Technologies Used](#technologies-used)
* [Dependencies](#dependencies)
* [API](#api)
* [Features](#features)
* [Credits](#credentials)

<a id="overview"></a>
## Overview
Movies-Couch is the client-side part of the app, based on the existing server side. This movie app allows users to access information about different movies.
Users can register, update, their personal data, and manage as well their favorite movies.
The client side user interface complements REST API and MongoDB database whcich have been set up previously, providing a smooth experience for users. Built with MERN-stack (MongoDB, Express, React, Node.js), Movies-Couch is a full-stack web application which offers a user-friendly, responsive and efficient solution for those seeking movie information and management.

<a id="hot-to-tun"></a>
## How to Run
1. Clone repository using command git clone https://github.com/HerRA17/movies-couch_client
2. Install dependencies using npm install prop-types@15.8.1 react@18.2.0 react-bootstrap@ and npm install --save-dev @parcel/transformer-sass@2.8.3 parcel@2.8.3 process@0.11.10
3. Run the app using parcel src/index.html
4. After this, the app should be available in the browser at http://localhost:1234 
5. To access movies, register or use following test credentials: Username: Example(Test); Password: Example(Test)

<a id="links"></a>
## Links
Check the site here: <a href="https://movies-couch.netlify.app/"> movies-couch </a>
Chech the API site: <a href="https://github.com/HerRA17/movies-couch_api" > movies-couch API</a>

<a id="technologies-used"></a>
## Technologies Used
+ React
+ Bootstrap
+ Javascript
+ HTML
+ CSS

<a id="dependencies"></a>
## Dependencies
* "dependencies": {
  *  "bootstrap": "^5.2.3",
  *  "prop-types": "^15.8.1",
  *  "react": "^18.2.0",
  *  "react-bootstrap": "^2.7.2",
  *  "react-dom": "^18.2.0",
  *  "react-hook-form": "^7.43.5",
  *  "react-router": "^6.8.2",
  *  "react-router-dom": "^6.8.2"
  },
  * "devDependencies": {
   * "@parcel/transformer-sass": "^2.8.3",
   * "@testing-library/react": "^14.0.0",
   * "buffer": "^5.7.1",
   * "eslint": "^8.36.0",
   * "eslint-plugin-jsx-a11y": "^6.7.1",
   * "eslint-plugin-react": "^7.32.2",
   * "eslint-plugin-react-hooks": "^4.6.0",
   * "process": "^0.11.10"
  }

<a id="api"></a>
## API Documentation
Information regarding the <a href="https://github.com/HerRA17/movies-couch_api" target="_blank">API</a> used in the Project(endpoints, dependencies, error response...) can be found <a href="" target="_blank">here</a>

<a id="features"></a>
## Features
Main view
● Returns ALL movies to the user (each movie item with an image, title, and description)
● Filtering the list of movies with a “search” feature
● Ability to select a movie for more details
● Ability to log out
● Ability to navigate to Profile view
Single Movie view
● Returns data (description, genre, director, image) about a single movie to the user
● Allows users to add a movie to their list of favorites
● Allow users to see which actors star in which movies
Login view
● Allows users to log in with a username and password
Signup view
● Allows new users to register (username, password, email, date of birth)
Profile view
● Displays user registration details
● Allows users to update their info (username, password, email, date of birth)
● Displays favorite movies
● Allows users to remove a movie from their list of favorites
● Allows existing users to deregister

<a id="credits"></a>
## Credits
Tutor: Adewunmi bamishigbin
Mentor: Joel Cross