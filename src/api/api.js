import axios from "axios"



const instance=axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{
        "API-KEY":"99c4ad40-9f28-463b-9b7f-7ae01e967559"
    }
});


export const usersAPI={
    getUsers(currentPage,pageSize){
        return instance.get(`users?page=${currentPage}&count${pageSize}`,
        )
        .then(responce=>{ return responce.data});
    },
    changePage(pageNumber,pageSize){
        return instance.get(`users?page=${pageNumber}&count${pageSize}`,
        {withCredentials:true})
        .then(responce=> { return responce.data});
    
    },
    followUser(id){
        return  instance.post(`/follow/${id}`,{})
    
    },
    unfollowUser(id){
        return  instance.delete(`/follow/${id}`)
    
    },
    setProfile(userId){
        console.warn("Using old version,please change this one")
        return profileAPI.setProfile(userId);
    },
    login(){
        return  instance.get('auth/me');
    }
}

export const profileAPI={
    setProfile(userId){
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    },
    setStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`,{status:status})
    },
    savePhotos(photo){
        const formData= new FormData()
        formData.append('image',photo)
        return instance.put(`profile/photo`,formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(data){
        return instance.put(`profile`,data)
    },
}

export const authAPI={
    me(){
        return instance.get('auth/me')  
    },
    login(email,password,rememberMe=false,captcha){
        return instance.post('auth/login',{email,password,rememberMe,captcha})  
    },
    
    logOut(email,password,rememberMe=false){
        return instance.delete('auth/login')  
    }
}

export const securityAPI={
    gettCaptcha(){
        return instance.get('security/get-captcha-url')  
    }
   
}