import React from "react";

const RememberMe = ({ isChecked, setIsChecked }) => {
    return (
        <div className="flex items-center">
            <input 
            id="stayloggedin"
            name="stayloggedin"
            type="checkbox"
            className="h-4 w-4 accent-red-600 border-gray-300 rounded cursor-pointer"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
         />
         <label htmlFor="stayloggedin"className="ml-2 text-sm text-gray-900 cursor-pointer">
            Remember me
         </label>
        </div>
    );
};

export default RememberMe;