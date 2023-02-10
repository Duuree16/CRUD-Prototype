import style from "../Designs/Sidebar.module.css";
import logo from "../Assets/Logo.svg";
import home from "../Assets/Home.svg";
import not from "../Assets/Not.svg";
import pfp from "../Assets/Profile.svg";
import list from "../Assets/Lists.svg";
import book from "../Assets/Book.svg";
import msg from "../Assets/Msg.svg";
import exp from "../Assets/Expl.svg";
import more from "../Assets/More.svg";
import picP from "../Assets/Profile Picture.svg";
import dots from "../Assets/dots.svg";
import { Link } from "react-router-dom";

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
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <div className={style.section}>
            <img src={home} alt="home" />
            <div className={style.text}>Home</div>
          </div>
        </Link>
        <Link to="/explore" style={{ textDecoration: "none", color: "black" }}>
          <div className={style.section}>
            <img src={exp} alt="exp" />
            <div className={style.text}>Explore</div>
          </div>
        </Link>
        <Link
          to="/notifications"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className={style.section}>
            <img src={not} alt="not" />
            <div className={style.text}>Notifications</div>
          </div>
        </Link>
        <Link to="/messages" style={{ textDecoration: "none", color: "black" }}>
          <div className={style.section}>
            <img src={msg} alt="msg" />
            <div className={style.text}>Messages</div>
          </div>
        </Link>
        <Link
          to="/bookmarks"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className={style.section}>
            <img src={book} alt="book" />
            <div className={style.text}>Bookmarks</div>
          </div>
        </Link>
        <Link to="/lists" style={{ textDecoration: "none", color: "black" }}>
          <div className={style.section}>
            <img src={list} alt="list" />
            <div className={style.text}>Lists</div>
          </div>
        </Link>
        <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
          <div className={style.section}>
            <img src={pfp} alt="pfp" />
            <div className={style.text}>Profile</div>
          </div>
        </Link>
        <Link to="/more" style={{ textDecoration: "none", color: "black" }}>
          <div className={style.section}>
            <img src={more} alt="more" />
            <div className={style.text}>More</div>
          </div>
        </Link>
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
