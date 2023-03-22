import Head from "next/head";
import { useEffect, useState, lazy, Suspense } from "react";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
const About = lazy(() => import("../components/About"));
const Follow = lazy(() => import("../components/Follow"));
const Hobbies = lazy(() => import("../components/Hobbies"));
const Profile = lazy(() => import("../components/Profile"));
const Skills = lazy(() => import("../components/Skills"));

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, []);

  console.log(data);
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
        <Profile data={data} />
        <About data={data} />
        <Skills data={data} />
        <Hobbies data={data} />
        <Follow data={data} />
      </Suspense>
      <Footer />
    </div>
  );
}
