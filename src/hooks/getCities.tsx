import { useEffect, useState } from "react";
import { ICyties } from "../interfaces/ICities";
import httpDefault from "../services/servicesApi";

export const useGetCityes = () => {
  const [getDataCities, setGetDataCities] = useState<ICyties[]>([]);

  useEffect(() => {
    httpDefault
      .get(`/city`)
      .then((response) => setGetDataCities(response.data));
  }, []);
  return {
    getDataCities,
  };
};
