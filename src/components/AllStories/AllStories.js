
import React from 'react';
import './AllStories.css';// Tell webpack this JS file uses this image
import AllStoriesCard from './AllStoriesCard';

function AllStories() {
    
    const recipeItem = {
     
      image: '.images/m1.jpg',
      description:'This temple is constructed and maintained by ISKCON.The "darshan mandap"  at Hare Krishna Land is tastefully decorated utilizing several forms of traditional Indian art.The idols are placed on exquisitely carved wooden "simhasanas", which were carved by a team of artists from Jaipur. These wooden simhasanas sit upon carved marble platforms. This temple is constructed and maintained by ISKCON.The "darshan mandap"  at Hare Krishna Land is tastefully decorated utilizing several forms of traditional Indian art.The idols are placed on exquisitely carved wooden "simhasanas", which were carved by a team of artists from Jaipur. These wooden simhasanas sit upon carved marble platforms. This temple is constructed and maintained by ISKCON.The "darshan mandap"  at Hare Krishna Land is tastefully decorated utilizing several forms of traditional Indian art.The idols are placed on exquisitely carved wooden "simhasanas", which were carved by a team of artists from Jaipur. These wooden simhasanas sit upon carved marble platforms.This temple is constructed and maintained by ISKCON.The "darshan mandap"  at Hare Krishna Land is tastefully decorated utilizing several forms of traditional Indian art.The idols are placed on exquisitely carved wooden "simhasanas", which were carved by a team of artists from Jaipur. These wooden simhasanas sit upon carved marble platforms'

    };
  
    const like= 193;
    const isLiked = true;


    return (
        <div className='ncards'>
            <h1>All Stories</h1>
          <div className='cards__container'>
            <div className='scards__wrapper'>
              <ul className='scards__items'>
                <AllStoriesCard
                 description={recipeItem.description}
                 liked={isLiked}
                 likeCount={like}
                />

                <AllStoriesCard
                 description={recipeItem.description}
                 liked={isLiked}
                 likeCount={like}
                />

                <AllStoriesCard
                 description={recipeItem.description}
                 liked={isLiked}
                 likeCount={like}
                />

                <AllStoriesCard
                 description={recipeItem.description}
                 liked={isLiked}
                 likeCount={like}
                />
                <AllStoriesCard
                 description={recipeItem.description}
                 liked={isLiked}
                 likeCount={like}
                />
                <AllStoriesCard
                 description={recipeItem.description}
                 liked={isLiked}
                 likeCount={like}
                />
                <AllStoriesCard
                 description={recipeItem.description}
                 liked={isLiked}
                 likeCount={like}
                />
              </ul>
            </div>
          </div>
        </div>
      );
  }
 
  export default AllStories;



