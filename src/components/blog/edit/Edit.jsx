import React from "react";
import axios from "axios";
// npm install react-router-dom
import { useHistory, useParams } from "react-router-dom";
// npm install react-hook-form
import { useForm } from "react-hook-form";
// npm install @hookform/resolvers yup (para las validaciones)
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// css
import "./Edit.css";

const Edit = () => {
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
      // setting default values in inputs of the form
      setValue("titleBlog", res.data.title);
      setValue("bodyBlog", res.data.body);
    } catch (e) {
      alert("Error de id para obtener el blog");
      history.push("/home");
    }
  };

  const schema = yup.object().shape({
    titleBlog: yup.string().required("Campo obligatorio"),
    bodyBlog: yup.string().required("Campo obligatorio"),
  });

  const {
    register,
    setValue,
    handleSubmit,
    //reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData, e) => {
      e.preventDefault();
      const titleEdited = formData.titleBlog;  
      const contentEdited = formData.bodyBlog;
      // object
      const blogEdited = {
        userId: blog.userId,
        id: parseInt(id),
        title: titleEdited,
        amount: contentEdited,
      };

      try {
        const res = await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${id}`, blogEdited
        );
        alert('El blog ha sido editado exitosamente!');
        //reset(); // reset viene del useForm
        history.push("/home");
      } catch (e) {
        alert("Error al actualizar el blog");
      }
  };

  return (
    <div className="container">
        <div id="card-edit" className="card p-4">
          <div className="card-body">
            <h5 className="text-center mb-3">EDIT BLOG</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>T??tulo</label>
                <input
                  type="text"
                  name="titleBlog"
                  {...register("titleBlog")}
                  placeholder="T??tulo..."
                  className="form-control"
                />
                <p className="text-center">
                  <span className="small text-danger">
                    {errors.titleBlog?.message}
                  </span>
                </p>

                <label>Contenido</label>    
                <textarea
                  name="bodyBlog"
                  {...register("bodyBlog")}
                  rows="10"
                  cols="50"
                  className="form-control"
                >
                </textarea>
                <p className="text-center">
                  <span className="small text-danger">
                    {errors.bodyBlog?.message}
                  </span>
                </p>
             
                <button type="submit" className="btn btn-primary mt-1">
                    Editar
                </button>
            </form>
          </div>
        </div>
    </div>
  );
};

export default Edit;
