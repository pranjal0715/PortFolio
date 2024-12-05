import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa"
import { event } from "@/utils/gtag"
import GhostLogo from "./GhostLogo"
import Link from "next/link"

const SocialShare = [
  {
    title: "FaFacebook",
    Social: <FaFacebookF />,
    link: "https://www.facebook.com/pranjal.pandey.509994?mibextid=ZbWKwL",
  },
  {
    title: "FaLinkedinIn",
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/pranjal-pandey-591364245",
  },
  {
    title: "FaInstagram",
    Social: <FaInstagram />,
    link: "https://www.instagram.com/_prnjl_here_/profilecard/?igsh=MWF5N2YyYnY1N2JmaQ==",
  },
  {
    title: "FaTwitter",
    Social: <FaTwitter />,
    link: "https://x.com/_Shubham0715?t=WnQ9M7J0GDItkmP_ewqv8A&s=09",
  },
  {
    title: "FaGithub",
    Social: <FaGithub />,
    link: "https://github.com/pranjal0715",
  },
]

const Footer = () => {
  return (
    <div
      className="footer-style-2 ptb--30 bg_image bg_image--1"
      data-black-overlay="6"
    >
      <div className="wrapper plr--50 plr_sm--20">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner">
              <div className="logo text-center text-sm-left mb_sm--20">
                <Link href="/" className="d-block" style={{ width: "36px" }}>
                  <GhostLogo />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner text-center">
              <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a
                      href={`${val.link}`}
                      onClick={() =>
                        event({
                          action: "social_footer_click_" + val.title,
                          category: "social links",
                        })
                      }
                    >
                      {val.Social}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
              <div className="text">
                <p>Copyright © 2024 Pranjal. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
