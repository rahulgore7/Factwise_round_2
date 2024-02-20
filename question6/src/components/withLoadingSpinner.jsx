import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const withLoadingSpinner = (WrapperComponent, fetchedData) => {
  return () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetchedData()
        .then((results) => {
          setData(results);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, []);
    if (loading) {
      return <h1>Loading....</h1>;
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return <WrapperComponent data={data} />;
  };
};

export default withLoadingSpinner;
