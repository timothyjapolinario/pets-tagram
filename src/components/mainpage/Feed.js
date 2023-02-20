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
        console.log(modifiedResponse);
        setPosts(modifiedResponse);
      });
  }, []);
  return (
    <div className="flex flex-col gap-14 px-2">
      {posts.map((post) => {
        return (
          <Post
            postId={post.id}
            uploader={post.owner.firstName}
            uploaderImage={post.owner.picture}
            uploadDate={post.publishDate}
            postImages={[
              post.image,
              "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__340.jpg",
            ]}
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
