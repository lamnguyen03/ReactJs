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
         </div>
       </>
     );
}
export default Card;