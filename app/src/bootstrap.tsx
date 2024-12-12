import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './styled';
import { Root } from './view';
import { GlobalStyle } from './ui/globalStyle';

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
  <Layout>
    <GlobalStyle />
    <Router>
      <Root />
    </Router>
  </Layout>
)