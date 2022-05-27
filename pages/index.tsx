import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import SocialsContainer from "../components/common/SocialsContainer";
import SearchContainer from "../components/search/SearchContainer";
import Post from "../components/jobs/Post";
import mockdata from "../mockdata.json";
import styles from "../styles/Home.module.css";
import ThemeWrapper from "../components/ThemeWrapper";
import { ThemeContextType, Theme } from "../@types/theme";
import { ThemeContext } from "../context/ThemeContext";

const Home: NextPage = () => {
  const { theme } = React.useContext(ThemeContext) as ThemeContextType;

  return (
    <ThemeWrapper>
      <div id="container" className={styles.container}>
        <Head>
          <title>Gig crawl</title>
          <meta name="description" content="ahh..." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="grid grid-cols-4 grid-rows-1 gap-4">
          <div className="col-span-full">
            <SearchContainer globalTheme={theme}/>
          </div>

          {/* JobPosts */}
          <div id="posts" className="col-span-3 min-h-screen p-4">
            <div className="flex justify-center">
              <ol>
                {mockdata.jobs.map((job, index) => (
                  //ts type error/ignore
                  <Post key={index} job={job} theme={theme} />
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
    </ThemeWrapper>
  );
};

export default Home;
