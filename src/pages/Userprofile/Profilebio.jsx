import React from 'react';

const Profilebio = ({ currentprofile }) => {
  const tags = currentprofile?.tags ?? [];

  return (
    <div>
      <div>
        {Array.isArray(tags) && tags.length !== 0 ? (
          <>
            <h4>Tags watched</h4>
            {tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </>
        ) : (
          <p>0 Tags watched</p>
        )}
      </div>
      <div>
        {currentprofile?.about ? (
          <> 
            <h4>About</h4>
            <p>{currentprofile?.about}</p>
          </>
        ) : (
          <p>No bio found</p>
        )}
      </div>
    </div>
  );
};

export default Profilebio;
