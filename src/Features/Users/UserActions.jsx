export const userLogin=(login_data)=>{
    return {
        type:'Login',
        payload:login_data,
    }
}
export const userLogout=()=>{
    return {
        type:'Logout',
    }
}