import React from 'react';

export const Container = props => (
  <section {...props}>
    {props.children}
    <style jsx>{`
        margin-left: auto;
        margin-right: auto;
        width: ${props.width || '80%'};
    `}</style>
  </section>
);

export default Container;
