import style from "../Designs/Sidebar.module.css";
import logo from "../Assets/Logo.svg";
import picP from "../Assets/Profile Picture.svg";
import dots from "../Assets/dots.svg";
import { Link } from "react-router-dom";
import { Sections } from "./json/sidebar";

export const Sidebar = () => {
  return (
    <div className={style.container}>
      <Link to="/">
        <div className={style.logo}>
          <img
            src={logo}
            alt="logo"
            style={{ height: "40px", width: "40px" }}
          />
        </div>
      </Link>
      <div className={style.sections}>
        {Sections.map((item, index) => {
          return (
            <Link
              to={`/${item.path}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className={style.section}>
                <img src={item.icon} alt={`${item.name}`} />
                <div className={style.text}>{item.name}</div>
              </div>
            </Link>
          );
        })}

        <div className={style.section}>
          <button className={style.button}>Tweet</button>
        </div>
      </div>
      <div className={style.profile}>
        <div style={{ display: "flex" }}>
          <img src={picP} alt="profP" className={style.pic} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "8px",
            }}
          >
            <div style={{ fontWeight: "500" }}>Username</div>
            <div style={{ color: "grey", fontWeight: "500" }}>@username</div>
          </div>
        </div>

        <img src={dots} alt="pfp" />
      </div>
    </div>
  );
};
