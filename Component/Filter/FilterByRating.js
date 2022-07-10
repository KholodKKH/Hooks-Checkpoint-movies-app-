// import React, { useState } from "react";
import { Rate } from "antd";
const desc = [1, 2, 3, 4, 5];
function FilterByRating(props) {
  // const [value, setValue] = useState(3);
  return (
    <span style={{ paddingLeft: "4%" }}>
      <Rate tooltips={desc} onChange={props.setRate} value={props.rate} />
      {/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""} */}
    </span>
  );
}

export default FilterByRating;