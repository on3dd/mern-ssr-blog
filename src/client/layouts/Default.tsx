import React from 'react';
import {
  renderRoutes,
  RouteConfig,
} from 'react-router-config';

type DefaultLayoutProps = {
  route?: RouteConfig;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  route,
}: DefaultLayoutProps) => {
  return (
    <div className="screen">
      <div className="container">
        {route && renderRoutes(route.routes)}
      </div>
    </div>
  );
};

export default {
  component: DefaultLayout,
};
