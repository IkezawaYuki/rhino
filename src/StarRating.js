import React, { useState } from "react";


export default function StarRating({ style = {}, totalStarts = 5, ...props }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div style={{ padding: "5px", ...style }} {...props}>
      {[...Array(totalStarts)].map((n, i) => (
        <Star 
        key={i} 
        selected={selectedStars > i} 
        onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStarts} starts
      </p>
    </div>
  );
}