import {React, useEffect} from 'react'
import Button from '../Button/Button'

const tg = window.Telegram.WebApp;
console.log(tg);

export default function Header() {
    useEffect(()=> {
        tg.ready()
      },[])

    const onClose = () => {
        tg.close()
    }
    
  return (
    <div className='header'>
        <Button onClick={onClose}>Close</Button>
        <span className="username">{tg.initDataUnsafe?.user?.username}</span>
    </div>
  )
}
