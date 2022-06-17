import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Title = ({ title }) => {
  const { id, name, poster_path, vote_average, overview } = title;
  return (
    <div className="movie">
      <Link to={`/details/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="Movie poster"
        />
        <div className="overlay">
          <div className="title">{name}</div>
          <div className="rating">{vote_average}/10</div>
          <div className="plot">{overview}</div>
        </div>
      </Link>
      <div data-toggled="true" className="listToggle">
        <div>
          <FontAwesomeIcon icon={faPlus} className="fa fa-fw fa-plus" />
          <FontAwesomeIcon icon={faCheck} className="fa fa-fw fa-check" />
        </div>
      </div>
    </div>
  );
};

export default Title;
