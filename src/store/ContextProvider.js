import { useState, useEffect, useContext } from "react";
import CartContext from "./cart-context";
import axios from "axios";
import AuthContext from "./auth-context";


const ContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const authCtx = useContext(AuthContext);
  const email = authCtx.email;
  let mail = email.replace(/[@.]/g, "");
  
  useEffect(() => {
    if (authCtx.isLoggedIn) {
      const url = `https://crudcrud.com/api/cf223f6b01a74407b810945b272a00a3/${mail}`;
      axios
        .get(url)
        .then((res) => {
          setCartItems(res.data);
          setTotalAmount(res.data.reduce((current, item)=> current + (item.price * item.quantity), 0));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [authCtx.isLoggedIn]);
  
  const addItemHandler = async(item) => {
    const url = `https://crudcrud.com/api/cf223f6b01a74407b810945b272a00a3/${mail}`;
    let existingItemIndex = cartItems.findIndex((ele)=>ele.id === item.id);
    let existingItem = cartItems[existingItemIndex];
    try{
      if(existingItem){
          const myData = {
            id: existingItem.id,
            title: existingItem.title,
            price: existingItem.price,
            imageUrl: existingItem.imageUrl,
            quantity: existingItem.quantity + 1
          }
          let response = await axios.put(`${url}/${existingItem._id}`, myData);
          console.log(response.data);
          
          if(!response.data){
            throw new Error("Something went wrong while updating!");
          }
          // setCartItems((prev)=> prev.map((i)=>i.id === existingItem.id ? {...i, quantity: i.quantity+1} : i));
          setCartItems((prev)=> {
            return [...prev , {...existingItem, quantity: existingItem.quantity+1}];
          });
        }
      else{
          let response = await axios.post(url, item); 
          console.log(response);
          if(!response.data){
            throw new Error("Something went wrong while adding!");
          }
          setCartItems((prev)=>{
            return [...prev, {...item, _id: response.data._id}];
          })
      }
    }catch(error){
      console.log(error);
    }
    setTotalAmount((prev)=>{
      return prev + item.price;
    });
  };
  const removeItemHandler = async(id) => {
    const url = `https://crudcrud.com/api/cf223f6b01a74407b810945b272a00a3/${mail}`;
    try{
      let response = await axios.delete(`${url}/${id}`);
      if(!response){
        throw new Error("Something went wrong while deleting!");
      }
    }catch(error){
      console.log(error);
    }
    const existingItemIndex = cartItems.findIndex((item)=> item._id === id);
    const existingCartItem = cartItems[existingItemIndex];
    setTotalAmount((prev)=>{
      return prev - (existingCartItem.price * existingCartItem.quantity);
    });
    const updatedItems = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedItems);
  };
  const cartData = {
    items: cartItems,
    totalAmount: totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartData}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
