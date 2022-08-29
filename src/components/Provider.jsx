import placeholder from '../assets/image-not-available.jpg';
import {Link} from "react-router-dom";
import style from "../Provider.module.css"

const Provider = ({provider}) => {
    const image = provider.logo_path ? `https://image.tmdb.org/t/p/w500/${provider.logo_path}` : placeholder
    return (
        <Link to={`/providers?id=${provider.provider_id}`} className={style.providerListItem}>
            <img src={image} alt={provider.provider_name} className={style.providerListItemImage}/>
        </Link>
    );
}

export default Provider;