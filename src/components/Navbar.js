import React,{useContext} from 'react';
import Mycontext from '../context/mycontext';

function Navbar()
{
    const a = useContext(Mycontext);
    console.log(a.state);
    return(
    <div>
        <h1>
        {a.state}
        </h1>
    </div>
    );
}
 export default Navbar;