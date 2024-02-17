import HeartIcon from "../../assets/heart.svg";
import RedHeartIcon from "../../assets/heart-red.svg";

import { useContext, useEffect, useState } from "react";
import { FavouriteContext, WeatherContext } from "../../context";

function AddToFavourite() {
  const { favourite, addToFavourites, removeFromFavourits } =
    useContext(FavouriteContext);

  const { weatherData } = useContext(WeatherContext);
  console.log(weatherData);

  const [isFavourite, toggleFavourite] = useState(false);

  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favourite.find((fav) => fav.location);
    toggleFavourite(found);
  }, []);

  const handleFavourites = () => {
    const found = favourite.find((fav) => fav.location === location);

    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourits(location);
    }

    toggleFavourite(!isFavourite);
  };

  return (
    <>
      <div className="md:col-span-2">
        <div className="flex items-center justify-end space-x-6">
          <button
            onClick={handleFavourites}
            className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          >
            <span>Add to Favourite</span>
            <img src={isFavourite ? RedHeartIcon : HeartIcon} alt="HeartIcon" />
          </button>
        </div>
      </div>
    </>
  );
}
export default AddToFavourite;
