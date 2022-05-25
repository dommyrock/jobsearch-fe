import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SocialsContainer from "../components/common/SocialsContainer";
import SearchContainer from "../components/search/SearchContainer";
import Post from "../components/jobs/Post";
import mockdata from "../mockdata.json";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div id="container" className={styles.container}>
      <Head>
        <title>Gig crawl</title>
        <meta name="description" content="ahh..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* place-items-center adds about 150px margin top*/}
      {/*V1[2cols] <main className="grid grid-cols-2 grid-rows-2 gap-4 min-h-screen"> */}

      <main className="grid grid-cols-4 grid-rows-1 gap-4">
        <div className="col-span-4">
          <SearchContainer />
        </div>

        {/* JobPosts */}
        <div id="posts" className="col-span-3 min-h-screen p-4">
          <div>
            <ol>
              {mockdata.jobs.map((job, index) => (
                //ts type error/ignore
                <Post key={index} job={job} />
              ))}
            </ol>
          </div>
        </div>

        {/* Right sidebar hide on mobile*/}
        <div
          id="sidebar"
          className="col-span-1 min-h-screen bg-slate-600 p-4 text-pink-500 text-2xl text-center"
        >
          <h1>sidebar </h1>
        </div>
      </main>

      <footer className={styles.footer}>
        <h4 className="text-sm text-slate-500">Socials:</h4>
        <SocialsContainer />
      </footer>
    </div>
  );
};

export default Home;
