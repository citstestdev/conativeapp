import React, { useEffect, useState } from 'react';
// import CustomPopup from "./CustomPopup";

function ClientDetailsSection()
{
    return(
  <div>
  <section class="view-more-wr">
    <div class="center-wrapper">
      <div class="view-more-blk wow fadeInDown">
        <h4>
          <a href="#"> <span data-content="View More">View More</span></a>
        </h4>
      </div>
    </div>
  </section>
  <section class="our-client-wr" id="our-client-wr">
    <div class="center-wrapper">
      <div class="counter-area clearfix">
        <div class="counter-blk counter-blk-1 counter left">
          <div class="counter-value">
            <h3 data-count="750">750</h3>
            <span>+</span>
          </div>
          <div class="counter-caption">
            <h5>HAPPY CLIENTS</h5>
          </div>
        </div>
        <div class="counter-blk counter-blk-2 counter left">
          <div class="counter-value">
            <h3 data-count="20">20</h3>
            <span>k +</span>
          </div>
          <div class="counter-caption">
            <h5>WORKING HOURS</h5>
          </div>
        </div>
        <div class="counter-blk counter-blk-3 counter left">
          <div class="counter-value">
            <h3 data-count="4">4</h3>
            <span>k +</span>
          </div>
          <div class="counter-caption">
            <h5>FINISHED PROJECTS</h5>
          </div>
        </div>
        <div class="counter-blk counter-blk-4 counter right">
          <div class="counter-value">           
            <h3 data-count="30">30</h3>
            <span>+</span>
          </div>
          <div class="counter-caption">
            <h5>SKILLED EXPERTS</h5>
          </div>
        </div>
      </div>
      <div class="testimonial-area">
        <div class="testimonial-head-blk">
          <div class="client-say-block">
                <div class="quote-icon-img wow fadeInLeft">
                  <img src="./assets/images/testimonials_quotes_icon.svg" alt="Quote Icon Image" />
                </div>
                <div class="client-say-content wow fadeInRight">
                  <p>"Our success depends on our clients success."</p>
                </div>
                <div class="client-say-head wow fadeInDown">
                  <h3>Our Client's Say</h3>
                </div>
              </div>
              <div class="testimonial-head">
                <h3>Testimonials</h3>
          </div>
        </div>
        <div class="testimonial-widget-area">
          <div class="testimonial-slider">
            <div class="testimonial-slide">
              <div class="testimonial-content-area clearfix">
                <div class="testimonial-media-blk left">
                  <div class="video-layers">
                    <figure className="video-btn" data-target="youtube" data-v-id="https://www.youtube.com/embed/YsdR0i_DQgI">
                      <img src="./assets/images/testimonials_play_btn.svg" alt="Video Play Btn" />
                      <figcaption>
                        <a href="javascript:;">Play Video</a>
                      </figcaption>
                    </figure>
                    <div class="video-circle circle-1"></div>
                    <div class="video-circle circle-2"></div>
                    <div class="video-circle circle-3"></div>
                  </div>
                  <div class="testimonial-img-blk">
                    <figure class="testimonial-client-img">
                      <img src="./assets/images/testimonials_img.png" alt="Testimonials Image" />
                    </figure>
                    <div class="box-shadow-box"></div>
                  </div>
                </div>
                <div class="testimonial-review-blk right">
                  <div>
                    <p>
                      Conative IT Solutions has been a reliable partner for my website development projects. I've used their services for many years and have found them to be very responsive and technically sound.
                    </p>
                  </div>
                  <div class="round-bg-btn testimonial-caption">
                    <span data-hover="Brett Black">Brett Black</span>
                    <p>Prisma Labs Inc. CANADA</p>
                  </div>
                </div>
              </div>            
            </div>

            <div class="testimonial-slide">
              <div class="testimonial-content-area clearfix">
                <div class="testimonial-media-blk left">
                  <div class="video-layers">
                    <figure className="video-btn" data-target="vimeo" data-v-id="https://player.vimeo.com/video/2589929">
                      <img src="./assets/images/testimonials_play_btn.svg" alt="Video Play Btn" />
                      <figcaption>
                        <a href="javascript:;">Play Video</a>
                      </figcaption>
                    </figure>
                    <div class="video-circle circle-1"></div>
                    <div class="video-circle circle-2"></div>
                    <div class="video-circle circle-3"></div>
                  </div>  
                  <div class="testimonial-img-blk">
                    <figure class="testimonial-client-img">
                      <img src="./assets/images/testimonials_img.png" alt="Testimonials Image" />
                    </figure>
                    <div class="box-shadow-box"></div>
                  </div>
                </div>
                <div class="testimonial-review-blk right" >
                  <div>
                    <p>
                      Conative IT Solutions has been a reliable partner for my website development projects. I've used their services for many years and have found them to be very responsive and technically sound.
                    </p>
                  </div>
                  <div class="round-bg-btn testimonial-caption">
                    <span data-hover="Brett Black">Brett Black</span>
                    <p>Prisma Labs Inc. CANADA</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="testimonial-slide">
              <div class="testimonial-content-area clearfix">
                <div class="testimonial-media-blk left">
                  <div class="video-layers">
                    <figure className="video-btn" data-target="unknown" data-v-id="video/conative.mp4">
                      <img src="./assets/images/testimonials_play_btn.svg" alt="Video Play Btn" />
                      <figcaption>
                        <a href="javascript:;">Play Video</a>
                      </figcaption>
                    </figure>
                    <div class="video-circle circle-1"></div>
                    <div class="video-circle circle-2"></div>
                    <div class="video-circle circle-3"></div>
                  </div>
                  <div class="testimonial-img-blk">
                    <figure class="testimonial-client-img">
                      <img src="./assets/images/testimonials_img.png" alt="Testimonials Image" />
                    </figure>
                    <div class="box-shadow-box"></div>
                  </div>
                </div>
                <div class="testimonial-review-blk right" >
                  <div>
                    <p>
                      Conative IT Solutions has been a reliable partner for my website development projects. I've used their services for many years and have found them to be very responsive and technically sound.
                    </p>
                  </div>
                  <div class="round-bg-btn testimonial-caption">
                    <span data-hover="Brett Black">Brett Black Toggle Popup</span>
                    <p>Prisma Labs Inc. CANADA</p>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="popup-bg-wr"></div>
    <div class="popup-content">
      <div class="close-btn">
        <a href="javascript:;">X</a>
      </div>
      <div class="popup-video">
       <iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <video class="video-block" controls="true" autoplay="true" muted src="" type="video/mp4"></video>
      </div>
    </div>
  </section>
     </div>
  )

}

export default ClientDetailsSection;