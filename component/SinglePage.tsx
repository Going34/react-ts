import React from 'react';
import { useParams } from 'react-router-dom';
import { Ratio, Card } from 'react-bootstrap';
import CommentBox from '../page/CommentBox';
const SinglePage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="single-page">
      <div className="single-page-video" style={{ width: 740, height: 'auto' }}>
        <Ratio aspectRatio="16x9">
          <embed
            type="image/svg+xml"
            src="https://www.youtube.com/embed/-X61cGO8FH8"
          />
        </Ratio>
        <Card.Body>
          <Card.Title>{id}</Card.Title>
          
        </Card.Body>
      </div>
      <CommentBox />
    </div>
  );
};

export default SinglePage;
