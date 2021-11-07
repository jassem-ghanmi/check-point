import React from 'react';
import {useLocation , useParams} from 'react-router-dom'

const Moviedata = () => {
    
    const location  = useLocation();

    return (
        <div>
         <p>  hello movie {location.pathname}</p>
        </div>
    );
}

export default Moviedata;
