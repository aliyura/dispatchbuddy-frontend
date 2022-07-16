import React from "react";
import { Input } from "../../Atoms";
import FieldStyle from "./Field.style";

function Field({ label, placeholder, type }) {
  return (
    <FieldStyle>
      <label className="label">{label}</label>
      <Input type={type} placeholder={placeholder} />

   
    </FieldStyle>
  );
}

export default Field;
