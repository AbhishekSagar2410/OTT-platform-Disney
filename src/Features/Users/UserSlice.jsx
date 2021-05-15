
const initialState = {
    name: '',
    email: '',
    photo: ''
}

// const userSlice=createSlice({
//     name:'user',
//     initialState,
//     reducers:{
//         setUserLoginDetails:(state,action)=>{
//             state.name=action.name;
//             state.email=action.email
//             state.photo=action.photo;
//         },
//         setSignout:(state,action)=>{
//             state.name=null;
//             state.email=null;
//             state.photo=null;
//         },
//     },

// })
// export const {setUserLoginDetails,setSignout}=userSlice.actions;
// export const selectUserName=(state)=>(state.name)
// export const selectUserEmail=(state)=>(state.email)
// export const selectUserPhoto=(state)=>(state.photo)
// export default userSlice.reducers;



const setUserLoginDetailsRedu = (state=initialState, action) => {
    switch (action.type) {
        case "Login":
            state.name = action.payload.name;
            state.email = action.payload.email
            state.photo = action.payload.photo;
            return state;
        default:return state;
    }
}

const setSignoutRedu = (state=initialState, action) => {
  
    switch (action.type)
    {
        case "Logout" :
            state.name = '';
            state.email = '';
            state.photo = '';
            return state;
        default: return state;
    }
}

export { setUserLoginDetailsRedu, setSignoutRedu };


