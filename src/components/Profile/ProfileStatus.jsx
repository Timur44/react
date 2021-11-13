import React from 'react';

class ProfileStatus extends React.Component{
    state={
        editMode:false
    }

    activateEditMode=()=>{
        this.setState({
            editMode:true
        })
    }
    diactivateEditMode=()=>{
        this.setState({
            editMode:false
        })
    }

    render(){
       return(
        
       <div>
           {!this.state.editMode ? <div><span onDoubleClick={this.activateEditMode}>{this.props.status}</span></div> : <div><input autoFocus={true} onBlur={this.diactivateEditMode} type="text" value={this.props.status} /></div>}
       </div>)
    }
  
}

export default ProfileStatus;