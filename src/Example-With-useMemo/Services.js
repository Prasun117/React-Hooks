import axios from "axios";
export const getApiData = async (callback_fn) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return callback_fn(res.data);
  } catch (e) {
    callback_fn(null);
  }
};
