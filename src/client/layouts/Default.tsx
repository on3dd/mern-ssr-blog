import React from 'react';
import {
  renderRoutes,
  RouteConfig,
} from 'react-router-config';

const DefaultLayout: React.FC = (route: RouteConfig) => {
  return (
    <div className="screen">
      <div className="container">
        {renderRoutes(route.routes)}
      </div>
    </div>
  );
};

export default {
  component: DefaultLayout,
};
