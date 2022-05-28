import Head from "next/head";
import { useEffect, useState, lazy, Suspense } from "react";
import Loader from "../components/Loader";
const About = lazy(() => import("../components/About"));
const Follow = lazy(() => import("../components/Follow"));
const Hobbies = lazy(() => import("../components/Hobbies"));
const Profile = lazy(() => import("../components/Profile"));

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/portfolio.json")
      .then((x) => x.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="App">
      <Head>
        <title>Pawan | Home</title>
        <meta charset="UTF-8" />
        <meta name="description" content="My minimal portfolio" />
        <meta name="keywords" content="HTML, CSS, JavaScript, React, Next" />
        <meta name="author" content="Pawan Kumar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Suspense fallback={<Loader />}>
        <Profile data={data[0]} />
        <About data={data[1]} />
        <Hobbies data={data[3]} />
        <Follow data={data[2]} />
      </Suspense>
    </div>
  );
}
