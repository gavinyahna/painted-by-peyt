const INSTAGRAM_TOKEN = process.env.REACT_APP_INSTAGRAM_TOKEN;
const INSTAGRAM_USER_ID = process.env.REACT_APP_INSTAGRAM_USER_ID;

export const fetchInstagramPosts = async () => {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${INSTAGRAM_TOKEN}`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return [];
  }
}; 