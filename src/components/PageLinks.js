// PageLinks.js
import React from "react";
import PageLink from "./PageLink";
import { pageLinks } from "../data";

function PageLinks({ parentClass }) {
  return (
    <ul className={`${parentClass}s`} id="nav-links">
      {pageLinks.map((link) => (
        <PageLink
          key={link.id}
          to={link.to}
          text={link.text}
          childClass={parentClass}
        />
      ))}
    </ul>
  );
}

export default PageLinks;
