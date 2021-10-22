import "./_videoDetailsBlock.scss";
import videoTrailer from '../../assets/video_trailer.mp4';

export default function VideoDetailsBlock() {
  return (
    <div className="videoDetailsBlock">
      <div className="row video-container">
      <video width="500" height="300" autoPlay loop >
        <source src={videoTrailer} type="video/mp4" />
      </video>
      </div>
      <div className="row details-pay">
        <div className="col-1-of-2">
          <div className="other-pay">
            <h4> Otros Medios de pago:</h4>
            <span>* Enviar captura de tu voucher de pago al 924764040</span>
          </div>
        </div>
        <div className="col-1-of-2">
          <ul className="list-pay">
            <li> BCP: 191-04776457-0-02</li>
            <li> BBVA: 0011-0814-0216991503-16</li>
            <li> INTERBANK: 4393132895756</li>
            <li> YAPE: 924764040 </li>
            <li> PLIN: 924764040</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
