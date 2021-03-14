import React from "react";

function FieldEmptyError(props) {
  return (
    <div>
      <label className="text-red-400">
        {props.field + " cannot be empty!"}
      </label>
    </div>
  );
}

export default FieldEmptyError;
