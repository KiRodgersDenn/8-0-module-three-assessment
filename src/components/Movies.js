import React from "react";
// import "./App.css";

class Movies extends React.Component {
    constructor(){
        super()

        this.state = {
            movies: [],
            selectedMovie: null,
        };
    }

    fetchMovies = () => {
      fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
          this.setState({
            movies: data,
          });
      });
    };

    componentDidMount = () => {
        this.fetchMovies();
    };

    handleDropdownChange = (event) => {
    //FINDING THE MOVIE/FILM WHOSE NAME MATCHES THE DROPDOWN VALUE USING .find()
    let currentMovieObject = this.state.movies.find((movie) => {
      return movie.title === event.target.value;
    });

    //SET THE EMPLOYEE OBJECT IN STATE
    this.setState({
      selectedMovie: currentMovieObject,
    });
  };

    render() {

        let dropDownOptions = this.state.movies.map((movie) => {
            return <option>{movie.title}</option>;
    });

    let moviesToDisplay = this.state.movies.map((movie) => {
      return (
          <div className="movie-card">
            <h3>Title: {movie.title}</h3>
            <h3>Release Date: {movie.released_date}</h3>
            <h3>Description: {movie.description}</h3>
          </div>
      );
    })

        return(
            <div className= "Movies">
                <h1>Select A Movie</h1>
                <select onChange={this.handleDropdownChange}>
                    <option></option>
                    <option>Select A Movie</option>
                    {dropDownOptions}
                </select>
                <h3>Title: {this.state.selectedMovie ? this.state.selectedMovie.title : null}</h3>
                <h3>Release Date: {this.state.selectedMovie ? this.state.selectedMovie.release_date : null}</h3>
                <h3>Description: {this.state.selectedMovie ? this.state.selectedMovie.description : null}</h3>
                
                    {/* {this.state.selectedMovie
                    ? this.state.selectedMovie?.title
                    : null}{" "}

                    {this.state.selectedMovie?.release_date}
                    {this.state.selectedMovie?.description} */}
            </div>
        );
    }
}

export default Movies