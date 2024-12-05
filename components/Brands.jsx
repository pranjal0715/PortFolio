import React, { Component } from "react"

class brand extends Component {
  render() {
    return (
      <React.Fragment>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "30px",
            textAlign: "center",
            color: "#6c757d",
          }}
        >
          I&apos;m proud to have collaborated with these awesome companies
        </p>

        <ul style={{ filter: "invert(1)" }} className="brand-style-2">
          <li>
            <img src={"/brand/Zweler.png"} alt="Logo Zweler" />
          </li>
          {/* <li>
            <img src={"/brand/gearbest.svg"} alt="Logo gearbest" />
          </li>
          <li>
            <img src={"/brand/imobie.svg"} alt="Logo imobie" />
          </li> */}
          {/* <li>
            <img src={"/brand/imyfone.svg"} alt="Logo imyfone" />
          </li>
          <li>
            <img src={"/brand/leawo.webp"} alt="Logo leawo" />
          </li> */}
          <li>
            <img
              style={{ width: "150px" }}
              src={"/brand/Keysoft.png"}
              alt="Logo Keysoft"
            />
          </li>
        </ul>
      </React.Fragment>
    )
  }
}
export default brand
