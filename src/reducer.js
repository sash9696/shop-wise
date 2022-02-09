export const initialState = {
    basket: [],
    user:null
};

export const getBasketTotal = (basket) => (
    basket?.reduce((acc, curr) => acc + curr.price , 0)

)


const reducer = (state, action) => {
    console.log('action',action)
    switch (action.type) {
      case "SET_USER":
      return{
        ...state,
         user:action.user
      }
      case "ADD_TO_BASKET":
        //Logic to add item to the basket
        return {
            ...state,
            basket: [...state.basket, action.item]
        };
      case "REMOVE_FROM_BASKET":
        //logic to remove item from the basket
        let newBasket = [...state.basket]
        const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
          );
          if(index >= 0){
              newBasket.splice(index,1)
          }

        return {...state, basket: newBasket};
       
      default:
        return state;
    }
  };
  
  export default reducer;