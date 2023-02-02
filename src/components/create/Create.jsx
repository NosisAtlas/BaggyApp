import { React, useState } from "react";
import "./create.css";
// import { IoIosAddCircleOutline } from "react-icons/io";
import axios from "axios";

export const Create = () => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const changeHandler = (event) => {
    setImage(event.target.files[0]);
  };
  //birah36094@breazeim.com mockdata
  const postData = () => {
    axios.post(`https://63d711d65dbd7232441fd607.mockapi.io/baggy/postData`, {
      title,
      image,
      content,
    });
  };

  return (
    <>
      <section className="newPost">
        <div className="container boxItems">
          <div className="img ">
            <img
              src="https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              class="image-preview"
            />
          </div>
          <form>
            <div className="inputfile flexCenter">
              <input
                type="file"
                onChange={changeHandler}
                name="image"
                accept="image/*"
                alt="img"
              />
            </div>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              placeholder="Title"
            />

            <textarea
              onChange={(e) => setContent(e.target.value)}
              name="content"
              id=""
              cols="30"
              rows="10"
            ></textarea>

            <button onClick={postData} type="submit" className="button">
              Create Post
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Create;
