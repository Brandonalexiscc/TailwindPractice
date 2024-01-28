
import Bubble from "../Icons/Bubble"
//Bubble es el componente que creamos en el archivo de Bubble.jsx para la imagen 
export default function Notification () {
    return(
        <div className="flex max-w-sm my-0 mx-auto p-6 rounded-lg 
        bg-white shadow-xl mb-5">
          <div className="flex-shrink-0 items-center">
            <picture className='w-12 h-12'>
            <Bubble/>  
            </picture>
          </div>
            <div className="ml-6 pt-1">
              <h4 className="text-black ">ChitChat</h4>
              <p className="text-black">You have a new message!</p>
            </div>
        </div>
    )
}