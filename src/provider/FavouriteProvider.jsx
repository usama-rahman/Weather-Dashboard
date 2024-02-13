/* eslint-disable react/prop-types */
import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavouriteProvider = ({ children }) => {
  const [favourite, setFavourite] = useLocalStorage("favourites", []);

  const addToFavourites = (latitude, longitute, location) => {
    setFavourite([
      ...favourite,
      {
        latitude: latitude,
        longitute: longitute,
        location: location,
      },
    ]);
  };

  const removeFromFavourits = (location) => {
    const restFavourite = favourite.filter((fav) => fav.location !== location);
    setFavourite(restFavourite);
  };

  return (
    <FavouriteContext.Provider
      value={{ favourite, addToFavourites, removeFromFavourits }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
