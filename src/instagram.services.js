import fetch from "node-fetch";

export const fetchInstagramFeed = async () => {
  const fields = ["id", "media_type", "media_url", "permalink"].join(",");

  const url = `${process.env.INSTAGRAM_BASE_URL}/${process.env.INSTAGRAM_ACCOUNT_ID}/media?fields=${fields}&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`;

  const response = await fetch(url);

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Instagram API failed: ${err}`);
  }

  const result = await response.json();

  return result.data.filter(
    (post) =>
      post.media_type === "IMAGE" ||
      post.media_type === "CAROUSEL_ALBUM" ||
      post.media_type === "VIDEO"
  );
};
