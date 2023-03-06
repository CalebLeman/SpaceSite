import BootstrapCarousel from "../Carousels/Bootstrap";
import Logo from "../public/logo.png"
import Image from "next/image"
import Head from "next/head"
import menuBar from "../public/icons8-menu.svg"
import * as pack from '../package.json';
import Nav from "../components/Nav"

export default function App() {
  return (
    <main>
      <Head>
        <title>Links</title>
      </Head>
      
      <Nav />

      <div className="p">
        <h1 className="h">Links Used</h1>
        <div>
          <a className="linksUsed" href='thispersondoesnotexist.com'>Staff Images</a>
          <a className="linksUsed" href='printiful.com'>Logo</a>

          <a className="linksUsed" href='rawpixel.com'>Spacecraft.jpg</a>
          <a className="linksUsed" href='hippopx.com'>launch.jpg</a>
          <a className="linksUsed" href='https://www.youtube.com/watch?v=R8GS-8nlekY'>Live Counter Tutorial</a>
          <a className="linksUsed" href='https://countapi.xyz'>Counter API</a>
          <a className="linksUsed" href='https://openclipart.org'>space-shuttle-discovery.jpg</a>
          <a className="linksUsed" href='https://www.youtube.com/watch?v=SIzi9z8mrTk'>Nav-Bar Tutorial</a>
          <a target="_blank" className='linksUsed' href="https://icons8.com/icon/71200/close">Close</a> icon by <a target="_blank" className='linksUsed' href="https://icons8.com">Icons8</a>
          <a target="_blank" className='linksUsed' href="https://icons8.com/icon/MmupZtPbnw66/menu">Menu</a> icon by <a target="_blank" className='linksUsed' href="https://icons8.com">Icons8</a>
        </div>
        <h3> TSA Docs</h3>
                  <a className="linksUsed" href='https://drive.google.com/file/d/1CNDTdAMfYU3hkVvNTIEgZQnDn-y3rm8P/view?usp=share_link'>Copyright Checklist</a>
          <a className ="linksUsed" href='https://drive.google.com/file/d/16aDKClYvl07FDwB0ojGBjclNTe44RvJf/view?usp=share_link'>Plan of Work</a>
          
      </div>
      
      <div className="linktalk">Thank you to all of the refrences used while making this project! Any images used are copyright free and are usable to the public. Any youtube links were helpful tutorials explaining some stuff that we added onto the page. The Counter API was used for the "People Sent to Space" section on the about page. </div>
      <div><pre>
        {JSON.stringify(pack)}
      </pre></div>

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