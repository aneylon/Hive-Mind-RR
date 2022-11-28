# Hive Mind

A project for managing Necromunda, Kill Team and Warcry resources.

## ToDos

- [ ] Add react-form-hook for form validation
- [ ] Deploy to heroku or netlify or something
- [ ] CI (Circle, Jenkins, ???)
- [ ] Google Analytics
- [ ] Bug Report Component
- [ ] Send signed in user or annonymous information
- [ ] Finish ToDo Component
  - [ ] Load Todos from backend
  - [ ] Save and retrieve Todos to backend
- [ ] Fix Posts
  - [ ] Wire up to back end
- [ ] Messages
- [x] Set up auth
- [ ] Add Chart Js for react
- Game Tools
- [ ] Warband manager
  - [ ] Warcry
  - [ ] Kill Team
  - [ ] Necromunda
    - [ ] Settlement
    - [ ] Necromunda Market
    - [ ] Random Market generator
  - [x] Enforcer name generator
    - [ ] Allow user to pick format
- [x] Dice roller
  - [ ] Add multiples of dice.
  - [ ] Show results more atomically ex - 3 (2+1)
- [x] Color scheme generator
  - [ ] Adjusted colors
  - [ ] Save color schemes
- [x] Anagram-a-tron
  - [ ] Add MUI styling
- [ ] Random Name Generator
  - [ ] Style with MUI
- [ ] Random Matches
- [ ] Dice charts (tables to roll)
- [ ] Testing
  - [ ] component (Jest?)
  - [ ] end to end (Cypress?)
- [x] Add Mui
  - [ ] Use MUI Styling
- [x] Add Router
  - [x] Add Nav Component
  - [x] Add Not Found Component
  - [] Protect routes
- [x] Add Redux
  - [x] Set up Redux Dev Tools
- [x] Add json-server for local development
- [x] Environment Variables

## References

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com)
- [Redux](https://redux.js.org/)
- [React Redux](https://react-redux.js.org/)
- [MUI V4](https://v4.mui.com)
- [Mui](https://mui.com/)
- [React Chart Js](https://github.com/reactchartjs/react-chartjs-2)
- [Redux Devtools](https://github.com/reduxjs/redux-devtools)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [JSON Server](https://github.com/typicode/json-server)
- [Date FNS](https://date-fns.org)

# Setting up and getting started

- Run `yarn install` to install all dependencies
- Add a .env file to the root of the application with the following settings

```
REACT_APP_API_URL = 'http://localhost:3700' // or whatever url the local api is running on
```

- Run `yarn start` to start the applications

## Setting up for code editing

- Formatting with prettier
  - Install the Prettier extension in VS Code
  - Set Editor: Default Formatter = Prettier
  - Set Editor: Format on Save
- Enable emmet in react

```json
"emmet.includeLanguages": { "javascript": "javascriptreact" }
```

## ...things to clean up...

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install`

installs all dependencies

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
