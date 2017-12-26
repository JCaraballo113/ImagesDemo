# Images Demo 
A demo application I had to make for a client where Images get saved to firebase and then loaded up into a slider component.
Please keep in mind it was a VERY quick and dirty solution just as a proof of concept. Took me about 3 hours to make

# Frameworks Used
- [ReactJS](https://reactjs.org/)
- [Redux](https://redux.js.org/)

# External Components used
- [React-Slick](https://github.com/akiran/react-slick)
- [React-Dropzone](https://github.com/react-dropzone/react-dropzone)

# Backend used
- [Firebase](https://firebase.google.com/)

# Specific Firebase features used
 - Real time Database
 - Storage

# Setup
 - Create a firebase application at [Firebase](https://firebase.google.com/)
 - Follow their setup instructions for a web based app [here](https://firebase.google.com/docs/web/setup)
 - Remove auth rules from your storage and real time DB. Remember this was just a test app.
 - Add the config in App.js however you like. Right now I just require a config object in a firebase folder
 - `yarn install`
 - `yarn start`