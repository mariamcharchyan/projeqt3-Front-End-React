import { useParams } from 'react-router-dom';
import { useState } from 'react';
import BoxToysData from './BoxsToysData';




export default function MainBoxToysCard(){
    //URL-i hamar
    const {id} = useParams();
    const toy=BoxToysData.find((picture) => picture.id === +id)
    //+,-
    const [productQuantity, setProductQuantity] = useState(1);
        const handleIncrement = () => {
            setProductQuantity(productQuantity + 1);
        };
        const handleDecrement = () => {
            setProductQuantity(productQuantity - 1);
            if (productQuantity<=1){
                setProductQuantity(1);
            }
        };
    
    // zambyuxi hamr
    const [totalQuantity, setTotalQuantity] = useState(0);
    const handleButtonClick = () => {
      setTotalQuantity(totalQuantity + productQuantity);
    };
    // console.log(totalQuantity);
    // console.log(productQuantity);
    
    return(
        <div key={id} className='box-toy-cards'>
            <div className='box-toy-card-columns'>
                <div className='box-toy-card-column-1'>
                    <img src={toy.img}/>
                </div>
                <div className='box-toy-card-column-2'>   
                    <h4>{toy.name}</h4>
                    <h3>Description</h3>
                    <hr/>
                    <p>{toy.description}</p>
                    <p className = "price">$ {productQuantity*toy.price} USD</p>
                    <div className='productQuantity'>
                        <button onClick={handleDecrement}>-</button>
                        <input type="number" value={productQuantity}  />
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    
                        <button className='button' onClick={handleButtonClick}>Add To Card</button>
                        <p>Card` {totalQuantity}</p>
                </div>
            </div>   
        </div>
    )
    
}