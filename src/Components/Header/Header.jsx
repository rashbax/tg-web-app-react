import {React} from 'react'
import Button from '../Button/Button'
import { useTelegram } from '../../Hooks/useTelegram'



export default function Header() {
const { onClose, user} = useTelegram()
    
    
  return (
    <div className='header'>
        <Button onClick={onClose}>Close</Button>
        <span className="username">{user}</span>
    </div>
  )
}
