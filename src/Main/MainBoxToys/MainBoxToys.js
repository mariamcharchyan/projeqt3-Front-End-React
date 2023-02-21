import { Link } from 'react-router-dom';
import BoxToysData from './BoxsToysData';

export default function MainBoxToys(){

    return(
        <>
        {BoxToysData.map((toy, index) => (
        <Link to = {`/shop/${toy.id}`} key={index} >
            <div className='box-toy'>
                <img src={toy.img}/>
                <h4>{toy.name}</h4>
                <p>$ {toy.price} USD</p>
            </div>
        </Link>
            
        ))}
        </>
    )
    
}