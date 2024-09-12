import React from 'react';
import './../App.css';
import guidePdf from './../files/Critical-Needs-Guide-2023.pdf';

/**
 * This is a helper component to define a single column with an image, title, paragraph and button.
 * This component will mostly be used multiple times in a container to create a row of Columns.
 * Also, all parts are optional, for example if there is no image or button it will just
 * create a column with a title and paragraph.
 */
function Column({src, title, p, button, imgclass, hasLink}) {
  return (
    <div className="column">
      <img className={"column-img " + imgclass} src={src} alt=""/>
      <h3 className="column-h">{title}</h3>
      <p className="column-p">{p} {hasLink ? <span><a href={guidePdf} target="_blank" rel="noopener noreferrer" download>Click to download.</a></span> : ''}</p>
      <div>{button}</div>
    </div>
  );
}

export default Column;
