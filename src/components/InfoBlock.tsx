import React from 'react';

export default ({ text }:any) => 
  <div className="uk-inline">
      <span className="infoblock" uk-icon="info"></span>
    
    <div uk-dropdown="mode: click;animation: uk-animation-slide-top-small; duration: 1000">
    {text}</div>
  </div>;