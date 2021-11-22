# React Redux Project

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

## Redux

A Predictable State Container for JS Apps. React Redux is the official React UI bindings layer for Redux.

src/reducers/counter.js ->

```js
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'INCREMENTBY5':
      return state + action.payload
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
export default counterReducer
```

src/reducers/index.js ->

```js
import counterReducer from './counter'
import { combineReducers } from 'redux'
const Reducers = combineReducers({
  counter: counterReducer
})
export default Reducers
```

src/actions/index.js ->

```js
export const increment = () => {
  return {
    type: 'INCREMENT'
  }
}
export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}
export const incrementby5 = (num) => {
  return {
    type: 'INCREMENTBY5',
    payload: num
  }
}
```

src/index.js ->

```js
import Reducers from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
let store = createStore(
  Reducers,
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

src/App.js ->

```js
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementby5 } from './actions'
function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment())}> + </button> &nbsp;
      <button onClick={() => dispatch(incrementby5(5))}> +5 </button> &nbsp;
      <button onClick={() => dispatch(decrement())}> - </button>
    </div>
  );
}
export default App;
```

## Redux DevTools Extension

Please visit for more details: https://github.com/zalmoxisus/redux-devtools-extension.