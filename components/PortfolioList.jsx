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
  // {
  //   image: "/assets/images/portfolio/portfolio-10.jpg",
  //   category: "HTML, CSS",
  //   title: "Appollow Teaser",
  //   link: "https://appollow-teaser.vercel.app/",
  //   info: "A teaser website for Appollow built with HTML and CSS with some animations.",
  // },
  // {
  //   image: "/assets/images/portfolio/portfolio-11.png",
  //   category:
  //     "Next JS, Typescript, GraphQL, Apollo, Web 3, Chakra UI, BigNumberjs, Framer-Motion",
  //   title: "GraphQL Web 3",
  //   link: "https://hal-othman.vercel.app/",
  //   repo: "https://github.com/Othmanosx/hal-web3-graphql",
  //   info: "A simple Web 3 app built with GraphQL API",
  // },
  // {
  //   image: "/assets/images/portfolio/portfolio-12.jpg",
  //   category: "TypeScript, Nextjs, Firebase, SASS",
  //   title: "Fullstack E-commerce POC",
  //   link: "https://bejamas-othman.vercel.app/",
  //   repo: "https://github.com/Othmanosx/bejamas-ecommerce-poc",
  //   info: "A simple Fullstack E-Commerce proof of concept",
  // },
  // {
  //   image: "/assets/images/portfolio/portfolio-5.jpg",
  //   category: "React JS, Javascript, Material UI, Context API",
  //   title: "FindYours",
  //   link: "https://findyours.netlify.app",
  //   repo: "https://github.com/murtaja1/find_yours",
  //   info: "A platform to help people post and find their missing stuff online",
  // },
  // {
  //   image: "/assets/images/portfolio/portfolio-1.jpg",
  //   category: "React JS , Javascript, HTML, CSS",
  //   title: "Weather App",
  //   link: "https://weather-app-othman.netlify.app/",
  //   repo: "https://github.com/Othmanosx/weather_app_js",
  //   info: "Weather forecasts over a 6 day period updated each day for more than 2000 cities in the world.",
  // },
  // {
  //   image: "/assets/images/portfolio/portfolio-3.jpg",
  //   category: "React JS, Javascript, HTML, CSS",
  //   title: "Hangman Game",
  //   link: "https://hangman-sand-team.netlify.app/",
  //   repo: "https://github.com/Othmanosx/hangman_react_js",
  //   info: "Word guessing game created using ReactJS",
  // },
  // {
  //   image: "/assets/images/portfolio/portfolio-2.jpg",
  //   category: "Javascript, HTML, CSS, Blogger CMS",
  //   title: "iTECH Website",
  //   link: "https://www.itechnopro.com/",
  //   info: "Technology blog with news, tips and tricks about mobile devices",
  // },
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
