import { event } from "@/utils/gtag"
import Image from "next/image"
import React, { useState } from "react"

const PortfolioListContent = [
  {
    image: "/assets/images/portfolio/portfolio-8.png",
    category: "Next JS, Javascript, Bootstrap, Redux Toolkit",
    title: "KontoERP",
    link: "",
    info: "A software that provides help in accounting and managing employees work-systems",
  },
  {
    image: "/assets/images/portfolio/portfolio-4.png",
    category:
      "React.JS, Tailwind.CSS, Bootstrap ",
    title: "Sunrise Corporation",
    link: "",
    info: "A company that helps to provide chemicals to the industries",
  },
  {
    image: "/assets/images/portfolio/portfolio-7.png",
    category: "React JS, NextJS, Javascript, Material UI, Typescript, Nodejs, Mongodb,Tailwind.CSS , Bootstrap, Redux,",
    title: "Zweler",
    link: "",
    info: "A product based IT Company that onboards manufacturers and retailers at their website in jewellery industry",
  },
]

const PortfolioList = ({ column, styevariation }) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <React.Fragment>
      {PortfolioListContent.slice(0, showMore ? 99 : 3).map((value, index) => (
        <div className={`${column}`} key={index}>
          <div className={`portfolio ${styevariation}`}>
            <div className="thumbnail-inner">
              <Image
                src={value.image}
                fill
                className="thumbnail"
                style={{
                  backgroundColor: "#101010",
                  backgroundPosition: "50%",
                  backgroundRepeat: "no-repeat",
                  objectFit: "cover",
                  filter: "brightness(0.6)",
                }}
                alt="personal photo"
              />
            </div>
            <div className="content">
              <div className="inner">
                <p>{value.category}</p>
                <h4>
                  <a href={value.link} rel="noreferrer" target="_blank">
                    {value.title}
                  </a>
                  <div
                    style={{
                      fontSize: "12px",
                      lineHeight: "normal",
                      color: "rgb(219, 219, 219)",
                    }}
                  >
                    {value.info}
                  </div>
                </h4>
                <div className="postButtons">
                  {value.link ? (
                    <div className="portfolio-button">
                      <a
                        className="rn-btn"
                        onClick={() =>
                          event({
                            action: "live_click_" + value.title,
                            category: "projects",
                            label: "open project link" + value.title,
                          })
                        }
                        href={value.link}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Live demo
                      </a>
                    </div>
                  ) : null}
                  {value.repo ? (
                    <div className="portfolio-button">
                      <a
                        onClick={() =>
                          event({
                            action: "repo_click_" + value.title,
                            category: "projects",
                            label: "open project repo" + value.title,
                          })
                        }
                        className="rn-btn"
                        href={value.repo}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Repo
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* {!showMore && (
        <button
          className="mt-5 mb-n5 rn-btn btn-solid"
          onClick={() => setShowMore(true)}
        >
          Show more
        </button>
      )} */}
    </React.Fragment>
  )
}

export default PortfolioList
