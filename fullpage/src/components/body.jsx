import style from "../styles/frontpage.module.scss";
import light from "/src/assets/light.png";

export default function Body({ height = "1000px", children }) {
  return (
    <section
      className={style.bodyRegion}
      style={{ height: height, backgroundColor: "#151515" }}
    >
      <div className={style.line}></div>
    
    <div className={style.circle5}></div>
              <div className={style.circle6}></div>
              <div className={style.circle7}></div>
              <div className={style.circle8}></div>
              <div className={style.circle9}></div>
              <div className={style.circle10}></div>

    <div className={style.line1}></div>
              <div className={style.line2}></div>
              <div className={style.line3}></div>
              <div className={style.line4}></div>


    <div className={style.light}>
    <img src={light} alt="Light" />
      </div>

      <div className={style.scroll}>Scroll down for more</div>
    </section>
  );
}


