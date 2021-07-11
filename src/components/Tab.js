import React, {useState} from 'react';
import style from '../App.css'


const Tab = (props) =>{

    const onClickHandler= (e, index, array) =>{
        e.preventDefault();
        console.log(array[index])
        props.onNewTab(array[index].content)
    }

    return props.info.map( (element, index, array) => {
        
        return(   
                <button className="tab" key={index} onClick={ (e)=>onClickHandler(e, index, array) }>{array[index].label}</button>
            
    )});   
}
export default Tab