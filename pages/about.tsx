import Head from "next/head"
import { useEffect } from "react"
import menuBar from "../public/icons8-menu.svg"
import Logo from "../public/logo.png";
import Image from "next/image";
import Nav from "../components/Nav"

export default function App() {
  useEffect(() => {
    let valueDisplay = document.querySelectorAll(".num");
    let valueDisplay2 = document.querySelectorAll(".num2");
    let valueDisplay3 = document.querySelectorAll(".num3");
    let interval = 1;
    const countEl = document.getElementById('not');
    let updateTwo = 0;
    let updateThree = 0;
    let allNum = 0;
    let duration = Math.floor(interval / 100);

    updateVisitCount();

    function updateVisitCount(){
        fetch('https://api.countapi.xyz/update/spaceSite/space/?amount=1')
          .then(res => res.json())
          .then(res => {
            if (countEl) countEl.innerHTML = res.value ;
            valueDisplay.forEach((valueDisplay) => {
              let startValue = 0;
              
            
              
              let counter = setInterval(function () {
                startValue += 1;
                allNum += 1;
                
                if(startValue > 9){
                  startValue = 0;
                  updateTwo += 1;
                }
                if(allNum == res.value){
                  clearInterval(counter);
                }
                valueDisplay.textContent = startValue.toString();
              
                
              }, duration);
             

              
            });
            
            valueDisplay2.forEach((valueDisplay2) => {
             
              
            
              
              let counter = setInterval(function () {
              
              if(updateTwo > 9){
                updateTwo = 0;
                updateThree += 1;
              }
              valueDisplay2.textContent = updateTwo.toString();  
              if(allNum == res.value){
                  clearInterval(counter);
                }  
              
               
              
            
              
            }, duration);
           
            });
            
            valueDisplay3.forEach((valueDisplay3) => {
              
              
            
              
              let counter = setInterval(function () {
              valueDisplay3.textContent = updateThree.toString();
              if(updateThree > 10){
                updateThree = 0;
                
              }
              if(allNum == res.value){
                  clearInterval(counter);
                }  
              
            
              
            }, duration);
           

            
            });
          });
    
}
   

  }, [])

  
  return (
    <main className="staff">
    <Head>
    <title>About</title>
    </Head>
      
      <Nav />

      <div className="h">
        <h1>About Us</h1>
        
      </div>
        <h2 className="countHead">We have sent:</h2>
      <div className="wr">
        
        <div className="cont">
          <span className="num3" id="count">0</span>
          <span className="num2" id="count">0</span>
          <span className="num" id="count">0</span>
          
        </div>
        
      </div>
      <div className="countSub">Patrons to Space.</div>

      <div className="b">
        <div className="flex">
          <h1 className="h">Our Mission</h1>
          <div className="p">Our mission is to bring our devoted patrons to space. Each day we send new customers on an extra-terrestial experience like none other. Since our ground breaking space tech was developed, we have been committed to exploring new fronteirs, and giving the general public a new perspective on the universe.  </div>
        </div>
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