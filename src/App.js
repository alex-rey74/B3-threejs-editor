<<<<<<< HEAD
import React, {useRef, useContext} from 'react';
=======
import React, {useContext, useRef} from 'react';
>>>>>>> 315cc39c51a8e1ca8e48ca7c5e67249f76f7f627
import './App.scss';
import {Switch, Route, Link} from "react-router-dom";
import routes from "./constants/routes";
import {reverse} from 'named-urls';
import Colors from "./options/colors";
import Textures from "./options/textures";
import Shapes from "./options/shapes";
import Renderer from "./renderer";
import Gadget from "./options/gadgets";
<<<<<<< HEAD
import { Store, updateColor } from './store';

const App = props => {
    const {dispatch, store} = useContext(Store)
    return (
        <div className="App">

            <button onClick={() => {dispatch(updateColor(Math.random() * 0xFFFFFF))}}>
=======
import {Store, updateColor} from "./store";

const App = props => {

    const {dispatch, state} = useContext(Store);

    return (
        <div className="App">

            <button onClick={() => dispatch(updateColor(Math.random() * 0XFFFFFF))}>
>>>>>>> 315cc39c51a8e1ca8e48ca7c5e67249f76f7f627
                color
            </button>

            <Switch>
                <Route exact path={routes.home.options.colors.all} component={Colors}/>
                <Route exact path={routes.home.options.shapes.all} component={Shapes}/>
                <Route exact path={routes.home.options.textures.all} component={Textures}/>
                <Route exact path={routes.home.options.gadgets.all} component={Gadget}/>
            </Switch>

            <nav>
                <Link to={reverse(routes.home.options.colors.all)}>Colors</Link>
                <Link to={reverse(routes.home.options.shapes.all)}>Shapes</Link>
                <Link to={reverse(routes.home.options.textures.all)}>Textures</Link>
                <Link to={reverse(routes.home.options.gadgets.all)}>Gadgets</Link>
            </nav>

            <Renderer/>
        </div>
    );
}

export default App;
