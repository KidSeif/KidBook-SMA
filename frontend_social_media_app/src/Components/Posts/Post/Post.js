import React from "react";
import './Post.css'

const Post = () => {
  return (
    <div className="post">
      <div className="post_user_details">
        <div className="userImage">
            <img 
            src='https://images.pexels.com/photos/5951731/pexels-photo-5951731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="pdp" 
            />
        </div>
        <div className="userName">
          <h5>SeifKid</h5>
          <span>14 hours ago</span>
        </div>
      </div>
      <div className="postAction"></div>
      <div className="post_content_detail">
        <p>
            Hello this is my first post
        </p>
      </div>
      <div className="post_button"></div>
    </div>
  );
};

export default Post;
