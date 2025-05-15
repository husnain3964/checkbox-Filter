import React, { useState } from "react";
import i1 from "../assets/1.jpg";
import i2 from "../assets/2.jpg";
import i3 from "../assets/3.jpg";
import i4 from "../assets/4.jpg";
import i5 from "../assets/5.jpg";
import lamp1 from "../assets/l1.webp";
import lamp2 from "../assets/l2.webp";
import lamp3 from "../assets/l3.webp";
import lamp4 from "../assets/l4.webp";
import lamp5 from "../assets/l5.webp";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";
import t1 from "../assets/t1.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t4.jpg";
import t5 from "../assets/t5.jpg";
function Card() {
  const [ischairCheck, setChaircheck] = useState(false);
  const [isLampCheck, setlampcheck] = useState(false);
  const [isSofaCheck, setSofacheck] = useState(false);
  const [isTableCheck, setTablecheck] = useState(false);

  const CardData = [
    { cardImg: s1, cardTitle: "sofa", price: 2500 },
    { cardImg: i1, cardTitle: "chair", price: 1200 },
    { cardImg: lamp1, cardTitle: "lamp", price: 800 },
    { cardImg: t1, cardTitle: "table", price: 3000 },
    { cardImg: s2, cardTitle: "sofa", price: 2700 },
    { cardImg: i2, cardTitle: "chair", price: 1500 },
    { cardImg: lamp2, cardTitle: "lamp", price: 950 },
    { cardImg: t2, cardTitle: "table", price: 3100 },
    { cardImg: s3, cardTitle: "sofa", price: 2900 },
    { cardImg: i3, cardTitle: "chair", price: 1400 },
    { cardImg: lamp3, cardTitle: "lamp", price: 1100 },
    { cardImg: t3, cardTitle: "table", price: 3300 },
    { cardImg: s4, cardTitle: "sofa", price: 2600 },
    { cardImg: i4, cardTitle: "chair", price: 1350 },
    { cardImg: lamp4, cardTitle: "lamp", price: 1050 },
    { cardImg: t4, cardTitle: "table", price: 3400 },
    { cardImg: s5, cardTitle: "sofa", price: 3200 },
    { cardImg: i5, cardTitle: "chair", price: 1600 },
    { cardImg: lamp5, cardTitle: "lamp", price: 980 },
    { cardImg: t5, cardTitle: "table", price: 3600 },
  ];
  // chair handle
  function chairHandle(event) {
    setChaircheck(event.target.checked);
    if (ischairCheck == true) {
      setChaircheck(false);
      console.log(`chair ${ischairCheck}`);
    } else {
      setChaircheck(true);
      console.log(`chair ${ischairCheck}`);
    }
  }
  //   sofa  handle
  function sofaHandle(event) {
    setSofacheck(event.target.checked);
    if (isSofaCheck == true) {
      setSofacheck(false);
      console.log(`sofa ${isSofaCheck}`);
    } else {
      setSofacheck(true);
      console.log(`sofa ${isSofaCheck}`);
    }
  }
  //   lamp handle
  function lampHandle(event) {
    setlampcheck(event.target.checked);
    if (isLampCheck === true) {
      setlampcheck(false);
      console.log(`lamp ${isLampCheck}`);
    } else {
      setlampcheck(true);
      console.log(`lamp ${isLampCheck}`);
    }
  }
  //   table handle
  function tableHandle(event) {
    setTablecheck(event.target.checked);
    if (isTableCheck == true) {
      setTablecheck(false);
      console.log(`table ${isTableCheck}`);
    } else {
      setTablecheck(true);
      console.log(`table ${isTableCheck}`);
    }
  }

  //   card rendering

  function Allcard() {
    if (isLampCheck === true ) {
      return CardData.filter((filterData) => {
        return filterData.cardTitle === "lamp"  ;
      }).map((finalData, index) => {
        return (
          <div key={index}>
            {" "}
            <img src={finalData.cardImg} alt="" />{" "}
          </div>
        );
      });
    }
    return null;
  }

  return (
    <>
      {/* buttons */}
      <div className="Selection">
        <label htmlFor="chair">chairs</label>
        <input onClick={chairHandle} id="chair" type="checkbox" />
        <label htmlFor="table">table</label>
        <input onClick={tableHandle} id="table" type="checkbox" />
        <label htmlFor="lamp">lamp</label>
        <input onClick={lampHandle} id="lamp" type="checkbox" />
        <label htmlFor="sofa">sofa</label>
        <input onClick={sofaHandle} id="sofa" type="checkbox" />
      </div>

      <Allcard />
    </>
  );
}

export default Card;
