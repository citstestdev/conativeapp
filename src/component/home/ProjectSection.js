import React from 'react';

function ProjectSection()
{

    return(
        <div>
         <section class="get-started-wr">
        <div class="get-started-head">
          <div class="center-wrapper">
            <h6 class="wow fadeIn">Start a project</h6>
            <div class="get-started-description wow fadeInDown data-wow-duration='0.7s'"> 
              <p>Want to work with us?</p>
            </div>
            <div class="get-started-btn wow fadeInDown data-wow-duration='0.5s'">
              <a href="http://localhost:3000/login"> <span data-content="Let' Get Started">Let' Get Started</span></a>
              <a href="http://localhost:3000/login"><img src="./assets/images/cta_lets_get_started.svg" alt="Conative Icon" /></a>
            </div>
          </div>
        </div>
        <div class="creator-content-area clearfix">
          <div class="get-started-slider-area left">
            <div class="get-started-slider">
              <div class="get-started-slide">
                <img src="./assets/images/get-creator-img.jpg" alt="Conative creator"/>
              </div>
              <div class="get-started-slide">
                <img src="./assets/images/get-creator-img.jpg" alt="Conative creator"/>
              </div>
              <div class="get-started-slide">
                <img src="./assets/images/get-creator-img.jpg" alt="Conative creator"/>
              </div>
            </div>
          </div>
          <div class="get-started-content right">
              <div class="get-started-blk"> 
                <h3 class="wow fadeInDown" data-wow-duration='1.5's>
                  <span>Conative</span>
                </h3>
                <h4 class="wow fadeInDown" data-wow-duration='1.5's>
                  More than an<br></br> <strong>Agency,</strong> <br></br>we are <strong>creator</strong>
                </h4>
                <a href="http://localhost:3000/login" class="btn btn2 wow fadeInDown" data-wow-duration='1.5's><span>our work</span> <i class="fas fa-arrow-up"></i></a>
              </div>
          </div>
        </div>
      </section>
     </div>
      )

}

export default ProjectSection;