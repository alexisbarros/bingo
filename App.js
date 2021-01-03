import React from 'react';

// Modules
import { NativeRouter, Route } from "react-router-native";

// Components
import Home from './components/home/Home';
import HowToPlay from './components/how-to-play/HowToPlay';

export default function App() {

  return (

    <NativeRouter>

      <Route exact path="/" component={Home} />
      <Route exact path="/how-to-play" component={HowToPlay} />

    </NativeRouter>

  );
};