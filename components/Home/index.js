import React, { useEffect, useState } from "react";
import HeroSection from "../../universal-component/HeroSection";
import OurTeam from "../../universal-component/OurTeam";
import { HeroSectionArray } from "../../utils/Home/HeroSection";
import { OurTeamArray } from "../../utils/Home/OurTeam";
import { HomeDiv } from "./home.style";

const HomePage = () => {
  const [slideShow, setSlideShow] = useState(HeroSectionArray[0]);
  useEffect(() => {
    // console.log(changerValue++);
    // setInterval(HeroChanger, 4000);
  }, []);
  let changerValue = 0;

  console.log(changerValue);
  const HeroChanger = () => {
    changerValue++;
    if (changerValue === HeroSectionArray.length) {
      changerValue = 0;
    }
    setSlideShow(HeroSectionArray[changerValue]);
    console.log(changerValue);
  };

  //   setInterval(HeroChanger, 4000);

  return (
    <HomeDiv>
      <HeroSection heroArray={slideShow} />
      <div>
        <div>
          <OurTeam ourteamArray={OurTeamArray} />
        </div>
      </div>
    </HomeDiv>
  );
};

export default HomePage;
