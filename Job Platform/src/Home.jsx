import React, { useEffect } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero"; 
import Jobs from "./Component/Jobs";
import Footer from "./Component/Footer";
import { useApistore } from "./Zustand";

function Home() {
  const { output, fetchData } = useApistore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log("Output:", output);

  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
      {/* {
        Array.isArray(output) && output.map((item, index) => (
          <Jobs
            key={item.id || index}
            create={item.date_created}
            country={item.countries_derived}
            post={item.date_posted}
            validthrough={item.date_validthrough}
          />
        ))
      } */}
    </div>
  );
}

export default Home;
