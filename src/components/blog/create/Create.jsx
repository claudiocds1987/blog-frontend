import React from "react";
import axios from "axios";
// npm install react-router-dom
import { useHistory } from "react-router-dom";
// npm install react-hook-form
import { useForm } from "react-hook-form";
// npm install @hookform/resolvers yup (para las validaciones)
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// css
import "./Create.css";

const Create = () => {

  let history = useHistory();

  const schema = yup.object().shape({
    titleBlog: yup.string().required("Campo obligatorio"),
    bodyBlog: yup.string().required("Campo obligatorio"),
  });

  const {
    register,
    handleSubmit,
    //reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData, e) => {
    e.preventDefault();
    // object
    const blog = {
      title: formData.titleBlog,
      amount: formData.bodyBlog,
    };
    try {
      const res = await axios.post(
        'https://jsonplaceholder.typicode.com/posts', blog
      );
      alert('El blog ha sido creado exitosamente!');
      history.push("/home");
    } catch (e) {
      alert("Error al intentar crear el blog");
    }

};

  return (
    <div className="container">
      <div id="card-edit" className="card p-4">
        <div className="card-body">
          <h5 className="text-center mb-3">CREAR BLOG</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Título</label>
            <input
              type="text"
              name="titleBlog"
              {...register("titleBlog")}
              placeholder="Título..."
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
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
