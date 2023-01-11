import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://i.postimg.cc/YCGdgvBT/crop.jpg",
      desc: "That`s me",
      img: "https://i.postimg.cc/YCGdgvBT/crop.jpg",
    },
    {
      id: 2,
      name: "John Doe",
      userId: 2,
      profilePic:
        "https://i.postimg.cc/YCGdgvBT/crop.jpg",
      desc: "I`m really good cat-buisenessman!!!",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
