import { useState } from 'react';
import Notification from '../Notification';
import Button from '.';

export default function DarkMode (){
    const [darkMode, setDarkMode] = useState(false)
      
    const handleClick =  () => {
      /* `document.documentElement.classList.toggle('dark')` is toggling the 'dark' class on the root element
      of the document. This is used to switch between dark mode and light mode by adding or removing the
      'dark' class from the HTML element. */
          document.documentElement.classList.toggle('dark')
          setDarkMode(!darkMode)
        }
            const text = darkMode 
            ? 'Dark Mode'
            : 'Light Mode'
      
        return (   
          <>
          <Notification> 
          </Notification>
          <Button onClick={handleClick} color='primary'>{text}</Button>
          </>
          
          
      )
}