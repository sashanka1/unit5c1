import {useState} from "react";



function App() {
  const [Val,setScore]=useState(76)
  const [wi,setWicket]=useState(2);
  const [b,setBall]=useState(50)
  const inc =()=>{
    if(Val<101){
    setScore(Val+1)
    if(Val===101){
     
    }
    }
  }

  const adf =()=>{
    if(Val<101){
    setScore(Val+4)
    }
  }
  const ads =()=>{
    if(Val<101){
    setScore(Val+6)
    }
  }

  const aw =()=>{
    if(wi+1<=12){
    setWicket(wi+1)
    }
  }
  const ab =()=>{
    setBall(b+1)
  
  }
  const inw =()=>{
   return "India win"
   }



  return (
    
  

    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{Val}
          <h1 className="scoreCount">
            {
              // show "score" here
              Val
            }
          </h1>
        </div>
        <div>
          Wicket:{wi}
          <h1 className="wicketCount">
            {
              // show wicket here
              wi
            }
          </h1>
        </div>

        <div>
          Over:{Math.floor(b/6)+"."+ b%6}
          
          <h1 className="overCount">
          
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              b
            }
           
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>inc()}>Add 1</button>
        <button className="addScore4" onClick={()=>adf()}>Add 4</button>
        <button className="addScore6" onClick={()=>ads()}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>aw()}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>ab()}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */
       
     
       <h1 className="status">{  Val>=101 ? inw() :" " }</h1>

      }
        
      

    </div>
  );
}

export default App;