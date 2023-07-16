import "./ProductCard.css";
import {add, remove} from '../store/cartSlice';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cartState.cartList);
  const [isPresent, setIsPresent] = useState(false);
  const {id, name, price, image} = product;
  useEffect(() => {
    const isProductPresent = cartList.find((item) => item.id === id);
    isProductPresent ? setIsPresent(true) : setIsPresent(false);
  }, [cartList, id]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isPresent ? (<button className="remove" onClick={() => dispatch(remove(product))}>Remove</button> ) : (<button onClick={() => dispatch(add(product))}>Add To Cart</button>)}
      </div>
    </div>
  )
}
