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

  return (
    <div className="container">
      <h1>Hola</h1>
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
            {blogs.map(item => (
                <tr key={item.id} className="text-center align-middle">
                  <td>{item.title}</td>
                  <td>
                    <button className="btn btn-info">Info</button>
                    <button className="btn btn-warning">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
             ))
            }
              {/* {blogs.map((item) => {
                <tr key={item.id} className="text-center align-middle">
                  <td>{item.title}</td>
                  <td>
                    <button className="btn btn-info">Info</button>
                    <button className="btn btn-warning">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              })} */}

              {/* <tr>
                <td> aca el titulo del blog</td>
                <td>
                  <button className="btn btn-info">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr> */}
              {/* {stateFilter
                .slice(pagesVisited, pagesVisited + itemsPerPage)
                .map((item) => (
                  <tr key={cont++} className="text-center align-middle">
                    <td>{moment(item.date).format("DD/MM/YYYY")}</td>
                    <td>{item.concept}</td>
                    <td>{item.amount}</td>
                    <td>{item.type}</td>
                    <td>{item.category}</td>
                    <div className="text-center">
                      <button
                        className="btn btn-primary"
                        //to="/EditOperation"
                        onClick={() => {
                          history.push(`/editOperation/${item.id_operation}`);
                        }}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          Delete(item.id_operation, item.amount, item.type);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </tr>
                ))} */}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Home;
