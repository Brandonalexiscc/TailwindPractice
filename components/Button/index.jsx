
export default function Button ({children, color, onClick}) {
    return(
        <button onClick={onClick}  className='bg-gradient-to-r from-blue-ribbon to-blue-900  rounded px-4 py-2 shadow-md focus:ring hover:bg-white text-white
            active:transform active:translate-y-1'>
            {children}
        </button>
    )
}