import React, { useState, useEffect } from 'react'
import { getRandomGif } from '../../services/gif.service';

export const GifPresenter = () => {
  // const gif = 'https://giphy.com/gifs/l2FeD4WhSZhOQEw6Is';
  const [gif, setGif] = useState('');
  console.log("GifPresenter -> gif", gif)
  const [disabledBtn, setDisabledBtn] = useState({
    left: false,
    right: false
  });

  useEffect( () => {

    getRandomGif().then( gif => {
      setGif(gif)
    })

  }, [])

  const handlePrev = async () => {
    console.log('antes')
    setDisabledBtn( disabled => {
    console.log("handlePrev -> disabled", disabled)
      return {
        ...disabled,
        left: true
      }
    });

    console.log('2', disabledBtn);
    const gif = await getRandomGif()
    console.log("handlePrev -> gif", gif)
    setGif(gif)

    setDisabledBtn( disabled => {
      return {
        ...disabled,
        left: false
      }
    }); 
  }

  const handleNext = async () => {
    // console.log(getRandomGif())
    
    setDisabledBtn( disabled => {
      return {
        ...disabled,
        right: true
      }
    }); 
    const gif = await getRandomGif()
    console.log("handleNext -> gif", gif)
    setGif(gif)
    
    setDisabledBtn( disabled => {
      return {
        ...disabled,
        right: false
      }
    }); 
  }

  return (
    <div>
        <button onClick={ handlePrev } disabled={ disabledBtn.left }>prev</button>
        <img src={ gif } />
        <button onClick={ handleNext } disabled={ disabledBtn.right }>next</button>
    </div>
  )
}
