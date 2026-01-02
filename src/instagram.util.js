let cache = {
  data: null,
  lastFetched: 0,
};

const CACHE_DURATION = 1000 * 60 * 60 * 3; // 3 hours

export const isCacheValid = () =>
  Date.now() - cache.lastFetched < CACHE_DURATION;

export const getCache = () => cache.data;

export const setCache = (data) => {
  cache = {
    data,
    lastFetched: Date.now(),
  };
};
