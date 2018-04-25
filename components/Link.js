import React from 'react';
import NextLink from 'next/link';

export const Link = props => (
  <span>
    <NextLink {...props}>
      <a className="link">{props.children}</a>
    </NextLink>
    <style jsx>{`
      .link {
        color: #474747;
        font-size: 12px;
        text-decoration: none;
      }
      .link:hover {
        text-decoration: underline;
      }
    `}</style>
  </span>
);

export default Link;
