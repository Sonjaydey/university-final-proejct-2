import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useCart } from "react-use-cart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { selectUser } from "../../../features/userSlice";

const ServiceDetails = ({service}) => {

  const [isAdmin, setIsAdmin] = useState(false);
  const user = useSelector(selectUser);
  const { addItem, items, totalItems } = useCart();
console.log(totalItems, items );
  useEffect(() => {
    let unmounted = false;
    const getAdmin = async () => {
      const res = await fetch("https://frozen-depths-33463.herokuapp.com/isAdmin");
      const data = await res.json();
      if (!unmounted) {
        const result = data.find((admin) => admin.email === user?.email);
        if (result) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      }
    };
    getAdmin();
    return () => {
      unmounted = true;
    };
  }, [user?.email]);

  const handleAlert = () => {
    swal({
      title:
        "Admin can't order any service, for order service login with user Account",
      icon: "error",
    });
  };


  
  const genarateCartItem = (p) => {
    // console.log(typeof p);
    const item = {
      ...p,
      id : p._id
    }

    addItem(item);
  }

  return (
    <div className="col-md-4">
      <div className="card card-transform p-4 my-2">
        <div className="service-image text-center pb-3">
          <img src={service.imageURL} alt="service" className="img-fluid" />
        </div>
        <div className="service-title">
          <h4 className="py-2">{service.title}</h4>
          <h4 className="py-2">{service.price} TK</h4>
          <p>{service.info}</p>
        </div>
        {isAdmin ? (
          <Link to={`/`}>
            <button
              onClick={handleAlert}
              className="btn button-white text-primary w-100"
            >
              SELECT PRODUCT
            </button>
          </Link>
        ) : (
          <button onClick={() => genarateCartItem(service)} className="btn button-white text-primary w-100">
            SELECT PRODUCT
          </button>

        
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;

{/* <Link to={`/checkout/${_id}`}>
<button className="btn button-white text-primary w-100">
  SELECT SERVICE
</button>
</Link> */}