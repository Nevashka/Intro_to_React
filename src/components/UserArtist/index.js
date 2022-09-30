import React, { useEffect, useState } from 'react'
import axios from 'axios';


const UserArtist = () => {

  const [userArtist, setUserArtist] = useState();

  const fetchData = async () => {
    try {

      const{data} = await axios.get(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay`)
      setUserArtist(data.artists[0])
      
    } catch (err) {
      console.warn(err)
      
    }
  }

  useEffect(() => {
      fetchData()
  }, [])

  


  return (
    <>
      <ul id='artist'>
        <li>{userArtist? userArtist.strArtist : 'Sorry, your artist is not in the database, try another one!s'}</li>
      </ul>
    </>
  )
}

export default UserArtist
