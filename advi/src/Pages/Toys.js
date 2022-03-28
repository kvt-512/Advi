import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import funny from '../assets/funny.jpg';
import vc from '../assets/voice_controlled.jpg';
import obstacle from '../assets/obstacle.jpg';
import funny from '../assets/funny.jpg';


const toysImg = [

]

const Toys = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const flipkart =
    "https://www.flipkart.com/advi-chunda-chundi-boom-v-1/p/itmd48ea2615711a?pid=ETYFZ5RRGYVKURAZ&lid=LSTETYFZ5RRGYVKURAZ8IAGN5&marketplace=FLIPKART&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=b6289853-f94e-4acc-9a6f-a68c6149b8d4.ETYFZ5RRGYVKURAZ.SEARCH&ppt=sp&ppn=sp&ssid=trshterw9xfogu0w1613381335420&qH=2413819d47012efb";
  const amazon =
    "https://www.amazon.in/ADVI-GROUP-OF-COMPANIES-Chunda_Chundi/dp/B08RYR62JF/ref=sr_1_1?dchild=1&keywords=advi+group&qid=1613381130&sr=8-1";

  return (
    <div className="my-5 py-5">
      <div id="toys" className="container">
        <h1>Toys</h1>
        <p>Make in INDIA /Make in KARNATAKA/ Make in MYSORE</p>
        <p>
          We sell our toys exclusively on <a href={amazon}>www.amazon.in</a> and{" "}
          <a href={flipkart}>www.flipkart.com</a>
        </p>
        <h3>Categories of Toys</h3>
        <Carousel responsive={responsive} infinite={true}>
          <div>Educational Toys</div>
          <div>Youth Electornic Toys</div>
          <div>Innovative Toys</div>
          <div>Special Toys</div>
          <div>Funny Toys</div>
        </Carousel>
      </div>
    </div>
  );
};

export default Toys;
