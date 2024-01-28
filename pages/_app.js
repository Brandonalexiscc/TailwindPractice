import '@/styles/globals.css'


/*Agregamos antes el "dark:" para decirle que eso es cuando se precione el botton y cambie el tema el azul más oscuro*/
export default function App({ Component, pageProps }) {
  return (
    <section className='bg-blue-300 dark:bg-slate-900 min-h-screen grid place-content-center transition-colors'>
      <Component {...pageProps} />
    </section>
)}
