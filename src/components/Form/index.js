import React, {useState} from 'react'

//Criar form que busca a Data do web site?

const Form = () => {

  const[nameInput, setNameInput] = useState('')
  const[username, setUsername] = useState('')
  const[artistInput, setArtistInput] = useState('')
  const[userArtist, setUserArtist] = useState('')

    
    const handleFormSubmit = (e) => {
      e.preventDefault()
      setUsername(nameInput)
      setUserArtist(artistInput)
    }
    
    const handleInputUser = (e) => {
      setNameInput(e.target.value)
    }

    const handleInputArtist = (e) => {
      setArtistInput(e.target.value)
    }

  return (
    <>
      <h3>Hello {username? username : 'friend'}! {userArtist? `Your favourite artist is ${userArtist}!` : 'Who is your favourite artist?'} </h3>
    
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Name </label>
          <input 
            type="text" 
            name="username" 
            id="username"
            placeholder='Type your name'
            value={nameInput}
            onChange={handleInputUser}
            />
        <label htmlFor="userArtist">Favourite Artist</label>
          <input 
            type="text" 
            name="userArtist" id="userArtist"
            placeholder='Type your artist'
            value={artistInput}
            onChange={handleInputArtist}
        />
        <input type="submit" value= 'Update' />
      </form>
    </>  
  )
}

export default Form
