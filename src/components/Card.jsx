import './Card.css'
import { Link } from 'react-router-dom';

function Card({title, description, path}){
    return(
        <div className="Card">
            <Link to={path}>
             <h2>{title}</h2>
            </Link>
            <p>{description}</p>
        </div>
    );
}

export default Card;