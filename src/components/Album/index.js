import React, {useState} from "react";
import Liked from '../Liked/index';

const Album = () => {

  const [album , setAlbum] = useState([
    {id: 1, name: 'As cancoes que voce fez pra mim', release: 1993, artist: 'Maria Bethania', artist_id:1, img:'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f2/As_can%C3%A7%C3%B5es_que_voc%C3%AA_fez_para_mim.jpg/330px-As_can%C3%A7%C3%B5es_que_voc%C3%AA_fez_para_mim.jpg', alt: 'As Cancoes que Voce fez pra mim, CD cover'},
    {id: 2, name: 'Maricotinha - Ao Vivo', release: 2003, artist: 'Maria Bethania', artist_id:1, img:'https://i.discogs.com/oHyzfAG2bH4CWvrw2jR359J3rk3Dcup-J0ZBETjX_o0/rs:fit/g:sm/q:90/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU0MjIz/MjgtMTM5Mjk2NDE5/Mi04Mzc5LmpwZWc.jpeg', alt:'Maricotinha, CD cover'},
    {id: 3, name: 'Born This Way', release: 2011, artist: 'Lady Gaga', artist_id:2,img:'https://upload.wikimedia.org/wikipedia/en/c/c3/Born_This_Way_album_cover.png', alt:'Born this Way, CD cover'},
    {id:4, name: 'Joanne', release: 2016, artist: 'Lady Gaga', artist_id:2,img:'https://upload.wikimedia.org/wikipedia/en/f/fd/Lady_Gaga_-_Joanne_%28Official_Album_Cover%29.png', alt:'Joanne, CD cover'}
  ])
  
  const renderRows = () => {
    return album.map(album => 
    <tr key={album.id}>
      <td>{album.name}</td>
      <td><img className='photo' src={album.img} alt={album.alt}/></td>
      <td>{album.release}</td>
      <td>{album.artist}</td>
      <td><Liked/></td>
    </tr>
    )
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Album</th>
          <th>Release</th>
          <th>Artist</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )

}

export default Album;
