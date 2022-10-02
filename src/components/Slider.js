import React,{useState,useContext} from "react";
import Mycontext from "../context/mycontext";
import './Slider.css'
import stars from './stars.png';

function Slider()
{
    const a= useContext(Mycontext);
    const demoArray= [];
    const [productData,setProductData]= useState([]);
    const [stopInfiniteloop,setStopInfiniteloop] = useState(false);
    
    function changeNumber(){
        a.setState(a.state+1);
        console.log(a.state);
    }

    if(!stopInfiniteloop)
    {
        
        fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
        .then(response=>response.json())
        .then(data=>{
                        console.log(data);
                        for(const dataItem in data)
                        {
                            demoArray.push({
                                            id : data[dataItem].id,
                                            newPrice : data[dataItem].newPrice,
                                            oldPrice : data[dataItem].oldPrice,
                                            productImage : data[dataItem].productImage,
                                            productName : data[dataItem].productName
                                            })
                        }
                            setProductData(demoArray);                    
                    });
        setStopInfiniteloop(true);
    }

    return(
        <div>
    <h3 className="slider-h3">Products</h3>
    
    <div class="og-og-div">
    <button onClick={changeNumber}>ADD TO CART</button>
    <div class="og-div">
        {
            productData && (
                                productData.map(item=>{
                                                        return(
                                                            <div class="loop-div">
                                                                <p>{item.id}</p>
                                                                <p>{item.newPrice}</p>
                                                                <p>{item.oldPrice}</p>
                                                                <p>{item.productImage}</p>
                                                                <p>{item.productName}</p>
                                                            </div>
                                                            
                                                        )
                                                        })
                            )
        }
        
        {/* <div className="Group-5">
            <div className="Group-4">
                <div className="Group-3">
                    <button className="Rectangle-3">
                        <h3 className="button-h3">ADD TO CART</h3>
                    </button>
                </div>
                <div className="Group-2">
                    <img src={stars} className="Group-1" alt='image'/>
                    <p className="p1">47999/-</p>
                    <p className="p2">59999/-</p>
                    <p className="p3">Apple iPhone 13 (128GB) - Blue</p>
                </div>
                <img src="" className="Rectangle-2" alt='image'/>
            </div>
            <div className="Rectangle-1"></div>
        </div>*/}
    </div> 
    </div>
    </div>
    );
}
export default Slider;