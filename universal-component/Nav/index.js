import Image from "next/image";
import Link from "next/link";
import React from "react";
import DropDownLink from "../DropDownLink";
import { NavDiv } from "./nav.style";

const Nav = ({ navArray }) => {
  return (
    <NavDiv>
      {navArray.map((item, key) => (
        <div key={key}>
          {item.section.map((item, key) => (
            <div key={key}>
              {item.image ? (
                <div>
                  <Image
                    src={item.image}
                    alt={""}
                    placeholder="blur"
                    blurDataURL
                    priority
                    objectFit="cover"
                    layout="responsive"
                  />
                </div>
              ) : item.icon ? (
                <div>
                  <item.icon />
                </div>
              ) : item.component ? (
                <div>
                  <item.component />
                </div>
              ) : item.link ? (
                <div>
                  <Link href={item.link}>
                    <a>
                      <div>
                        <p>{item.linktext}</p>
                      </div>
                    </a>
                  </Link>
                </div>
              ) : (
                item.dropdown && (
                  <div>
                    <div>
                      <p>{item.dropdown}</p>
                    </div>
                    <DropDownLink dropdownLinkArray={item.dropdownlinks} />
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      ))}
    </NavDiv>
  );
};

export default Nav;
