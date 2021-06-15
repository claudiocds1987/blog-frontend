import React from "react";
// axios
import axios from "axios";
import { Table, Form } from "react-bootstrap";
// npm install react-router-dom
import { useHistory } from "react-router-dom";
// npm install moment --save to format date
import moment from "moment";

// css
import "./Home.css";

const Home = () => {
  const [blogs, setBlogs] = React.useState([]);
  let history = useHistory();

  const getBlogs = async () => {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      let data = res.data;
      //console.log(res.data);
      setBlogs(data);
    } catch (e) {
      alert("Error al obtener los blogs");
    }
  };

  React.useEffect(() => {
    getBlogs();
  }, []);

  const DeleteBlog = (id) => {
    const confirm = window.confirm("¿Realmente quiere eliminar la operación?");
    if (confirm) {
      try {
        axios.delete(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        )
        .then(res => {
            console.log(res);  
            //const data = res.data;
            const newBlogs = blogs.filter(item => item.id !== id);
            setBlogs(newBlogs); 
            alert('Blog borrado');
        })
      } catch (e) {
        alert("Error al eliminar la operación");
      }
    }
  };

  return (
    <div className="container mt-5">
      <div id="secondary-container">
        <div className="table-responsive">
          <Table striped bordered hover variant="dark" size="sm">
            <thead>
              <tr className="text-center">
                <th>Título</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((item) => (
                <tr key={item.id} className="text-center align-middle">
                  <td>{item.title}</td>
                  <td>
                    <button className="btn btn-info">Info</button>
                    <button className="btn btn-warning"
                        onClick={() => {
                            history.push(`/edit/${item.id}`);
                        }}
                    >
                        Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        DeleteBlog(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Home;
