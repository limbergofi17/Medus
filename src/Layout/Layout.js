import React from 'react';

export function Layout(props) {
  const {children}=props;
  return (
    <>
    <div>
      {children}
    </div>
    </>
  )
}
