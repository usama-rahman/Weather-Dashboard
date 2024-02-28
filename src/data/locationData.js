const data = [
  {
    location: "Yorkton",
    latitute: 51.21389,
    longitute: -102.462776,
  },
  {
    location: "Warman",
    latitute: 52.321945,
    longitute: -106.584167,
  },
  {
    location: "Swift Current",
    latitute: 50.288055,
    longitute: -107.793892,
  },
  {
    location: "Melfort",
    latitute: 52.856388,
    longitute: -104.610001,
  },
];

function getLocations() {
  return data;
}

function getLocationsByName(location) {
  if (!location) return null;

  const filtered = data.filter((item) => item.location === location);

  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitute: 0,
      longitute: 0,
    };

    return defaultLocation;
  }
}

export { getLocations, getLocationsByName };
