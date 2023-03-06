import Head from 'next/head';
import Logo from "../public/logo.png";
import Image from "next/image";
import menuBar from "../public/icons8-menu.svg"
import Bootstrapservices from "../Carousels/Bootstrapservices";
import Nav from "../components/Nav"

export default function App() {
  return (
    <main className='services'>
    <Head>
      <title>Services</title>
    </Head>
      
      <Nav />
      
      <br></br>
      <div>
        <h1 className="h" id='announcment'>See Our Many Offers Below</h1>
      </div>
      <div>
      <p id='announcment' className="p">We are Currently Working on improving our Technologies check back later for available trips! </p>
      </div>
      <div id='carousel'>
    <Bootstrapservices/>
      </div>
      <div>
        <footer id='root' className='footer'>
          Social
          <hr></hr>
          <a href='https://www.twitter.com' target="_blank">Twitter</a>
          <a href='https://www.youtube.com' target="_blank">Youtube</a>
          <a href='https://www.instagram.com' target="_blank">Instagram</a>
          <a href='./links'>Sources</a>
          <hr></hr>
          Interspace © 0000
        </footer>
      </div>
    </main>
  )
}