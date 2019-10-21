import React from 'react'

class MovieRow extends React.Component { 
  viewMovie() { 
    // console.log("Trying to view movie")
    // console.log(this.props.movie.title)
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

    render(){ 
        return(<table key = {this.props.movie.id}>
        <tbody>
          <tr>
            <td style = {{
              paddingLeft: 20,
              paddingTop: 20,

            }}> 
              <img style = {{
                borderRadius: '25px',
                display: 'block',
              
              }} alt="poster" width ="120"  src ={this.props.movie.poster_src}/>
            </td>
          {/* Thẻ TD dùng để chia cột dọc  */}
            <td style = {{
              paddingLeft: 10,
              paddingTop: 0,
            }}>  
              <h2>{this.props.movie.title}</h2>
              <p style = {{
                display: 'block',
                marginBlockStart: '-1em',
                fontWeight: '500',
              
               
              }}>{this.props.movie.overview}</p>

              <input style = {{
                fontSize: '15px',
                fontWeight: 'bold',
                textAlign: 'center',
                border: '1px solid green',
                borderRadius: '10px',
                paddingLeft: '5px',
                padding: '5px 10px'
                

              }}type="button" onClick={this.viewMovie.bind(this)} value="View"></input>
            </td>

          </tr>
        </tbody>
      </table>
        )
    }
}

export default MovieRow