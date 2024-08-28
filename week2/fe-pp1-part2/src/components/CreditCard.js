import masterImg from '../images/master.png';
import visaImg from '../images/visa.png';
import './CreditCard.css';

function CreditCard(props) {
  
  return (
    <div className='credit-card' style={{backgroundColor: props.bgColor}}>
      <img 
        className="card-logo" 
        src={props.type === "Visa" ? visaImg : masterImg} 
        alt="Card type logo"
      />
      <div className='card-data' style={{color: props.color}}>
        <p className='card-number'>•••• •••• •••• {props.number.slice(-4)}</p>
        <span>Expires {props.expirationMonth}/{props.expirationYear.toString().slice(-2)}    {props.bank}</span><br />
        <span>{props.owner}</span>
      </div>
    </div>
  )
}

export default CreditCard