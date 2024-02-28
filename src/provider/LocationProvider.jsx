/* eslint-disable react/prop-types */

import { useState } from "react";
import { LocationContext } from "../context";

const LocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState({
    location: "",
    latitute: 0,
    longitute: 0,
  });

  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
