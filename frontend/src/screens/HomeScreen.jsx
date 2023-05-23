import React, { useEffect} from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';


const HomeScreen = () => {
const dispatch=useDispatch();
const productList=useSelector(state=>state.productList);
const {loading,error,products}=productList;
  useEffect(()=>{
    dispatch(listProducts());
  },[dispatch]);
    return (
      <div>
        {
        loading ? 
        (<LoadingBox />) : error ?
       ( <MessageBox variant="danger">{error}</MessageBox>) :
       ( <div className="row center" >
          {
           products.map((product)=>{                     /*or  data.products.map((product)=>( without return statement structure the code)) */
            return <Product product={product} key={product._id}/>
            })
          }
        </div>
        )
        }
      </div>        
    );
};

export default HomeScreen;