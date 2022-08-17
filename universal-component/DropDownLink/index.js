import Link from "next/link";
import React from "react";

const DropDownLink = ({ dropdownLinkArray }) => {
  return (
    <div>
      {dropdownLinkArray.map((item, key) => (
        <div key={key}>
          <Link href={item.link}>
            <a>
              <div>
                <p>{item.linktext}</p>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DropDownLink;
