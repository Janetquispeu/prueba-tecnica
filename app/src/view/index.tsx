import React from 'react'
import { useRoutes } from 'react-router-dom';
import { routes } from '../config/routes';

export const Root = () => {
  const routing = useRoutes(routes);
  return (
    <div>{routing}</div>
  )
}
