import PropTypes from "prop-types";


function InputWithIcon({ placeholder, type, icon, value, name, oninput }) {
  return (
    <div className="inputcontainer">
      <span>
        <i className={icon}></i>
      </span>
      <input onChange={oninput} value={value} name={name} type={type} placeholder={placeholder} />
    </div>
  );
}

InputWithIcon.propTypes={
  placeholder: PropTypes.string.isRequired, 
  type: PropTypes.oneOf(["text", "email", "password"]).isRequired,
  icon: PropTypes.string,
  value: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired, 
  oninput: PropTypes.func.isRequired,
}
export default InputWithIcon;
