import './_synopsisBlock.scss'
import backgroundImg1 from '../../assets/mancha1.png';

export default function SynopsisBlock() {
  return (
    <div className="synopsisBlock">
        <div className="synopsis-text">
            <p>Una visita al cementerio se convertirá 
              en la peor pesadilla para un grupo de chicos,
              quienes deberán pelear por salir vivos 
              de una noche de pesadilla..</p>
        </div>
        <div className="synopsis-img">
        </div>
        <img  className="synopsis-img--background" alt='' />
    </div>
  );
}
