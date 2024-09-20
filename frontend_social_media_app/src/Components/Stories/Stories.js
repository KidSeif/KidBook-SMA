import React from "react";
import "./Stories.css";
import Story from "./Story/Story";

const Stories = () => {
  const stories = [
    {
      username: "ahmed",
      user_photo:
        "https://images.pexels.com/photos/27849560/pexels-photo-27849560/free-photo-of-homme-couple-amour-gens.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      story_photo:
        "https://images.pexels.com/photos/28277343/pexels-photo-28277343/free-photo-of-ancienne-porte-de-la-medina-tunisie.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      username: "Omar",
      user_photo:
        "https://images.pexels.com/photos/28447096/pexels-photo-28447096/free-photo-of-portrait-d-adolescent-avec-des-lunettes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      story_photo:
        "https://images.pexels.com/photos/19150088/pexels-photo-19150088/free-photo-of-portrait-d-un-chat-poilu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      username: "Amir",
      user_photo:
        "https://images.pexels.com/photos/15142711/pexels-photo-15142711/free-photo-of-motard-en-costume-de-cuir-noir.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      story_photo:
        "https://images.pexels.com/photos/28445706/pexels-photo-28445706/free-photo-of-dattes-de-tataouine-tunisie.jpeg?auto=compress&cs=tinysrgb&w=600",  
    },

    
  ];

  return (
    <div className="stories">
      <Story type="new" />
      {stories.map((story) => (
        <Story type="old" data={story} />
      ))}
    </div>
  );
};

export default Stories;
