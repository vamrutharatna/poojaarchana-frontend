import React, { useState, useEffect } from 'react';
import './AllStories.css';// Tell webpack this JS file uses this image
import AllStoriesCard from './AllStoriesCard';
import { myAxios } from '../../services/Helper'

function AllStories() {

  // const [post, setPost] = React.useState(null);
  // React.useEffect(() => {
  //   axios.get("http://localhost:8081/category/all").then((response) => {
  //     setPost(response.data);

  //     console.log(response.data);
  //   });
  // }, []);


  const [story, setStory] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await myAxios.get("/story/all");
        setStory(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  return (
    <div className='scards'>
        <h1>All Stories</h1>
      <div className='scards__container'>
        <div className='scards__wrapper'>
        {story.map((index, el) => {

            return <AllStoriesCard storyTitle={index.title} />

            // console.log(el.category);
            // if (index.id === 7) {
            //   return <AllStoriesCard
            //     categoryTitle={index.title}
            //   // description={el.categoryDescription}
            //   />
            // }
            // else if (index.id === 4) {
            //   return <AllStoriesCard
            //     categoryTitle={index.title}
            //   // description={el.categoryDescription}
            //   />
            // }
            })
            }
            <AllStoriesCard
              title="Ramayana"
              description="The Tale of Rama and Seetha....."
              path="/episodes"
            />
            <AllStoriesCard
              title="MahaBharat"
              description="The War between good and bad....."
            />
            <AllStoriesCard
              title="BhagavadGita"
              description="Slokas....."
            />
            <AllStoriesCard
              title="RadhaKrishna"
              description="The Tale of Radha and Krishna....."
            />
        </div>
      </div>
    </div>
  );
}

  

export default AllStories;
