import "tailwindcss/tailwind.css";
import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
