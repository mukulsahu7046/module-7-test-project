import React,{useState} from "react";
import Mycontext from './mycontext';

function ItemNumber(props)
{
    const[state,setState]= useState(0);

    return(
        <Mycontext.Provider value={{state,setState}}>
            {props.children}
        </Mycontext.Provider>
    )
}
export default ItemNumber;