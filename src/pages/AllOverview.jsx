import { useEffect, useState } from "react";
import Overview from "../components/dashboard/Overview";
import ProjectActivity from "../components/dashboard/ProjectActivity";
import ProjectCollaboration from "../components/dashboard/ProjectCollaboration";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AllOverview = () => {
  const axiosSecure = useAxiosSecure();
  const scrollCardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };
  const [data, setData] = useState(null);
  useEffect(() => {
    const getdata = async () => {
      const res = await axiosSecure.get("/api/dashboard");
      console.log(res.data);
      setData(res.data);
    };

    getdata();
  }, []);
  return (
    <>
      <Overview
        scrollCardVariants={scrollCardVariants}
        overviewData={data?.overview}
      ></Overview>
      <ProjectActivity
        scrollCardVariants={scrollCardVariants}
        analyticsData={data?.analytics}
        products={data?.products}
      />
      <ProjectCollaboration
        scrollCardVariants={scrollCardVariants}
        users={data?.users}
      />
    </>
  );
};

export default AllOverview;
