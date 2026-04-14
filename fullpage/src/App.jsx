import { Routes, Route } from "react-router-dom";
import TodaySite from "./styles/today.jsx";
import Nav from "./components/nav.jsx";
import Header from "../src/components/header.jsx"
import Fill from "../src/components/body.jsx"

if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(reg => console.log('service worker registered', reg))
	.catch(err => console.error('service worker not registered', err)) 
}

export default function App() {
  return (
    <>
      <Header></Header>
      <Nav/>
      <Routes>
        <Route path="/today" element={<TodaySite />} />
        <Route path="/by-date" element={<div>localhost/by-date</div>} />
        <Route path="/since" element={<div>localhost/since</div>} />
        {/*fortæller dig hvor du er, for at vise at den virker :) */} 
      </Routes>
      <Fill></Fill>
    </>
  );
}
