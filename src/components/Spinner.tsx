import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'

export default () => 
<div className="uk-overlay uk-position-center">
              
                    <Loader
            type="Rings"
            color="#2A6BCB"
            height={100}
            width={100}
            timeout={5000}
             //3 secs
           
        />
        
</div>;