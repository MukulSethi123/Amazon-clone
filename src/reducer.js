// the reducer listens to the updates that happen to the global data 
// or the data layer and updates the components that use the global data 
// with the new data (basicall it similar to live data in android )

export const initialState = {
    basket:[],         
}

 const reducer = (state, action) => {
     console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':return{
            ...state,
            basket: [...state.basket, action.item],
            
        };
        default: 
            return state; 
    }
};
export default reducer; 