import React from 'react';

import VideoComponent from '../component/VideoComponent';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectAllVideo } from '../store/reducer/HandelVideoData';
import { IVideo } from '../interface/interface';

const HomeVideoPage = () => {
  const videoData = useSelector(selectAllVideo);
  console.log(videoData);
  return (
    <div>
    
    <div className="card-group video-class">
      {videoData.map((item: IVideo ) => {
        const { snippet } = item
        const { title , description , thumbnails } = snippet
        const { medium } = thumbnails
        const { url  }  = medium
        return (
          <div className="fx1" key={title}>
            <Link className="icon" to={`/singlepage/${title}`}>
              <VideoComponent title={title} e={url} />
            </Link>
          </div>
        );
      })}
    </div>
    </div>
  );
};
export default HomeVideoPage;
