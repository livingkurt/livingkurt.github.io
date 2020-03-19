import React, { useState } from "react";
import "../../page_styles/pages.css"
import led_matrix_images from './image_export'
import Matrix from "./images/Matrix.gif"
import Modal from "../../../Modal/Modal";
import stl_files from "./stl_files.zip"


function LED_Matrix() {
  console.log(led_matrix_images)

  const [modalState, setModalState] = useState({ show: false });
  const showModal = () => {
    setModalState({ show: true });
  };

  const hideModal = () => {
    setModalState({ show: false });
  };
  return (
    <div id="home_container_div">
      <div id="">
        <h1 id="about_h1">10x10 Ping Pong Ball LED Matrix</h1>
        <div id="blog_div">
          <div id="banner_div" className=" tooltip_h">
            <img id="blog_post_banner" className="responsive" src={Matrix} alt="blog_post_banner" onClick={showModal} />
            <span id="blog_post_pop_up" className="tooltiptext_h">View More Images</span>

          </div>
          <Modal show={modalState.show} handleClose={hideModal}>
            {led_matrix_images.map((image, index) => (
              console.log(index),
              console.log(image),
              < img key={index} className="responsive blog_post_img" src={image.path} alt={image.filename} />
            ))}
          </Modal>
          {/* <Link to={`/blog/${props.route}`} className="zoom_p tooltip_p">
            <img id="blog_post_banner" className="responsive zoom_p tooltip_p" src={header_img} alt="blog_post_banner" />
            <span id="home_pop_up" className="tooltiptext_p">View Blog Post</span>
          </Link> */}
          <h3 id="about_h3">Supplies:</h3>
          <ul>
            <li>2 Rolls of Overture White PETG (PLA would work too) <a className="blog_post_links" id="" href="https://www.amazon.com/gp/product/B07PDV9RC8/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1" target="_blank" rel="noopener noreferrer">Amazon</a></li>
            <li>2 Sets of 50 WS2811 LEDs (Which comes with a colored adapter for easier soldering) <a className="blog_post_links" id="" href="https://www.amazon.com/gp/product/B076VBSB3B/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1" target="_blank" rel="noopener noreferrer">Amazon</a></li>
            <li>1 5V 6A 30W Power Supply <a className="blog_post_links" id="" href="https://www.amazon.com/gp/product/B07QH3PL1Z/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1" target="_blank" rel="noopener noreferrer">Amazon</a></li>
            <li>1 Arduino Nano <a className="blog_post_links" id="" href="https://www.amazon.com/gp/product/B07G99NNXL/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1" target="_blank" rel="noopener noreferrer">Amazon</a></li>
            <li>1 Circular Toggle Switch <a className="blog_post_links" id="" href="https://www.amazon.com/yueton-Rocker-Toggle-Switch-Control/dp/B011U1NU90/ref=sr_1_5?dchild=1&keywords=DC+Switch&qid=1583787153&sr=8-5" target="_blank" rel="noopener noreferrer">Amazon</a></li>
            <li>100 Ping Pong Balls <a className="blog_post_links" id="" href="https://www.amazon.com/gp/product/B07JMTLW88/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1" target="_blank" rel="noopener noreferrer">Amazon</a></li>
            <li>A little bit of spare 20-24 AWG wire <a className="blog_post_links" id="" href="https://www.digikey.com/product-detail/en/general-cable-carol-brand/C1356.21.01/C1356-21-100-ND/5461648" target="_blank" rel="noopener noreferrer">Amazon</a></li>
          </ul>
          <div className="blog_post_div">
            <img id="" className="responsive blog_post_img" src={led_matrix_images[16].path} alt={led_matrix_images[16].filename} />
            <img id="" className="responsive blog_post_img" src={led_matrix_images[17].path} alt={led_matrix_images[17].filename} />
            <img id="" className="responsive blog_post_img" src={led_matrix_images[18].path} alt={led_matrix_images[18].filename} />
            <img id="" className="responsive blog_post_img" src={led_matrix_images[19].path} alt={led_matrix_images[19].filename} />
            <img id="" className="responsive blog_post_img" src={led_matrix_images[21].path} alt={led_matrix_images[21].filename} />
          </div>
          <h3 id="about_h3">Tools:</h3>
          <ul>
            <li>Super Glue</li>
            <li>Clamps</li>
            <li>Soldering Iron</li>
            <li>Solder</li>
            <li>Pliers</li>
            <li>Hot Glue Gun</li>
          </ul>

          <h2 className="blog_post_h2">Printing:</h2>
          <h3 id="about_h3">Printer Settings:</h3>
          <ul>
            <li>Resolution: 0.32mm</li>
            <li>Infill: 5%</li>
          </ul>

          <h3 id="about_h3">Printer Procedure:</h3>
          <ol>
            <li>First Print all Pieces</li>
            <li>The body pieces should take about ~8 hours each.</li>
            <li>The door piece should take around ~6 hours each</li>
            <li>After each piece is printed mark it on the inside so you know what piece is what</li>
          </ol>

          <p><strong>Download STL Files Here</strong> - <a href={stl_files} download>STL Files</a></p>

          <h3 id="about_h3">Printing Tips:</h3>
          <p className="blog_p">I always use 5% infill on most things, but I have found that if you are printing a large surface area that 5% infill won't give you a clean layer. </p>
          <p className="blog_p">Meaning, the print head my start and stop somewhere in between the infill causing it curl up.</p>
          <p className="blog_p">So what I do, in prusa slicer is use a modifier slab and position it right where the printer would need to start printing the top layer and then give that little slice a higher infill. </p>
          <p className="blog_p">Look through the pictures to see what I mean</p>

          <div className="blog_post_div">
            <img id="" className="responsive blog_post_img" src={led_matrix_images[12].path} alt={led_matrix_images[12].filename} />
            <img id="" className="responsive blog_post_img" src={led_matrix_images[11].path} alt={led_matrix_images[11].filename} />
            <img id="" className="responsive blog_post_img" src={led_matrix_images[13].path} alt={led_matrix_images[13].filename} />
            <img id="" className="responsive blog_post_img" src={led_matrix_images[14].path} alt={led_matrix_images[14].filename} />
          </div>

          <h2 className="blog_post_h2">Assembly:</h2>

          <h3 id="about_h3">Gluing:</h3>
          <ol>
            <li>Once the pieces are printed then begin by gluing each body piece to each other and then each door piece to each other.</li>
            <li>So now you should have one body piece and one door piece</li>
          </ol>
          <h3 id="about_h3">Electronics:</h3>

          <h4 id="about_h3">Place LEDs:</h4>

          <ol>
            <li>Next, starting for the corner that would hold the electronics, place each LED one after another into the holes (They should click into place without too much force)</li>
            <li>Female End First</li>
          </ol>


          <div className="blog_post_div">
            <img id="" className="responsive blog_post_img" src={led_matrix_images[4].path} alt={led_matrix_images[4].filename} />
            <img id="" className="responsive blog_post_img" src={led_matrix_images[0].path} alt={led_matrix_images[0].filename} />
          </div>

          <h4 id="about_h3">Solder to Arduino with Group of 3 Wires</h4>

          <ol>
            <li>Once you have all 100 leds in. You will need to take the Red/White/Green adapter that came with the leds and solder “” to ardunio:</li>
            <ol>
              <li>Green - D5</li>
              <li>White - GND</li>
              <li>Red - 5V</li>
            </ol>
          </ol>

          <h4 id="about_h3">Place Other Electronics</h4>
          <ol>
            <li>Place arduino into position, and connect the adapter to the LEDs</li>
            <li>Place the power adapter head into its spot next to the arduino</li>
            <li>Place the Toggle switch into the hole next to the arduino</li>
          </ol>

          <div className="blog_post_div">
            <img id="" className="responsive blog_post_img" src={led_matrix_images[1].path} alt={led_matrix_images[1].filename} />
            <img id="" className="responsive blog_post_img" src={led_matrix_images[5].path} alt={led_matrix_images[5].filename} />
          </div>

          <h4 id="about_h3">Solder to Power Adapter head and toggle switch with Group of 2 Wires</h4>

          <ol>
            <li>Take the 2 wires that are left on the LEDs and connect the one with the dashed lines to the negative side of the power adapter head, and the other wire will attach to the bottom pin on the toggle switch</li>
            <li>Then Solder a short piece of wire to the middle pin of the toggle switch, which then will connect to the positive side of the power adapter head (I will post a wiring diagram in the pictures)</li>
          </ol>

          <div className="blog_post_div">
            <img id="" className="responsive blog_post_img" src={led_matrix_images[6].path} alt={led_matrix_images[6].filename} />
            <img id="" className="responsive blog_post_img" src={led_matrix_images[9].path} alt={led_matrix_images[9].filename} />
          </div>

          <h4 id="about_h3">Inject Power to other half of LEDs</h4>

          <ol>
            <li>For the LED to maintain consistent brightness throughout the matrix, you need to inject power at the half way point</li>
            <li>To do this you need to do the basically follow the same steps as connecting the first set of string lights to the power.</li>
            <li>First you need to lengthen the group of 2 wires on the second half the leds</li>
            <li>Take the 2 wires that are left on the second set of LEDs and connect the one with the dashed lines to the negative side of the power adapter head, and the other wire will attach to the bottom pin on the toggle switch</li>
            <li>So there will be 2 wires attached to the positive side of the power adapter head</li>
            <li>And 2 wires attached to the middle pin on toggle switch.</li>
            <li>But only 1 wire attached from the bottom pin on the toggle switch to the negative side of the power adapter head</li>
            <li>Again I will post a wiring diagram that would probably be way easier to follow</li>
          </ol>


          <div className="blog_post_div">
            <img id="" className="responsive blog_post_img" src={led_matrix_images[7].path} alt={led_matrix_images[7].filename} />
            <img id="" className="responsive blog_post_img" src={led_matrix_images[0].path} alt={led_matrix_images[0].filename} />
          </div>

          <h3 id="about_h3">Ping Pong Balls - Ok almost there:</h3>
          <ol>
            <li>So now that you electronics are all hooked up</li>
            <li>You need to heat up your soldering</li>
            <li>Take a ping pong ball and use the soldering iron to make a hole in it</li>
            <ol>
              <li>Be careful not to push too hard and hit the inside of the ping pong ball</li>
              <li>This will cause a mark to form and will not look as good</li>
            </ol>
            <li>Then using a hot glue gun</li>
            <li>Glue the ping pong balls over each led</li>
            <li>Repeat this 100 times</li>
          </ol>

          <div className="blog_post_div">
            <img id="" className="responsive blog_post_img" src={led_matrix_images[17].path} alt={led_matrix_images[17].filename} />
            <img id="" className="responsive blog_post_img" src={led_matrix_images[2].path} alt={led_matrix_images[2].filename} />
          </div>

          <h3 id="about_h3">Programming Matrix:</h3>

          <ol>
            <li>I wish I could tell how to program this in very in-depth way, but I don’t know that much about it</li>
            <li>I use the FastLED library to program my modes</li>
            <li>Documentation Here: https://github.com/FastLED/FastLED/wiki/Basic-usage</li>
            <li>Don’t forget to install the FastLED Library on the Arduino IDE</li>
            <li>And if you have any questions about this whole process, just send me a message or comment on the post</li>
            <li>I would love to help you through it</li>
          </ol>

        </div >
      </div>
    </div >
  );
}

export default LED_Matrix;