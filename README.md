

<a id="overview"></a>
## Overview
mplix as the name suggests is a working version of an IMDB esque application. It incorporates features such as registering a new user, allowing exisiting users to login, searching through movies which are stored in a database which is fetched from the backend. The user can then add movies to their favourites or remove them from their favourites. This project also allows users to update their profiles or delete their accounts. 

##  Logic
The simple logic to such a project is as follows:

1. Make a backend code which is pushed to an online server host like heroku or vercel.
2. Create a mongoDB database on which you push your sample data (JSON etc.)
3. Connect the backend - mongoDB <-----> Heroku/Vercel etc via a connection URI and configuration variables. [Ideally protect the URIs with environment variables]
4. Create the frontend code.
5. Deploy the front end side via netlify or others.
6. Connect/fetch data to the front UI via the live server link to your backend.
7. Front-end<<----->>Back-end.
   
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


<a id="features"></a>
## Features

### Main view
- **Returns ALL movies** to the user (each movie item with an image, title, and description)
- **Filtering** the list of movies with a “search” feature
- Ability to **select a movie for more details**
- Ability to **log out**
- Ability to navigate to **Profile view**

### Single Movie view
- **Returns data** (description, genre, director, image) about a single movie to the user
- Allows users to **add a movie to their list of favorites**
- Allow users to **see which actors star in which movies**

### Login view
- Allows users to **log in with a username and password**

### Signup view
- Allows **new users to register** (username, password, email, date of birth)

### Profile view
- **Displays user registration details**
- Allows users to **update their info** (username, password, email, date of birth)
- **Displays favorite movies**
- Allows users to **remove a movie from their list of favorites**
- Allows **existing users to deregister**


<a id="credits"></a>
## Credits
CareerFoundry.
