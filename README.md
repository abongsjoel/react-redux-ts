# React Redux Typescript

> A simple application built while extending my knowledge on Typescript with React and Redux.

![screenshot](../dev/screenshot.png)

To start, I initialize "create-react-app" with TypeScript and then remove the code created by "create-react-app" that I dont need"

Then I install and configure fake-server with dummy data and use concurrently to run both "create-react-app server" and the "fake-server" together for development, and use curl cli to query the fake-server.

Next, I install "redux" and "react-redux", and create the reducer. Then I initialize the store and create the root state type and wrap the App's component tree into the react-redux's Provider component.

Next, I create a Recorder component:
  - Create the Redux actions and the reducer for the recorder feature
  - Dispatch the recorder's "start" action (useDispatch + useSelector hooks)
  - Setup an interval for a counter (setInterval + useRef + useEffect + clearInterval)
  - Dispatch the recorder's "stop" action

Next, I add the redux-thunk middleware, create an asynchronous action to fetch events and a reducer for the "fetch events" action. Then I used the "connect" function to pass the events array and the "loadUserEvents" dispatch function to the Calendar component. Then, I grouped the user events by day and render the Calendar.

Next, I moved on to creating Events:
  - Add the thunk action to add an event
  - Code the reducer function for the action
  - Dispatch the action when the user clicks the stop button


<!-- 
## Live Demo 

- [Visit Page]() -->

## Built With
- Typescript
- React
- Redux


## Author

👤 **Chi A. Joel**

- GitHub: [@abongsjoel](https://github.com/abongsjoel)
- Twitter: [@thierryjoel10](https://twitter.com/ThierryJoel10)
- LinkedIn: [Chi Abongwa Joel](https://www.linkedin.com/in/chi-abongwa-joel-b4285a97/)


## Acknowledgments

- [Dmytro Danylov](https://www.udemy.com/course/react-with-typescript/)

## Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/abongsjoel/react-redux-ts/issues).

## Show your support

Give a ⭐️ if you like this project!

## License

  <p>This project is <a href="../main/LICENSE">MIT</a> licensed.</p>



  

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
