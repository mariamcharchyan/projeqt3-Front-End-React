import MainBoxToysButton from './MainBoxToysButton'

export default function MainBoxToys({ handleButtonClick }){
    const toys = [
        {img: './nkar/n1.jpg',name: "Developing cabin", price : "$ 50 USD"},
        {img: './nkar/n2.jpg',name: "Mini kitchen",price : "$ 100 USD"},
        {img: './nkar/n3.jpg',name: "Maze",price : "$ 20 USD"},
        {img: './nkar/n4.jpg',name: "Maze and logic box",price : "$ 40 USD"},
        {img: './nkar/n5.webp',name: "A rocket",price : "$ 30 USD"},
        {img: './nkar/n6.webp',name: "Excavator",price : "$ 30 USD"},
        {img: './nkar/n7.webp',name: "Mini kitchen",price : "$ 100 USD"}
    ];
  
    return(
        <>
        {toys.map((picture, index) => (
            <div key={index} className='box-toys'>
                <img src={picture.img}/>
                <h4>{picture.name}</h4>
                <p>{picture.price}</p>
                <MainBoxToysButton handleClick={handleButtonClick} />
                <div className='number'></div>
            </div>
        ))}
        </>
    )
    
}