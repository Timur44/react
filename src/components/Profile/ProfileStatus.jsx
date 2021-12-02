import React from 'react';

class ProfileStatus extends React.Component{


    state={
        editMode:false,
        status:this.props.status
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
        this.props.updateStatus(this.state.status)
        debugger;
        
    }

    onStatusChange=(e)=>{
        this.setState({
            status: e.currentTarget.value
        })
       
    }


    componentDidUpdate(prevProps,prevState){
        debugger;
        if(prevProps.status!==this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render(){
       return(
        
       <div>
           {!this.state.editMode ? <div><span onDoubleClick={this.activateEditMode}>{this.state.status || "No status"}</span></div> : <div><input onChange={this.onStatusChange}  autoFocus={true} onBlur={this.diactivateEditMode} type="text" value={this.state.status} /></div>}
       </div>)
    }
  
}

export default ProfileStatus;