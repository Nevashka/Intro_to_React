import React, {useState} from 'react'

const Liked = () => {

  const[liked, setLike] = useState(false);
  const[buttonText, setButtonText] = useState('Like')

  const handleLiked = e => {
    e.stopPropagation()
    setLike(!liked)
    setButtonText(liked? 'Like' : 'Liked')
    
  }

  return (
    <button onClick={handleLiked} style={{backgroundColor: liked? "blue" : "gray"}}>{buttonText}</button>
  )

}

export default Liked
