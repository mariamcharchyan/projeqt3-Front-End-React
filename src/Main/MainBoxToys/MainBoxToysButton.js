function MainBoxToysButton({ handleClick }) {
    return (
      <button className='kochak' onClick={handleClick}>Add</button>
    );
  }
  
  export default MainBoxToysButton;


// import { useState } from 'react';

// export default function MainBoxToysButton(props) {
//   const [p, setP] = useState(0);

//   const handleRefund = () => {
//     // refund logic goes here
//     setP(0);
//   };

//   const handleClick = () => {
//     setP(p + 1);
//   };

//   return (
//     <div>
//       <button className='plus' onClick={handleClick}>
//         Add
//       </button>
//       <button className='minus' onClick={handleRefund}>
//         Refund
//       </button>
//       <p>{p}</p>
//     </div>
//   );
// }

     







// import { useState } from 'react';

// export default function MainBoxToysButton() {
//   const [p, setP] = useState(0);

//   const handleClick = () => {
//     setP(p + 1);
//   };

//   return (
//     <div>
//       <button className='kochak' onClick={handleClick}>
//         Add
//       </button>
//       <p>{p}</p>
//     </div>
//   );
// }

