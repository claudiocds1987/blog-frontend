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
        <div className="col-md-5 mt-5">
            <p>Create Blog</p>
        </div>
     );
}
 
export default Create;