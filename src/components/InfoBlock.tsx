import React from 'react';
export default ({ text }:any) => 
  <div className="uk-inline uk-margin-small-bottom infoblock-content">
      <span className="infoblock" uk-icon="info" ></span>
      <div uk-dropdown="mode: click;animation: uk-animation-slide-top-small; duration: 800;pos:bottom-justify;">
    {text}</div>
  </div>;