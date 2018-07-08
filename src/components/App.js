// @flow
import React from 'react';

import './App.css';

const App = ({ message }: { message: string }) => (
  <section className="app">
    <h1 className="app__title">
      {message}
    </h1>
  </section>
);

export default App;
