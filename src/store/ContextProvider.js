import { useState, useEffect, useContext } from "react";
import CartContext from "./cart-context";
// import axios from "axios";
import AuthContext from "./auth-context";


const ContextProvider = (props) => {
  const authCtx = useContext(AuthContext);
  
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  
  const fetching = async()=>{
    try{
      const mail = authCtx.email.replace(/[@.]/g, "");
      const url = `https://crudcrud.com/api/f0a819afb86945baa04f4c72e4af1b25/cart${mail}`;
      //using axios
      // const res = await axios.get(url);
      // setCartItems(res.data);
      // const amount = res.data.reduce((current, item)=> current + (item.price * item.quantity), 0);
      // setTotalAmount(amount);
      // if(!res.data){
      //   throw new Error("Something went wrong while getting data!");
      // }

      //using fetch api
      const res = await fetch(url);
      if(!res.ok){
        throw new Error("Something went wrong while getting data!");
      }
      const data = await res.json();
      setCartItems(data);
      const amount = data.reduce((current, item)=> current + (item.price * item.quantity), 0);
      setTotalAmount(amount);
    }catch(err){
        console.log(err.message);
    };
  }
  useEffect(()=>{
    if(authCtx.isLoggedIn){
      fetching();
    }
  }, [authCtx.isLoggedIn]);

  
  const addItemHandler = async(item) => {
    const mail = authCtx.email.replace(/[@.]/g, "");
    const url = `https://crudcrud.com/api/f0a819afb86945baa04f4c72e4af1b25/cart${mail}`;
    try{
      const existingItem = cartItems.find((ele)=>ele.id === item.id);
      if(existingItem){
          const myData = {
            id: existingItem.id,
            title: existingItem.title,
            price: existingItem.price,
            imageUrl: existingItem.imageUrl,
            quantity: existingItem.quantity + 1
          }
          //using axios
          // let response = await axios.put(`${url}/${existingItem._id}`, myData);
          // console.log(response.data);
          // setCartItems((prev)=> prev.map((i)=>i.id === existingItem.id ? {...i, quantity: i.quantity+1} : i));
          
          //using fetch api
          const res = await fetch(`${url}/${existingItem._id}`, {
            method: 'PUT',
            body: JSON.stringify(myData),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          if(!res.ok){
            throw new Error("Something went wrong while updating!");
          }
          setCartItems((prev)=> prev.map((i)=>i.id === existingItem.id ? {...i, quantity: i.quantity+1} : i));
        }
      else{
          //using axios
          // let response = await axios.post(url, item); 
          // console.log(response);
          // if(!response.data){
          //   throw new Error("Something went wrong while adding!");
          // }
          // setCartItems((prev)=>{
          //   return [...prev, {...item, _id: response.data._id}];
          // })

          //using fetch api
          const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          
          if(!res.ok){
            throw new Error("Something went wrong while adding!");
          }
          const data = await res.json();
          setCartItems((prevItem)=>{
            return [...prevItem, {...data, _id: data._id}];
          })
      }
    }catch(error){
      console.log(error.message);
    }
    setTotalAmount((prevAmount)=>{
      return prevAmount + item.price;
    });
  };
  const removeItemHandler = async(id) => {
    const mail = authCtx.email.replace(/[@.]/g, "");
    const url = `https://crudcrud.com/api/f0a819afb86945baa04f4c72e4af1b25/cart${mail}`;
    const existingCartItem = cartItems.find((item)=> item.id === id);
    if(!existingCartItem){
      return;
    }
    try{
      //using axios
      // let response = await axios.delete(`${url}/${existingCartItem._id}`);
      // if(!response){
      //   throw new Error("Something went wrong while deleting!");
      // }

      //using fetch api
      if(existingCartItem.quantity === 1){
        const res = await fetch(`${url}/${existingCartItem._id}`, {
          method: 'DELETE'
        })
        if(!res.ok){
          throw new Error("Something went wrong while deleting!");
        }
        setCartItems((prevItem)=>prevItem.filter((item) => item.id !== id));
      }else{
        const myData = {
          id: existingCartItem.id,
          title: existingCartItem.title,
          price: existingCartItem.price,
          imageUrl: existingCartItem.imageUrl,
          quantity: existingCartItem.quantity - 1
        }
        const res = await fetch(`${url}/${existingCartItem._id}`, {
          method: 'PUT',
          body: JSON.stringify(myData),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if(!res.ok){
          throw new Error("Something went wrong while deleting!");
        }
        setCartItems((prevItem)=>{
          return prevItem.map((item)=>item.id === existingCartItem.id ? {...item, quantity: item.quantity-1} : item);
        });
      }
      
    }catch(error){
      console.log(error.message);
    }
    setTotalAmount((prevAmount)=>{
      return prevAmount - existingCartItem.price;
    });
    
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
