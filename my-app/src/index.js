import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App'; */
import * as serviceWorker from './serviceWorker';
import store from './store';
import Spinner from './Spinner';
import { Provider } from 'react-redux';
import BugTracker from './bugTracker';
import Projects from './projects';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => (
  <Fragment>
    <p>Occaecat sunt non aliquip mollit nostrud voluptate non exercitation Lorem sunt. Voluptate reprehenderit excepteur anim duis tempor eiusmod eiusmod commodo qui exercitation velit amet. Culpa sit exercitation consequat sit eiusmod irure deserunt sint culpa Lorem sit aute ex. Magna labore aliqua aliqua veniam ipsum id. Do proident aliqua irure incididunt aliqua laborum eu ad sit officia proident sunt. Mollit proident ullamco deserunt eiusmod sit ea pariatur ex Lorem voluptate. Veniam sit est labore officia laboris proident pariatur aliqua pariatur.</p>
    <p>Laboris mollit anim qui voluptate in ex. Consectetur enim occaecat ad proident sint excepteur consectetur. Quis irure incididunt do sit fugiat aute et qui anim fugiat aliquip consectetur veniam. Enim reprehenderit sit irure minim excepteur ex tempor deserunt qui.</p>
    <p>Cupidatat consectetur et Lorem cupidatat cupidatat aliquip deserunt ullamco incididunt consectetur aliquip consequat voluptate Lorem. Mollit pariatur consequat Lorem labore id ut. Nostrud adipisicing officia id pariatur pariatur est velit elit ipsum excepteur in tempor. Deserunt ut eu eu veniam laborum Lorem ullamco aliquip laboris pariatur ipsum. Voluptate nulla ad velit esse labore aute occaecat nostrud mollit non. Id dolor cupidatat magna ullamco labore minim incididunt consequat irure magna do occaecat cillum laboris. Ipsum enim ipsum magna cillum ad in mollit pariatur eu culpa irure Lorem.</p>
  </Fragment>
)
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <h1>My App</h1>
      <div>
        <span> [ <Link to="/home">Home</Link> ] </span>
        <span> [ <Link to="/spinner">Spinner</Link> ] </span>
        <span> [ <Link to="/bugs">Bugs</Link> ] </span>
        <span> [ <Link to="/projects">Projects</Link> ] </span>
      </div>
      <hr />
      <Switch>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/bugs">
          <BugTracker/>
        </Route>
        <Route path="/spinner">
          <Spinner/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

/* 
function renderApp() {
  const value = store.getState();
  ReactDOM.render(
    <Spinner
      value={value}
      dispatch={store.dispatch}
      {...spinnerActionCreators}
    />,
    document.getElementById("root")
  );
}
renderApp();
store.subscribe(renderApp); */

/* ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//ES6 Modules

/* 
import * as calc from './calc';
console.log(calc); 
*/

/* 
import * as calc from './calc';
const { add } = calc;
*/

/* 
import { add } from './calc ;
*/

/* 
importing the default exported object
*/

/* 
import calc from "./calc";
console.log(calc); 
*/