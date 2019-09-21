import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from './config/routes';
import { Layout } from './styled';

ReactDOM.render(
  <Layout>
    <Router>
      {renderRoutes(routes)}
    </Router>
  </Layout>,
  document.getElementById('root')
);