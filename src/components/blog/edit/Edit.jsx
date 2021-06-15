import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// npm install react-router-dom
import { useHistory } from "react-router-dom";
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
      alert("Error al obtener el blog");
    }
  };

  const schema = yup.object().shape({
    titleBlog: yup.string().required("Campo obligatorio"),
    bodyBlog: yup.number().required("Campo obligatorio"),
  });

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    // defaultValues: {
    //   concept: ""
    //   amount: "amountDefault",
    // }
  });

  const onSubmit = (formData, e) => {
    console.log("ON SUBMIT");
  };

  return (
    <div className="container">
        <div id="card-edit" className="card p-4">
          <div className="card-body">
            <h5 className="text-center mb-3">EDIT BLOG</h5>
            <form>
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
                    {errors.concept?.message}
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
            </form>
          </div>
        </div>
    </div>
  );
};

export default Edit;