import React from "react";
import "./FeaturedChart.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const FeaturedChart = () => {
  return (
    <div className="Featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={8} />
        </div>
        <p className="title">Total Sales Made Today</p>
        <p className="amount">$439</p>
        <p className="desc">
          dfklsaf dlsf ldjfjq alsdnlkfnsd knaksnd kdflk kdfhks foew k dsfoijb
        </p>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowDownIcon fontSize="small" />

              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResult positive">
              <KeyboardArrowDownIcon fontSize="small" />

              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
              <KeyboardArrowUpIcon fontSize="small" />

              <div className="resultAmount">$1.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
