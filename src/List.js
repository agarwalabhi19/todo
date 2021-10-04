import React from 'react';
import './List.css';
import {AiFillDelete } from 'react-icons/ai';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function List(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
       
        <AiFillDelete className="faicons" onClick={() => {
            props.deleteItem(item.key)
        }} icon="trash" />
        </span>
     </p>
     
    </div>})
    return <div>
    
        {listItems}
    
    </div>;
  }

  export default List;