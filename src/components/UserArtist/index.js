import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserArtist = () => {

  const [userArtist, setUserArtist] = useState('');

  useEffect(() => {
    async function findArtist() {
      try {
          let opts = {header: {'Accept': 'application.json'}}
          let {data} = await axios.get()
      } catch (err) {
        
      }
    }
  })
  
  

  
  return (
    <>

    </>
  )
}

export default UserArtist
