import React from 'react';


function Header()
{

    return(
          <header>
            <div class="center-wrapper">
              <div class="header-area clearfix">
                <div class="logo-block left">
                  <a href="index.html">
                    <img src="./assets/images/conative-logo.svg" alt="Conative It Solutions Logo"/>
                  </a>
                </div>
                <div class="header-contact-content right">
                  <div class="contact-blk">
                    <a href="mailto:info@conativeitsolution.com"><img src="./assets/images/header_mail_icon.svg" alt="header mail icon" /><span data-content="info@conativeitsolution.com">info@conativeitsolution.com</span></a>
                    <a href="tel:91 82697 88173"><img src="./assets/images/header_whatsapp_icon.svg" alt="header mail icon" /><span data-content="+91 82697 88173">+91 82697 88173</span></a>
                  </div>
                  <div class="our-work-blk">
                    <a href="#" class="btn btn1"><span>our work</span> <i class="fas fa-arrow-up"></i></a>
                  </div>
                  <div class="menu-blk">
                    <div class="tilted-menu-box"></div>
                    <div class="menu-bar-box">
                      <div class="menu-bar"></div>
                      <div class="menu-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
      )

}

export default Header;