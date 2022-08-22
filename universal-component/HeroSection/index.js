import Link from "next/link";
import React from "react";
import { withTheme } from "styled-components";
import { HeroSectionDiv, HeroSectionBody } from "./herosection.style";

const HeroSection = ({ heroArray, theme, ball }) => {
  return (
    <HeroSectionDiv color={theme}>
      <HeroSectionBody bg={heroArray.bg} color={theme}>
        <div className={"herosectionbody"}>
          <div className={"herosectionheader"}>
            <h2>{heroArray.header}</h2>
            <p>{heroArray.paragraph}</p>
          </div>
          <div className={"herosectionlinkbody"}>
            {heroArray.linkArray.map((item, key) => (
              <div key={key} className={"herosectionlinkitem"}>
                <Link href={item.link}>
                  <a>
                    <div className={"herosectionlink"}>
                      <p>{item.linktext}</p>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </HeroSectionBody>

      <div>
        {ball?.map((item, key) => (
          <div key={key} className>
            <div></div>
          </div>
        ))}
      </div>
    </HeroSectionDiv>
  );
};

export default withTheme(HeroSection);
