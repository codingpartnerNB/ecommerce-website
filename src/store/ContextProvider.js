import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action)=>{
    if(action.type === "ADD_ITEM"){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity;
        const existingCartItemIndex = state.items.findIndex(item=> item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + action.item.quantity
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }else{
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if(action.type === "REMOVE_ITEM"){
        const existingCartItemIndex = state.items.findIndex(item=> item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price * existingCartItem.quantity;
        const updatedItems = state.items.filter(item=> item.id !== action.id);
        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}

const ContextProvider = (props)=>{
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemHandler = (item)=>{
        dispatchCartAction({type: "ADD_ITEM", item: item});
    }
    const removeItemHandler = (id)=>{
        dispatchCartAction({type: "REMOVE_ITEM", id: id});
    }
    const cartItems = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }; 
    return(
        <CartContext.Provider value={cartItems}>
            {props.children}
        </CartContext.Provider>
    );
}

export default ContextProvider;