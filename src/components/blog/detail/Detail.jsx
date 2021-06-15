import React from "react";
// npm install react-router-dom
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
// css
import "./Detail.css";

const Detail = () => {
  //getting id_operation from url
  const { id } = useParams();
  const [blog, setBlog] = React.useState([]);
  let history = useHistory();

  React.useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    try {
      let res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      let data = res.data;
      setBlog(data);
    } catch (e) {
      alert("Error de id para obtener el detalle del blog");
      history.push("/home");
    }
  };

  return (
    <div className = "container">
      <div id="card-detail" className="card p-2">
        <div className="card-body">
            <h2 className="text-center">DETALLE:</h2>
             <p>userId: {blog.userId}</p>
             <p>id: {blog.id}</p>
             <p>Título: {blog.title}</p>
             <p>body: {blog.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
