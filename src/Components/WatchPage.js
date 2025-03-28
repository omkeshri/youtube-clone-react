import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispath = useDispatch();
  useEffect(() => {
    dispath(closeMenu());
  }, []);

  return (
    <div className="p-2 flex flex-col">
      <div className="flex gap-2">
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <LiveChat />
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
