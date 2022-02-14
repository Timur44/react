import React from 'react';
import { useState } from 'react';

const ProfileStatusWithHooks=(props)=>{

    let [editMode,setEditMode]=useState(false);
    let [status,setStatus]=useState(props.status);
    const activateMode=()=>{
        setEditMode(true);
    }
    const disactivateMode=()=>{
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange=(e)=>{
        setStatus(e.currentTarget.value)
       
    }

    return(      
       <div>
           {!editMode &&
                <div>
                    <span onDoubleClick={activateMode}>{props.status || "No status"}</span>
                </div>
            } 
            {editMode && 
                <div>
                    <input type="text" value={status} onBlur={disactivateMode} onChange={onStatusChange}/>
                </div>
            }
       </div>
    )
  
}

export default ProfileStatusWithHooks;