import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'

export default () => 
<div className="uk-overlay uk-overlay-default uk-position-center">
              
                    <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={5000} //3 secs
           
        />
        
</div>;