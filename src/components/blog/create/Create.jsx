import React from "react";
// npm install react-router-dom
import { useHistory } from "react-router-dom";
// spinner loader
import { Spinner } from "react-bootstrap";
// npm install react-hook-form
import { useForm } from "react-hook-form";
// npm install @hookform/resolvers yup (para las validaciones)
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// css
import "./Create.css";

const Create = () => {
  return (
    <div className="container">
      <div id="card-edit" className="card p-4">
        <div className="card-body">
          <h5 className="text-center mb-3">EDIT BLOG</h5>
          {/* <form onSubmit={handleSubmit(onSubmit)}>
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
              Write something here
            </textarea>
            <p className="text-center">
              <span className="small text-danger">
                {errors.bodyBlog?.message}
              </span>
            </p>

            <button type="submit" className="btn btn-primary mt-1">
              Editar
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Create;
