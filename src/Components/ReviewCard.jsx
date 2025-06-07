import React from "react";

const ReviewCard = ({ review }) => {
  const { reviewer_name,event, rating, comment, date } = review;

  return (
    <div className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] max-w-xs bg-cwhite shadow-md rounded-xl p-4 m-2 border border-gray-200 flex flex-col justify-between h-60">
    
      <div>
        <h3 className="text-lg font-semibold text-orange-500">{reviewer_name}</h3>
        <p className="text-gray-700 font-semibold text-sm mt-1 line-clamp-3">
          {comment}
        </p>
      </div>

      <div>
        
        <div className="badge badge-soft badge-primary">{event}</div>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
        <span>⭐ {rating.toFixed(1)} / 5</span>
        <span>{new Date(date).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
