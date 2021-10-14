let store={
    _state:{
        dialogsPage:{
            dialogs:[{name:"Timur",id:1},{name:"Nikita",id:1},{name:"Lexa",id:1},{name:"Kirill",id:1},{name:"Matwey",id:1}],
            messages:[{name:"Hi",id:1},{name:"Hello",id:1},{name:"Privet",id:1},{name:"Arigato",id:1},{name:"Dibil",id:1}]
        },
        navPage:{
            items:['Profile','Messages','News','Music','Settings']
        },
        postMessage:[{id:0,message:"Hi"}],
        newPostText:'it-kamasutra'
    },
    getState(){
        return this._state;
    },
    subscribe(observe){
        this.renderEntireThree=observe;
    },
    _updateNewPostText(newText){
        this._state.newPostText=newText;
        this.renderEntireThree();
    },
    _addPost(){
        let newPost={
            id:1,
            message:this._state.newPostText
        };
        debugger;
        this._state.postMessage.push(newPost);
        this._updateNewPostText('');
        this.renderEntireThree();
    },
    renderEntireThree(){},
    dispatch(action){
       
        if(action.type==='ADD-POST'){
           this._addPost();
        }else if(action.type==='UPDATE-NEW-POST-TEXT'){
            this._updateNewPostText(action.newText);
        }
    }

    
}







 

    
   
export default store;
window.store=store;