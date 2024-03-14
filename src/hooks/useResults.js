import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const searchApi = async (searchTerm) => {
    try {
        const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      // console.log(response.data.businesses);
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMsg("something went wrong");
      // console.log(err);
    }
  };

  // call searchApi when component is first rendered.
  useEffect(() => {
    searchApi('pasta')
  }, []);

  return [searchApi, results, errorMsg]
}