
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import Payment from '../Payment/Payment';
import './../CheckOut.css';

const CheckOut = () => {


  return (
    <div className="checkout-section">
      <Navigation />
      <div className="container">
        <div className="row">

          <div className="col-md-6 offset-md-1">
            <h3 className="text-center py-3">
              Payment Now
            </h3>
           <div className='paymentMethod'>
           <li><Link to="/bikas">bkash</Link> </li> 
           <li><Link to="/strip">stripe</Link></li>
           </div>

            {/* <div className="card p-4">
              <Payment />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
