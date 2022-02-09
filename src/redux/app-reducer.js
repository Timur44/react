
import { loginThunkCreator } from "./auth-reducer";

const SET_INITIALIZED="SET_INITIALIZED";

let initialState={
    initialized:false,
}  
const appReducer=(state=initialState,action)=>{
    
    switch(action.type){
        case SET_INITIALIZED:
            return{
                ...state,
                initialized:true,
                
            };
        default:
            return state;
    }

}

export default appReducer;

export const setInitialized=()=>{
    return {
        type:SET_INITIALIZED
    }
}

export const setInitializedApp=()=>(dispatch)=>{
   let promise=dispatch(loginThunkCreator())
   debugger;
   promise.then(()=>{dispatch(setInitialized())})
   
}

