import profileReducer, { addPostActionCreator,deletePost } from "./profile-reducer";

test('new post should be added', () => {
    let state={
        postMessage:[{id:0,message:"Hi"}],
        newPostText:'it-kamasutra',
        profile:null,
        status:""
    };
    let action=addPostActionCreator("Tima");
    let newState=profileReducer(state,action)
    expect(newState.postMessage.length).toBe(2)
    expect(newState.postMessage[1].message).toBe("Tima")
  });
test('new post should be deleted', () => {
let state={
    postMessage:[{id:0,message:"Hi"}],
    newPostText:'it-kamasutra',
    profile:null,
    status:""
};
let action=deletePost(0);
let newState=profileReducer(state,action)
expect(newState.postMessage.length).toBe(0)
});