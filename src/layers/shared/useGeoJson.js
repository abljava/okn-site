import { useEffect, useState } from "react";

const cache = new Map();
const inflight = new Map();

export function fetchGeoJson(url) {
  if (cache.has(url)) return Promise.resolve(cache.get(url));
  if (inflight.has(url)) return inflight.get(url);

  const request = fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Не удалось загрузить ${url}: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      cache.set(url, data);
      inflight.delete(url);
      return data;
    })
    .catch((error) => {
      inflight.delete(url);
      throw error;
    });

  inflight.set(url, request);
  return request;
}

export function useGeoJson(url) {
  const [data, setData] = useState(() => cache.get(url) ?? null);

  useEffect(() => {
    if (!url) return undefined;
    if (cache.has(url)) {
      setData(cache.get(url));
      return undefined;
    }

    let cancelled = false;
    fetchGeoJson(url)
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  return data;
}
