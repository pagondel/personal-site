import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <Layout>
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/" component={Home} />
    </Layout>
  );
}

export default App;
