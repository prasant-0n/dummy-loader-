"use client";

import Loader from "@/component/Loader";
// import SpinnerLoader from "@/component/SpinnerLoader";
// import React, { useState, useEffect } from "react";

export default function Home() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <Loader />

      {/* <SpinnerLoader /> */}
    </div>
  );
}
