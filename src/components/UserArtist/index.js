import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserArtist = () => {

  const [userArtist, setUserArtist] = useState([]);

  const fetchData = async () => {
    
    const{data} = await axios.get('https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay')
    setUserArtist(data.artists[0])
  }

  useEffect(() => {
      fetchData()
  }, [])

  console.log(userArtist)
  


  return (
    <>
      <ul id='artist'>
        <li>{userArtist.strArtist}</li>
      </ul>
    </>
  )
}

export default UserArtist
