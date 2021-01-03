import React from 'react';

// Modules
import { NativeRouter, Switch, Route } from "react-router-native";

// Components
import Home from './components/home/Home';
import HowToPlay from './components/how-to-play/HowToPlay';
import Cart from './components/cart/Cart';

export default function App() {

  return (

    <NativeRouter>

      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/how-to-play" component={HowToPlay} />
        <Route exact path="/cart" component={Cart} />
        
      </Switch>

    </NativeRouter>

  );
};