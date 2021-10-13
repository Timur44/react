import { renderEntireThree } from "../render";

let state={
    dialogsPage:{
        dialogs:[{name:"Timur",id:1},{name:"Nikita",id:1},{name:"Lexa",id:1},{name:"Kirill",id:1},{name:"Matwey",id:1}],
        messages:[{name:"Hi",id:1},{name:"Hello",id:1},{name:"Privet",id:1},{name:"Arigato",id:1},{name:"Dibil",id:1}]
    },
    navPage:{
        items:['Profile','Messages','News','Music','Settings']
    },
    postMessage:[{id:0,message:"Hi"}]
    
    
    
}
export let addPosts=(postMess)=>{
    let newPost={
        id:1,
        message:postMess
    };
    state.postMessage.push(newPost);
    renderEntireThree(state);
}
    
   
export default state;