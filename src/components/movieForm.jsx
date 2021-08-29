import { getMovie, saveMovie } from '../services/fakeMovieService';

import Form from './common/form';
import Joi from 'joi-browser';
import { getGenres } from '../services/fakeGenreService';

class MovieForm extends Form {
  state = {
    data: {
      title: '',
      genreId: '',
      numberInStock: '',
      dailyRentalRate: '',
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label('Title'),
    genreId: Joi.string().required().label('Genre'),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label('Number In Stock'),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label('Daily Rental Rate'),
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === 'new') return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace('/not-found');

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit() {
    saveMovie(this.state.data);
    this.props.history.push('/movies');
  }

  render() {
    const { genres } = this.state;
    return (
      <div>
        <h2>Movie Form</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title')}
          {this.renderSelect('genreId', 'Genre', genres)}
          {this.renderInput('numberInStock', 'Number In Stock', 'number')}
          {this.renderInput('dailyRentalRate', 'Daily Rental Rate')}
          <div className='col col-sm-2'>{this.renderButton('Save')}</div>
        </form>
      </div>
    );
  }
}

export default MovieForm;
