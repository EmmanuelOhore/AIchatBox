function InputWithIcon({ placeholder, type, icon }) {
  return (
    <div className="inputcontainer">
      <span>
        <i className={icon}></i>
      </span>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

export default InputWithIcon;
