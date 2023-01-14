import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "You are good!",
      name: "Jane Doe",
      userId: 1,
      profilePicture:
        "https://i.postimg.cc/5tyksszK/cat.png",
    },
    {
      id: 2,
      desc: "Same think in my head",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://i.postimg.cc/5tyksszK/cat.png",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src='https://i.postimg.cc/YCGdgvBT/crop.jpg' alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
