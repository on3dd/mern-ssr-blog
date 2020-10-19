import React from 'react';

// import styled from 'styled-components';

type DefaultLayoutProps = {
  component: React.ComponentType;
  [key: string]: any;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { component: Component, ...otherProps } = props;
  return (
    <div className="screen">
      <div className="container">
        <Component {...otherProps} />
      </div>
    </div>
  )
}

export default DefaultLayout;
