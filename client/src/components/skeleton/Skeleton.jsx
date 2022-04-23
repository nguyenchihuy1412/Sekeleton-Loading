import React from "react";
import "./skeleton.css";

export default function Skeleton() {
  const COUNTER = 12;

  const FeedSkeleton = () => (
    <div className="postSk">
      <div className="img"></div>
      <div className="info">
        <div className="avatar"></div>
        <div className="detail">
          <div className="text"></div>
          <div className="text sm"></div>
        </div>
      </div>
    </div>
  );
  return Array(COUNTER).fill(<FeedSkeleton />);
}
