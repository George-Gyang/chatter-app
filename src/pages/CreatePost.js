import React, { useState } from "react";
// import CommentComponent from "../components/CommentComponent";
// import "react-quill/dist/quill.snow.css";
// import ReactQuill from "react-quill";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";
import { BASE_URL } from "../utils/base";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [comment, setComment] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setredirect] = useState(false)

  async function createNewPost(e) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("file", files[0]);
    data.set("comment", comment);
    e.preventDefault();
    console.log(data);
    const response = await fetch(`${BASE_URL}/post`, {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setredirect(true)
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />
  }

  return (
    <div>
      <main>
        <h1 className="text-center my-5">Create Post Page</h1>
        <div>
          <form
            onSubmit={createNewPost}
            className="row onSub g-3 needs-validation"
          >
            <div className="px-5">
              <div className="my-2">
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                  value={title}
                  placeholder="Title"
                  required
                />
              </div>
              <div className="my-2">
                <input
                  type="text"
                  onChange={(e) => setSummary(e.target.value)}
                  className="form-control"
                  value={summary}
                  placeholder="Summary"
                  required
                />
              </div>
              <div className="my-2">
                <input
                  type="file"
                  onChange={(e) => setFiles(e.target.files)}
                  className="form-control"
                  required
                />
              </div>
              <div className="text_ditor">
                <ReactQuill
                  value={comment}
                  onChange={(newValue) => setComment(newValue)}
                  modules={modules}
                  formats={formats}
                />
              </div>
              <div className="my-2 d-grid">
                <button className="btn prime_bg text-light">Publish</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreatePost;
