import React from 'react';


// TODO: I doubt this needs an ID.
const SelectVersionElement = props => {
  return (
    <select className="form-control form-control-sm ml-1 mr-1"
            defaultValue={props.defaultValue}
            id={props.elementId}
            onChange={props.onChange}>
      <option value="any">any</option>
      {props.items.map(item => <option key={item} value={item}>{item}</option>)}
    </select>
  );
}

export default SelectVersionElement;
