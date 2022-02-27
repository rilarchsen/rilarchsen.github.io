import Head from 'next/head'
import '../styles.css'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-richard-bg">
      <Head>
        <title>Richard Avenia</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />  
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" /> 
        
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet"></link>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center font-montserrat">
        
        <div className="conatainer mx-auto bg-gray-800 bg-opacity-40 p-16 rounded-3xl">
          <h1 className="text-6xl text-white font-thin">
            retard autism
          </h1>
          <p className="mt-3 text-white text-2xl">
            an upcoming developer
          </p>
        </div>

      </main>

      <footer className="flex items-center justify-center w-full h-24">
        <p className="text-white font-normal">
          Copyright © {new Date().getFullYear()} Developed by Richard avenia
          </p>
      </footer>
    </div>
  )
}
