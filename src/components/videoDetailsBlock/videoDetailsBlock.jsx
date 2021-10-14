import "./_videoDetailsBlock.scss";

export default function VideoDetailsBlock() {
  return (
    <div className="videoDetailsBlock">
      <div className="row video-container">
       
            <img src="https://via.placeholder.com/500x300" alt="" />
     
      </div>
      <div className="row details-pay">
        <div className="col-1-of-2">
          <div className="other-pay">
            <h4> Otros Medios de pago:</h4>
            <span> Item 2 weasa s as as as sasasas</span>
          </div>
        </div>
        <div className="col-1-of-2">
          <ul className="list-pay">
            <li> BCP: 23232323232323</li>
            <li> BBVA: 23232323232323</li>
            <li> INTERBANK: 23232323232323</li>
            <li> YAPE: 987654321</li>
            <li> PLIN: 987654321</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
