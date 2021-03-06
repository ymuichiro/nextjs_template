import Button from "@mui/material/Button";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import RouterHrefs from "../scripts/router/RouterHrefs";

const Index: NextPage = () => {
  const router = useRouter();
  return (
    <React.StrictMode>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Button
          onClick={() => {
            router.push(RouterHrefs.home);
          }}>
          goHome
        </Button>
      </div>
    </React.StrictMode>
  );
};

export default Index;
