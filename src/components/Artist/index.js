import React, { useState } from "react";


const Artist = () => {
  
  const[artist, setArtist] = useState([
    {id:1, name: 'Maria Bethania', genre: 'MPB', age: 70, likes:0 },
    {id:2, name: 'Lady Gaga', genre: 'Pop', age: 36, likes: 0}
  ])

  const[likedArtist, setLikedArtist] = useState();

  const handleArtistLike = artistId => {
    const likedArtist = artist.find( id => artist.id === artistId)
    setLikedArtist(likedArtist)
  }
  

  const renderRows = () => {
    

    return artist.map(artist => 

      <tr key={artist.name}>
        <td>{artist.name}</td>
        <td>{artist.genre}</td>
        <td>{artist.age}</td>
        
      </tr>
    ) 
  }

// Look for ways to style your table!
// Look for css Grid

  return (

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>

  )
}

export default Artist
