import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire state building",
    description: "Famous sky scapper",
    imageUrl: "https://upload.wikimedia.org/wikipedia/it/thumb/6/62/Mario_Rossi_%28direttore_d%27orchestra%29.jpg/1024px-Mario_Rossi_%28direttore_d%27orchestra%29.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire state building",
    description: "Famous sky scapper",
    imageUrl: "https://upload.wikimedia.org/wikipedia/it/thumb/6/62/Mario_Rossi_%28direttore_d%27orchestra%29.jpg/1024px-Mario_Rossi_%28direttore_d%27orchestra%29.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  //state
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  //functions
  const fetchPlaces = () => {
    const loadedPlacesData = DUMMY_PLACES.filter((place) => place.creator === params);
    setLoadedPlaces(loadedPlacesData);
  };

  //hooks
  const params = useParams().userId;
  useEffect(() => {
    fetchPlaces();
  }, []);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
