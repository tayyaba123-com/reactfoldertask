import React from 'react'
import coche1  from '../../assets/images/coche1.png'


function HeroContent() {
  return (
    <div className='Hero-content'>
        <div className="container">
            <div className="center">
        <h1>Unleash Your Inner Champion Today.  All In One Place. </h1>
        <p>Join the ultimate tenins exoerience - where passion meets performance,and every swings brings you closer to victory.</p>
        <button>Start your own journey</button>
      </div>

      <div className="bottom">
        <div className="bottom-left">
            <div className="team">
                <div className="intro">
                    <p>Train with the real Professionals.</p>
                    <p>Get the real results.</p>
                </div>
                <div className="choces">
                    <img src={coche1} alt="" />
                    <img src={coche1} alt="" />
                    <img src={coche1} alt="" />
                </div>
            </div>
        </div>
        <div className="bottom-right">
            <div className="social-link">
                <a href="#">Instagram</a><i class="ri-arrow-right-up-long-line"></i>
            </div>
              <div className="social-link">
                <a href="#">Facebook</a><i class="ri-arrow-right-up-long-line"></i>
            </div>
              <div className="social-link">
                <a href="#">Tik Tok</a><i class="ri-arrow-right-up-long-line"></i>
            </div>
        </div>
      </div>
        </div>
    

    </div>
  )
}

export default HeroContent