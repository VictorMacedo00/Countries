import React, { useCallback, useState } from 'react'

export const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const request = useCallback(async (url, options) => {
        let response;
        let json;

        try {
            setLoading(true);
            response = await fetch(url, options);
            json = await response.json();
        } catch {
            json = null;
        } finally {
            setData(json);
            setLoading(false);
            return {response, json};
        }
    }, []);

  return {data, loading, request, setData};
}