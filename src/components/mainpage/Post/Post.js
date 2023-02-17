import ImageCarousel from "./ImageCarousel";
import heartIcon from "../../../assets/heart-icon.png";
const getDaysDuration = (postedDate) => {
  const currentDate = new Date();
  const diff = currentDate - postedDate;
  const daysDiff = Math.ceil(diff / (1000 * 3600 * 24));

  if (daysDiff < 7) {
    return `${daysDiff}d`;
  }

  if (daysDiff < 31) {
    return `${daysDiff / 7}w`;
  }

  if (daysDiff < 365) {
    return `${daysDiff / 12}m`;
  }

  return `${Math.round(daysDiff / 365)}y`;
};

const loadComments = async (postId) => {
  fetch(`https://dummyapi.io/data/v1/post/${postId}`, {
    headers: {
      "app-id": "63e1a5056fe57421fc54e735",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((responseObj) => {
      console.log(responseObj.data);
    });
};

const Post = ({
  postId,
  uploader,
  uploaderImage,
  uploadDate,
  postImages,
  postText,
  comments,
  isLiked,
  numLikes,
}) => {
  const postedDate = new Date(uploadDate);

  return (
    <div className="border-b-2">
      <div className="flex items-center gap-[.5vw] mb-[3vh]">
        <div className="bg-gradient-to-r from-[#7928ca] to-[#ff0080] rounded-full w-fit">
          <img
            src={uploaderImage}
            className="rounded-full h-[5vh] border-white border-2 m-[0.3vh] "
          />
        </div>
        <div>{uploader}</div>
        <div className="text-gray-500">•</div>
        <div className="text-gray-500 text-[.8em]">
          {getDaysDuration(postedDate)}
        </div>
      </div>

      <ImageCarousel imageList={postImages} />

      <div className="grid m-3 gap-2">
        <div className="flex w-full justify-between">
          <div className="flex gap-3">
            <svg
              aria-label="Like"
              className="_ab6-"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
            </svg>

            <svg
              aria-label="Comment"
              className="_ab6-"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>

            <svg
              aria-label="Share Post"
              className="_ab6-"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <line
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="22"
                x2="9.218"
                y1="3"
                y2="10.083"
              ></line>
              <polygon
                fill="none"
                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
              ></polygon>
            </svg>
          </div>

          <div>
            <svg
              aria-label="Save"
              className="_ab6-"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></polygon>
            </svg>
          </div>
        </div>
        <div className="font-bold">{numLikes + "likes"}</div>
        <div>{postText}</div>
      </div>

      <div>
        <div>{comments}</div>
        <div></div>
      </div>
    </div>
  );
};

export default Post;
