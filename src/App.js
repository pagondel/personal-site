import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Home from './components/Home/Home';

function App() {
  return (
    <Layout>
      <Route exact path="/resume" render={() => <h1>Resume</h1>} />
      <Route exact path="/" component={Home} />
    </Layout>
  );
}

export default App;
