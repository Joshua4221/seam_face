import Image from "next/image";
import Link from "next/link";
import React from "react";
import { withTheme } from "styled-components";
import { OurTeamDiv } from "./ourteam.style";

const OurTeam = ({ ourteamArray, theme }) => {
  return (
    <OurTeamDiv color={theme}>
      {ourteamArray?.map((item, key) => (
        <div key={key} className={"our-team"}>
          <div className={"our-team-image"}>
            <Image
              src={item.image}
              alt={""}
              placeholder={"blur"}
              blurDataURL
              // layout={"responsive"}
              // objectFit={"cover"}
              width={"330px"}
              height={"300px"}
              className={"image"}
            />
          </div>
          <div className={"our-team-body"}>
            <div className={"our-team-header"}>
              <h4>{item.name}</h4>
              <p>{item.role}</p>
            </div>
            <div className={"our-team-link"}>
              {item.linkArray.map((item, key) => (
                <div key={key} className={"our-team-linkbody"}>
                  <Link href={item.link}>
                    <a>
                      <div className={"our-team-linkicon"}>
                        <item.linkicon className={"our-team-icon"} />
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </OurTeamDiv>
  );
};

export default withTheme(OurTeam);
