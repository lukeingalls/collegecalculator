import type { NextPage } from "next";
import Head from "next/head";
import styles from "styles/Home.module.scss";
import Calculator from "../components/Calculator";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <Head>
        <title>Should I go to College? | thecollegecalculator</title>
        <meta
          name="description"
          content="This easy college affordability calculator helps you answer whether you should go to college and also explore how much you should spend on college."
        />
      </Head>

      <h1 className={styles.title}>Should I go to college?</h1>
      <h3>
        College is expensive. Picking where to go is hard. We make deciding
        easy.
      </h3>
      <Calculator />
    </main>
  );
};

export default Home;
