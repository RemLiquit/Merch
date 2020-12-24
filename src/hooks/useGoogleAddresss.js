import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API =
    "https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC90VNB08owtoX_YE-W5o7KMQ1j5pgA3aM";
  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
  }, []);
};

export default useGoogleAddress;
