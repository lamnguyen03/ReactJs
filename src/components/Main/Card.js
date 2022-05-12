import './Card.css';
function Card(props){
     return (
       <>
         <div>
           <img src={props.linkimg} alt="" />
           <div className='descrips'>
             <h3>{props.namepro} </h3>
             <p>{props.price} </p>
           </div>
           <button >Add to cart </button>
         </div>
       </>
     );
}

export default Card;