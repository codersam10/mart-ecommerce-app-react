import { FaStar } from "react-icons/fa";
import { createElement } from "react";

const StarRatings = ({
  rating,
}: {
  rating: number | undefined;
}): JSX.Element => {
  return (
    <div className=" flex h-10 py-3">
      {Array(Math.floor(rating ?? 0))
        .fill(0)
        .map((_, index) =>
          createElement(FaStar, {
            key: index,
            style: { color: "hsl(50, 100%, 50%)" },
          })
        )}
    </div>
  );
};

export default StarRatings;
