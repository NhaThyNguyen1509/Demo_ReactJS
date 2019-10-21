import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery'

class App extends Component {
   constructor(props) { 
    super(props) 
    this.state = {
       
    }
    // console.log("This is my initializer")


    // const movies = [
    //   {id: 0, poster_src: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
    //    title: "Avenger: Infintly War", overview: "This is my first overview"},
    //   {id: 1, poster_src: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", 
    //   title: "The Avenger", overview: "This is my second overview"},
    // ]

    // var movieRows = []
    // movies.forEach((movie) => { 
    //   console.log(movie.title)
    //   const movieRow = <MovieRow movie = {movie}/>
    //   movieRows.push(movieRow)
    // })

    // this.state = {rows: movieRows}

    this.preformSearch("captain marvel")
  }

  preformSearch(searchTerm) { 
    console.log("Perform search using movieDB ")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=bda6e109b8ed2672e9a33c5cb6330f77&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => { 
        console.log("Fetched data successfully")
        // console.log(searchResults)
        const results = searchResults.results
        // console.log(results[0])

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w500" + movie.poster_path
          // console.log(movie.poster_path)
          console.log(movie.title)
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => { 
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) { 
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.preformSearch(searchTerm)
  }

  render() { 
  return (
    <div className="App">

      <table className = "titleBar">
        <tbody>
          <tr>

            <td>
              <img width = "70" src = "logo_movie.png"></img>
            </td>

            <td width = "8"></td>
        
            <td>
              <h1>MovieDB Search</h1>
            </td>

          </tr>
        </tbody>
      </table>
      
      <input style = {{
        fontSize: 24,
        display: 'block',
        width: "99%",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16
        
      }} onChange={this.searchChangeHandler.bind(this)} placeholder = "Enter search term"/>

      {this.state.rows}


    </div>
  );
}
}


export default App;
