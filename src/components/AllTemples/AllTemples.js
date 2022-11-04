import React from 'react';
import '../AllStories/AllStories.css';// Tell webpack this JS file uses this image
import AllStoriesCard from '../AllStories/AllStoriesCard';

function AllTemples() {
    
    const recipeItem = {
     
      image: '.images/m1.jpg',
      description:
        "Bu kremsi ve baharatlı avokado sosu, günlük taco larınızı hazırlamak,için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir,  ancak bazı vegan enchiladalara da harika bir katkı sağlar. ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar ."
    };
  
    const like= 193;
    const isLiked = true;


    return (
        <div className='ncards'>
            <h1>All Temples</h1>
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
              </ul>
            </div>
          </div>
        </div>
      );
  }
 
  export default AllTemples;