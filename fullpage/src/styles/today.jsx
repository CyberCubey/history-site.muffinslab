import style from "./frontpage.module.scss";
import { useState, useEffect } from "react";




export default function TodaySite() {

    const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://history.muffinlabs.com/date");

      const json = await res.json();
      console.log(json.data.Events)
      setData(json.data.Events);
    }
    fetchData();
  }, []);

  return (
   <div></div>
  );
}
