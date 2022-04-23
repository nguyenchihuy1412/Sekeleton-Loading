import { useEffect, useState } from "react";
import axios from "axios";
import "./feed.css";
import Post from "../post/Post";
import Skeleton from "../skeleton/Skeleton";

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("/api/videos/");
        setVideos(res.data);
      } catch (err) {
        throw new Error(err);
      }
      setIsLoading(false);
    };
    getVideos();
  }, []);

  return (
    <div className="feed">
      {isLoading ? (
        <Skeleton />
      ) : (
        videos.map((video) => <Post video={video} />)
      )}
    </div>
  );
};

export default Feed;
