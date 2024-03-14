import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      // "Bearer Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx",
      "Bearer Viohib4awEbVPfdFff0BVBXUu6V9X1cHw_DqHLo84ptw56l33ScP_7Z_11tJ-uJVctD4xr7nPT9gg0dMelxzj-kGd9EffmKKbgwSgFVkxTNw8GWqODuFivdZ2tTdZXYx"
  }
});
