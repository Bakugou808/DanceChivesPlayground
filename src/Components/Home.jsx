import React from "react";

const Home = (props) => {
  const renderVideos = () => {
    return <div>I'm a video feed</div>;
  };

  return (
    <div className="home-cont">
      <div className="home-search">
        <div className="home-title">
          <p>Dance Chives</p>
          <p>"Dance is the Hidden Language of the Soul"</p>
        </div>
      </div>
      <div className="video-feed">{renderVideos()}</div>
    </div>
  );
};

export default Home;
