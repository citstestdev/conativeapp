// import React from 'react';
import React, { useEffect, useState } from 'react';
// import axios from 'axios';




function Home(props)
{


  const [data, setData] = useState([])
 
   // function firstLetter(str){
   //   return str.charAt(0).toUpperCase() + str.slice(1);
   //  }

  useEffect(() => {
    fetch("http://localhost:5000/home-show")
    .then(response => response.json())
    .then(data => setData(data))
  },[])

    // console.log("dsssss",data);
    //  console.log("ds",data.name);

    return(
        <div>
          <section class="banner-wr">
            <div class="center-wrapper">
              <div class="banner-content-area clearfix">
                <div class="banner-content-blk left">
                  <h1>
                    <span class="large-head wow fadeInDown">Conative</span>
                    <span class="sub-head wow fadeInDown">{data.name}</span>
                  </h1>
                  <ul class="dynamic-txts">
                    <li><span>{data.title}</span></li>
                    <li><span>Passion</span></li>
                    <li><span>Dedication</span></li>
                  </ul>
                  <div class="get-to-know-btn round-bg-btn">
                    <a href="#">
                      <span data-hover="GET TO KNOW US">GET TO KNOW US</span>
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
                <div class="banner-image-blk right">
                  <img src="./assets/images/Round-Image.png" alt="Conative Banner Image" />
                </div>
              </div>
            </div>
        </section>
     </div>
      )

}

export default Home;