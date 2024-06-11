import React from "react";
import socials4 from "../src/assets/SocialIcons4.png";
import socials1 from "../src/assets/SocialIcons1.png";
import socials2 from "../src/assets/SocialIcons2.png";
import socials3 from "../src/assets/SocialIcons3.png";

import "../src/Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer bg-black flex items-center justify-between p-4 gap-3 flex-wrap ">
        <div className="footer-container flex items-center">
          <h3 className="text-white">2023 ---'s Landing Page Ui Kit</h3>
        </div>
        {/* Footer social images */}
        <div className="icons flex items-center justify-end gap-3">
          <a href="#">
            <img src={socials4} height={40} width={40} alt="socials" />
          </a>
          <a href="#">
            <img src={socials2} height={40} width={40} alt="socials" />
          </a>
          <a href="#">
            <img src={socials3} height={40} width={40} alt="socials" />
          </a>
          <a href="#">
            <img src={socials1} height={40} width={40} alt="socials" />
          </a>
        </div>
      </div>
    </>
  );
}
