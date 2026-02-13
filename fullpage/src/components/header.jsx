import style from "../styles/frontpage.module.scss";

export default function Header() {
    return (
    <section className={style.todaysite}>
      <div className={style.todaycard}>
        {" "}
        <div className={style.background}>
          <img src="back.png" />

          <div className={style.circle1}></div>
          <div className={style.circle2}></div>
          <div className={style.circle3}></div>
          <div className={style.circle4}></div>

          <div className={style.square1}></div>
          <div className={style.square2}></div>

          <div className={style.sign}>
            <h2>On This Day</h2>
            <p>
              What happened on this day - historical events, deaths and
              births thoughout time.
            </p>
            
          </div>
        </div>
      </div>{" "}
    </section>
    )
    
}


