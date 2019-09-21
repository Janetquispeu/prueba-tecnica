import * as React from 'react';
import { WrapperForm } from '../container';
import { Average } from '../container/average';
import { List } from '../container/list';

const NotFound: React.SFC<{}> = () => (
  <div>
    <p>Links:</p>
    <a href="/form" style={{display: 'block'}}>Form Client</a>
    <a href="/average" style={{display: 'block'}}>Average Client</a>
    <a href="/list" style={{display: 'block'}}>List Clients</a>
  </div>
);

const routes = [
  { 
    path: '/form',
    component: WrapperForm
  },
  { 
    path: '/average',
    component: Average
  },
  { 
    path: '/list',
    component: List
  },
  {
    path: '*',
    component: NotFound,
  }
];

export { routes }