import React from "react";
import Drawer from "rc-drawer";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const CartDrawer = ({ open, close }) => {
  const { items } = useCart();

  return (
    <div className="">
      <Drawer
        open={open}
        onClose={close}
        parent={null}
        level={null}
        placement={"right"}
      >
       <h3>Your Selected Product</h3>
        <ul >
          {items.map((item, i) => (
            <li key={i + 1}>{item.title} X { item.quantity}</li>
          ))}
        </ul>
        <Link className="btn btn-dark" to={'/checkout'} >Checkout</Link>
      </Drawer>
    </div>
  );
};

export default CartDrawer;
