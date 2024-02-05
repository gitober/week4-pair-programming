// PageLink.js
import React from "react";
import { Link } from "react-router-dom";

function PageLink({ to, text, childClass }) {
  return (
    <li>
      <Link to={to} className={childClass}>
        {text}
      </Link>
    </li>
  );
}

export default PageLink;
