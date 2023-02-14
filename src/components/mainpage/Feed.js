import { useEffect, useState } from "react";
import Post from "./Post/Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://dummyapi.io/data/v1/post?limit=5", {
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
      .then((response) => {
        const modifiedResponse = response.data.map((post) => {
          return { ...post, isLiked: false };
        });
        setPosts(modifiedResponse);
      });
  }, []);
  return (
    <div className="flex flex-col gap-14">
      {posts.map((post) => {
        return (
          <Post
            postId={post.id}
            uploader={post.owner.firstName}
            uploaderImage={post.owner.picture}
            uploadDate={post.publishDate}
            postImages={[post.image, post.image]}
            postText={post.text}
            comments={["Comment1", "Comment2"]}
            isLiked={post.isLiked}
            numLikes={post.likes}
            key={post.id}
          />
        );
      })}
    </div>
  );
};

export default Feed;
