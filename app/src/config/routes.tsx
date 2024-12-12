import React from 'react';
import { WrapperForm } from '../container';
import { Average } from '../container/average';
import { List } from '../container/list';
import { Home } from '../view/home';

const routes = [
  {
    path: '/',
    element: <Home />,
    children: [
      { 
        path: '/form',
        element: <WrapperForm />
      },
      { 
        path: '/average',
        element: <Average />
      },
      { 
        path: '/list',
        element: <List />
      },
    ]
  }
];

export { routes }