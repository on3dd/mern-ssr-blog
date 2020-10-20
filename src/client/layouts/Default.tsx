import React from 'react';
import { renderRoutes } from 'react-router-config';

type DefaultLayoutProps = {
  route: any; // TODO: fix any
};

const DefaultLayout = ({ route }: DefaultLayoutProps) => {
  return (
    <div className="screen">
      <div className="container">
        {renderRoutes(route.routes)}
      </div>
    </div>
  );
};

export default DefaultLayout;
