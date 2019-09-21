import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Layout } from './styled';
import { WrapperForm } from './container/index';

ReactDOM.render(
  <Layout>
    <WrapperForm/>
  </Layout>,
  document.getElementById('root')
);