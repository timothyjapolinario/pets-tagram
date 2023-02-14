import ImageCarousel from "./ImageCarousel";

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
    <div>
      <div className="flex items-center gap-[.5vw] mb-[3vh]">
        <div className="bg-gradient-to-r from-[#7928ca] to-[#ff0080] rounded-full">
          <img
            src={uploaderImage}
            className="rounded-full h-[5vh] border-white border-2 m-[0.3vh]"
          />
        </div>
        <div>{uploader}</div>
        <div className="text-gray-500">•</div>
        <div className="text-gray-500 text-[.8em]">
          {getDaysDuration(postedDate)}
        </div>
      </div>

      <ImageCarousel imageList={postImages} />

      <div>
        <div>
          <span>Heart</span>
          <span>Comment</span>
          <span>Share</span>
          <span>BookM</span>
        </div>
        <div>{numLikes + "likes"}</div>
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
