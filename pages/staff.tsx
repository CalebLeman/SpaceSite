import joe from "../public/Joe.jpg"
import joseph from "../public/Joseph.jpg"
import natalie from "../public/Natalie.jpg"
import morona from "../public/Morona.jpg"
import matt from "../public/Matt.jpg"
import alexandria from "../public/Alexandria.jpg"
import Image from "next/image"
import Head from "next/head"
import Nav from "../components/Nav"

export default function App() {
  return (
    <main className="staff">
      <Head>
        <title>Our Staff</title>
      </Head>

      <Nav />

      <div className="h">
        <h1>Meet Our Wonderful Staff!</h1>
      </div>

      <div>
        <div className="flex">
          <div className="card">
            <Image src={joe} width={200} height={200} />
            <div className="container">
              <h4><b>Joe Smith</b></h4>
              <p>CEO</p>
            </div>
          </div>

          <div className="card">
            <Image src={joseph} width={200} height={200} />
            <div className="container">
              <h4><b>Joseph Ferguson</b></h4>
              <p>Executive Assistant</p>
            </div>
          </div>

          <div className="card">
            <Image src={natalie} width={200} height={200} />
            <div className="container">
              <h4><b>Natalie Klein</b></h4>
              <p>Travel Manager</p>
            </div>
          </div>

          <div className="card">
            <Image src={morona} width={200} height={200} />
            <div className="container">
              <h4><b>Morona Beckett</b></h4>
              <p>Sales Manager</p>
            </div>
          </div>

          <div className="card">
            <Image src={matt} width={200} height={200} />
            <div className="container">
              <h4><b>Matt Ross</b></h4>
              <p>Tour Coordinator</p>
            </div>
          </div>

          <div className="card">
            <Image src={alexandria} width={200} height={200} />
            <div className="container">
              <h4><b>Alexandira Holmes</b></h4>
              <p>Event Opperations Manager</p>
            </div>
          </div>
        </div>
      </div>

      <p className='p'>
        Since 2019, our staff have been dedicated to making your experience the best in the galaxy. Each of our staff members are some of the most experienced and skilled professionals in the field. Your adventure is safe with them.
      </p>

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