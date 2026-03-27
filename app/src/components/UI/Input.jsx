'use client';

import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Input = ({
  type,
  label,
  placeholder,
  option = [],
  value,
  onChange,
  name,
  required = false,
  inputProps = {},
}) => {

  const [previews, setPreviews] = useState([]);

  // Handle file preview
  const handlePreview = (files) => {
    const fileArray = Array.from(files || []);
    const urls = fileArray.map((file) => URL.createObjectURL(file));
    setPreviews(urls);
  };

  // Cleanup memory 
  useEffect(() => {
    return () => {
      previews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previews]);

  return (
    <div className={`w-full ${type === "hidden" ? "hidden" : "block"}`}>
      
      {/* Label */}
      {type !== "hidden" && type !== "checkbox" && (
        <label className="block mx-1 text-sm font-medium text-header-text">
          {label}
          {required && <span className="text-error">*</span>}
        </label>
      )}

      {/* Select */}
      {type === "select" ? (
        <select
          id={name}
          name={name}
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full text-text outline-none focus:ring-primary/50"
          value={value}
          onChange={onChange}
          required={required}
          {...inputProps}
        >
          <option value="">-- select {name} --</option>
          {option.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

      ) : type === "radio" ? (

        <div className="flex items-center gap-4">
          {option.map((opt) => (
            <label key={opt.value} className="inline-flex items-center">
              <input
                type="radio"
                value={opt.value}
                name={name}
                onChange={onChange}
                required={required}
                {...inputProps}
                className="text-primary/50"
              />
              <span className="ml-2">{opt.label}</span>
            </label>
          ))}
        </div>

      ) : type === "checkbox" ? (

        <div className="flex items-center">
          <input
            type="checkbox"
            id={name}
            name={name}
            onChange={onChange}
            checked={!!value}
            required={required}
            className="accent-primary cursor-pointer"
          />
          <span className="mx-1 text-sm font-medium text-header-text">
            {label}
          </span>
        </div>

      ) : type === "file" ? (

        <div className="flex flex-col gap-2">
          <input
            type="file"
            name={name}
            id={name}
            required={required}
            onChange={(e) => {
              handlePreview(e.target.files)
              if (onChange) onChange(e)
            }}
            className="w-full ring-[1.5px] ring-gray-300 p-2 text-text rounded-md text-sm outline-none focus:ring-primary/50"
            {...inputProps}
          />

          {/* Preview Grid */}
          {previews.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {previews.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`preview-${index}`}
                  className="w-24 h-24 object-cover rounded-md border"
                />
              ))}
            </div>
          )}
        </div>

      ) : (

        <input
          type={type}
          placeholder={placeholder}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full ring-[1.5px] ring-gray-300 p-2 text-text rounded-md text-sm outline-none focus:ring-primary/50"
          {...inputProps}
        />

      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  option: PropTypes.array,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  inputProps: PropTypes.object,
};

export default Input;
