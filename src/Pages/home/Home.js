import React from "react";
import "./home.scss";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import { Widgets } from "../../Components/widgets/Widgets";
import { FeaturedChart } from "../../Components/featured/FeaturedChart";
import { Chart } from "../../Components/chart/Chart";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widget">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <FeaturedChart />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
