import { Link } from "react-router-dom";
import './_buttonComponent.scss';

function buttonComponent(props){
    return (
        <div className="buttonComponent">
            <span to={props.link} target="_blank"> {props.text} </span>
        </div>
    );
}

export default buttonComponent