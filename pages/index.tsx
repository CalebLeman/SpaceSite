import BootstrapCarousel from "../Carousels/Bootstrap";
import Logo from "../public/logo.png"
import Image from "next/image"
import menuBar from "../public/icons8-menu.svg"
import Head from "next/head"
import Nav from "../components/Nav"

export default function App() {
  return (
    <main>
    <Head>
      <title>Interspace Home</title>
    </Head>
      <Nav />

      <BootstrapCarousel />

      <div className="b">
        <h1 className="h">The Next Leap</h1>
        <p className="p">Humans have always been explorers. We have spent thousands of years exploring and discovering our own planet. And because of the technology we have developed, we are able to explore past just our home planet. Prepare for the adventure of a generation, with Interspace.</p>
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