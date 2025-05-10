import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const nodeRef = useRef(null);

  const [editMode, setEditMode] = useState(false)
  const [val, setVal] = useState('Double Click to Edit');

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef}>
       {
        editMode? (<input value={val} onChange={(e)=>setVal(e.target.value)} onDoubleClick={()=> setEditMode(false)}/>)
       : (<h1 onDoubleClick={()=> setEditMode(true)}>{val}</h1>)
       }
      </div>
    </Draggable>
  );
}



export default Text;