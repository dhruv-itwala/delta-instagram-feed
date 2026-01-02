import { getCache, isCacheValid, setCache } from "./instagram.util.js";
import { fetchInstagramFeed } from "./instagram.services.js";

export const getInstagramFeed = async (req, res) => {
  try {
    if (isCacheValid() && getCache()) {
      return res.status(200).json(getCache());
    }

    const feed = await fetchInstagramFeed();
    setCache(feed);

    return res.status(200).json(feed);
  } catch (error) {
    console.error("Instagram Feed Error:", error.message);

    return res.status(500).json({
      message: "Unable to fetch Instagram feed",
    });
  }
};
