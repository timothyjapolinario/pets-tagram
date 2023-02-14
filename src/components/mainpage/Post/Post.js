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
  return (
    <div>
      <div>
        <img src={uploaderImage} />
      </div>
      <div>{uploader}</div>
      <div>{uploadDate}</div>

      <div>
        {postImages.map((image, index) => {
          return <img src={image} key={postId + index + "img"} />;
        })}
      </div>

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
