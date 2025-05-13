const StarRating = ({ rating, maxStars = 5 }) => {
    return (
      <div className="rating flex ">
        {[...Array(maxStars)].map((_, index) => {
          const starValue = index + 1;
          const isFull = starValue <= Math.floor(rating);
          const isHalf = starValue === Math.ceil(rating) && rating % 1 !== 0;
  
          return (
            <div key={index} className="relative bg-transparent">
              {/* Full Star */}
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-[#F9C004]"
                disabled
                style={{ opacity: isFull ? 1 : 0.3 }}
              />
  
              {/* Half Star (Overlays on Full Star) */}
              {isHalf && (
                <div className="absolute top-0 left-0 w-1/2 h-full bg-[#F9C004] mask mask-star-2"></div>
              )}
            </div>
          );
        })}
      </div>
    );
  };
  
  export default StarRating;