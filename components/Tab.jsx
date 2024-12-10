import React, { Component } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { event } from "@/utils/gtag"

class TabsTwo extends Component {
  render() {
    const { tabStyle } = this.props
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>
                      <div
                        role="tab"
                        onClick={() =>
                          event({
                            action: "main_skills_tab_click",
                            category: "portfolio",
                          })
                        }
                      >
                        Main skills
                      </div>
                    </Tab>
                    <Tab>
                      <div
                        role="tab"
                        onClick={() =>
                          event({
                            action: "edu_cert_tab_click",
                            category: "portfolio",
                          })
                        }
                      >
                        Education & Certification
                      </div>
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <h6>
                            Web Development <span> - Development</span>
                          </h6>
                          I&apos;m primarily a Frontend Engineer, I love
                          building websites and web apps using javascript,
                          typescript and their frameworks. I use technologies
                          like HTML, CSS, Javascript, typescript, and tools
                          like: VSCode ,React JS ,Next JS, Redux, Mongodb, Git,
                          Github, Vite, and more.
                        </li>
                        <li>
                          <h6>
                            Web and user interface design<span> - Design</span>
                          </h6>
                          I have experience building UI, Websites, Apps, Photos,
                          Logos with tools like Canva, Figma,
                          Pen {"&"} Paper
                        </li>
                        <li>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <h6>
                            Bachelor In Science
                            <span> - Radha Raman Mishra PG College, Prayagraj, Uttar Pradesh  - 2022</span>
                          </h6>{" "}
                          Bachelor&apos;s degree in applied science from the
                          collage Radha Raman Mishra PG College, Prayagraj, Uttar Pradesh.
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    )
  }
}

export default TabsTwo
