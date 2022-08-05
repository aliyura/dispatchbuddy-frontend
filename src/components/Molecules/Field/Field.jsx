import React from "react";
import { Input } from "../../Atoms";
import FieldStyle from "./Field.style";
import {Image} from "../../Atoms";
function Field({ label, placeholder, type,icon, className }) {
  return (
    <FieldStyle>
      <label className="label">{label}</label>
      <div className="input-wrapper">
       { icon && <div className="icon">
          <Image src={icon} alt={`${label}'s icon` } />
        </div>}
        <Input type={type} placeholder={placeholder} className={ className} />
      </div>
    </FieldStyle>
  );
}

export default Field;
