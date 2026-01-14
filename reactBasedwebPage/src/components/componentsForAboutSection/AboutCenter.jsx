import React from 'react'

const AboutCenter = () => {
  return (
    <div className='about-center'>
       <div className="left-part">
         <i class="ri-clapperboard-line"></i>
         <p>Professional hard courts <span>with tournament - grade lighting & climate control - play in </span>perfect conditions in any season.</p>
         <div className="mode">
          <button><span><i class="ri-issues-fill"></i></span></button> <span>Game Mode</span>
         </div>
        </div> 
        
        <div className="center-part">
           <button>Private & Group Lessons</button>
        </div>

        <div className="right-part">

          <div className="top">
            <h3>100+</h3>
            <h5>Pro Coaches</h5>
            <p>Certified preofessional ready to boost your game from first serve to tournament level.</p>
              </div>

            <div className="bottom">
              <div className="beginner">
                <h5>Beginner</h5>
                <div className="rateing">
                  <div className="rate"></div>
                  <div className="rate"></div>
                  <div className="rate"></div>
                  <div className="rate"></div>
                  <div className="rate"></div>
                  <div className="rate"></div>
                  <div className="rate"></div>
                  <div className="rate"></div>
                  <div className="rate"></div>
                  <div className="rate"></div>
                </div>
                <h5>55</h5>
              </div>
              
               <div className="intermediate">
                <h5>Intermediate</h5>
                <div className="rateing">
                  <div className="rate"></div>
                  <div className="rate"></div>
                  <div className="rate"></div>
                  <div className="rate"></div>
                  <div className="rate"></div>
                  <div className="rate"></div>
                  <div className="rate"></div>
                  <div className="rate"></div>
                </div>
                <h5>40</h5>
              </div>

                 <div className="advanced">
                <h5>Advanced</h5>
                <div className="rateing">
                  <div className="rate"></div>
                  <div className="rate"></div>
                  <div className="rate"></div>
                  <div className="rate"></div>
                  <div className="rate"></div>
                  <div className="rate"></div>
                  <div className="rate"></div>
                </div>
                <h5>35</h5>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AboutCenter