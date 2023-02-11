import style from "../Designs/RightBar.module.css";

export const RightBar = () => {
  return (
    <div className={style.container}>
      <input className={style.searchInput} />
    </div>
  );
};
