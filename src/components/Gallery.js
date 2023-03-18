import React from 'react';
import Posting from './Posting';

const craigPosts = require('../postings')
                
let postList = craigPosts.postings.map((data, i) => {
  return <Posting data={data} key={i} />
})

function Gallery(){
    return (
      <div>
        <h1>Gallery</h1>
        <div>
            {postList}
        </div>
      </div>
    )
}

export default Gallery;