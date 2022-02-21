import React from 'react';

function ProcessSection()
{

    return(
        <div>
        <section class="our-process-wr">
        <div class="center-wrapper">
          <div class="features-widget clearfix">
              <div class="features-head-blk left wow slideInLeft">
                <h3>
                  <span>Our</span>
                  Process
                </h3>
              </div>
              <div class="features-description-blk right wow" data-splitting>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
                </p>
              </div>
          </div>
            <div class="process-pager-blk">
              <ul class="process-pager">
                <li><a href="javascript:;" data-slide-index="0">Planning<span class="dot"></span></a></li>
                <li><a href="javascript:;" data-slide-index="1">Designing<span class="dot"></span></a></li>
                <li><a href="javascript:;" data-slide-index="2">Development<span class="dot"></span></a></li>
                <li><a href="javascript:;" data-slide-index="3">Testing<span class="dot"></span></a></li>
                <li><a href="javascript:;" data-slide-index="4">Deliver<span class="dot"></span></a></li>
              </ul>
            </div>
        </div>
          <div class="process-slider-area">
            <div class="process-slider">
              <div class="process-slide">
                <figure>
                  <img src="./assets/images/process_slide_1_planning_.png" alt="Conative Process" />
                </figure>
              </div>
              <div class="process-slide">
                <figure>
                  <img src="./assets/images/process_slide_1_planning_.png" alt="Conative Process" />
                </figure>
              </div>
              <div class="process-slide">
                <figure>
                  <img src="./assets/images/process_slide_1_planning_.png" alt="Conative Process" />
                </figure>
              </div>
              <div class="process-slide">
                <figure>  
                  <img src="./assets/images/process_slide_1_planning_.png" alt="Conative Process" />
                </figure>
              </div>
              <div class="process-slide">
                <figure>  
                  <img src="./assets/images/process_slide_1_planning_.png" alt="Conative Process" />
                </figure>
              </div>
            </div>
          </div>
  </section>
     </div>
      )

}

export default ProcessSection;