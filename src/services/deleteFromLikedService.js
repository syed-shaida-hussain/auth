import axios from "axios";

const deteteFromLikedService = async (token, videoId) => {
    try {
      await axios.delete(`/api/user/likes/${videoId}` , {headers : {authorization : token} , });
    } catch(e) {
      console.log(e)
    }
  }

  export { deteteFromLikedService }