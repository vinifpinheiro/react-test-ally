import { useEffect, useState } from "react";
import { ICountry } from "../interfaces/ICountry";
import httpDefault from "../services/servicesApi";

export const useGetCountry = () => {
  const [getDataCountry, setGetDataCountry] = useState<ICountry[]>([]);

  useEffect(() => {
    httpDefault
      .get(`/country`)
      .then((response) => setGetDataCountry(response.data));
  }, []);
  return {
    getDataCountry,
  };
};
