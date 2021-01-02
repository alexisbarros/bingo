import React from 'react';

// Modules
import { NativeRouter, Route } from "react-router-native";

// Components
import Home from './components/home/Home'

export default function App() {

  return (

    <NativeRouter>

      <Route exact path="/" component={Home} />

    </NativeRouter>

  );
};