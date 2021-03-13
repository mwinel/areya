import Head from "next/head";
import Link from "next/link";
import styles from "../assets/Home.module.css";

import {Header} from "../components"
import { Card } from "../components";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Areya | Find the best medical facilities near you.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1 className="text-6xl text-gray-800 font-bold">
          Welcome to{" "}
          <a
            href="/"
            className="text-6xl text-indigo-600 font-bold"
          >
            Areya!
          </a>
        </h1>

        <p className="text-3xl text-gray-800 text-center my-6">
          We are on a mission to drive Africas Medical Digital <br />
          age with you.
        </p>

        <div className={styles.grid}>
          <div className="grid grid-cols-2 gap-6">
            <Link href="/auth/register" passHref>
              <Card
                title="Areya Listings"
                description="Get easily found by your next patient via web or SMS."
              />
            </Link>
            <Link href="/auth/register" passHref>
              <Card
                title="Areya Manage"
                description="Manage your patient data and appointments seamlessly."
              />
            </Link>
            <Link href="/auth/register" passHref>
              <Card
                title="Areya Finder"
                description="Discover the best medical facilities nearby you and book a
              spot via web."
              />
            </Link>
            <Link href="/auth/register" passHref>
              <Card
                title="Areya Conversational"
                description="Discover the best medical facilities nearby you and book a
              spot via conversational SMS."
              />
            </Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600"
        >
          Copyright 2021 @ Areya Medical
        </a>
      </footer>
    </div>
  );
};

export default Home;
