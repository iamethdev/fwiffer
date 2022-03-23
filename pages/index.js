import { getSession, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Post from "../components/Post";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import Trends from "../components/Trends";
import styles from "../styles/Home.module.css";

export default function Home({ session }) {
  const { setTheme, resolvedTheme: currentTheme, theme } = useTheme();
  const [mounted, setMounted] = useState();
  const router = useRouter();

  useEffect(() => {
    console.log(session, "###########");
    setMounted(true);
  }, [session]);

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push("/home");
    },
  });

  return (
    <div className="">
      <Head>
        <title>Home | Fwiffer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="md:flex justify-center md:px-36 min-h-[100vh]  dark:bg-[#000] dark:text-[#d4d6d6]">
        <div className="sticky top-0  max-h-[100vh] overflow-hidden md:min-w-[15vw]">
          <Logo className="hidden sm:flex" />
          <Sidebar className="" />
        </div>
        <div className="flex-[30%] border-[.2px] dark:border-white/30 border-black/20 border-t-0">
          <Header />
          <Post />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <div className="text-2xl p-10 max-w-[20vw]">
            <h1>
              {" "}
              Day Two of my{" "}
              <span className="text-blue-400 font-bold uppercase ">
                twitter clone
              </span>{" "}
              build
            </h1>
          </div>
        </div>
        <div className="hidden sm:flex flex-col gap-4 text-2xl  pl-8 sticky top-2 my-2 flex-[10%]">
          <Search />
          <Trends />
          <Trends sticky />
        </div>

        {/* <Sidebar /> */}
        {/* <Sidebar /> */}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Check if the user is authenticated on the server...
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
