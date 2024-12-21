import React, { useContext } from 'react'
import './Maincon.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Maincon = () => {
   
   const context = useContext(Context);
   const { onSent,input,setInput,recentPrompt,prevPrompts,showResult,loading,resultData } = context;

  return (
    <div className='main'>
      <div className="nav">
        <p>Meraki</p>
        <img src="user_icon.png" alt="" />
      </div> 
      <div className="main-container">

      {!showResult?<>
        <div className="greet">
           <p><span>Hello, Meraki.</span></p>
           <p>How can i help you  today?</p>
        </div>
        <div className="cards">
          <div className="card">
          <p>Suggest beautiful places to see on an upcoming road trip</p>
          <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
          <p>Briefly summarize this concept: urban planning</p>
          <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
          <p>Meraki team bonding activities for our work retreat</p>
          <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
          <p>Improve the readability of the following code</p>
          <img src={assets.code_icon} alt="" />
          </div>
        </div>
        </>
         :<div className="result">
          <div className="result-title">
            <img src='user_icon.png' alt="" />
            <p> {recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading?
            <div className='loader'>
              <hr />
              <hr />
              <hr />
            </div>
             :
             <p dangerouslySetInnerHTML={{__html:resultData}}></p>
             }
            
          </div>

          </div>}
       
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
              {/* <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" /> */}
             {input? <img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className='bottom-info'>
            Meraki may display inaccurate info, including about people, so double-check its response. Your privacy and Meraki Apps 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Maincon
