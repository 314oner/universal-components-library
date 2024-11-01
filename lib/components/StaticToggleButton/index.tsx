import React from 'react';

export const StaticToggleButton = React.forwardRef(() => {
  return (
    <div className="flex items-center justify-center w-full my-8">
      <span className="mx-5 text-xs">Toggle me!</span>
      <label
        htmlFor="toggle"
        className="flex items-center cursor-pointer"
      >
        <input
          type="checkbox"
          id="toggle"
          className="sr-only peer"
        />
        <div className="relative block w-16 p-1 bg-blue-900 rounded-full h-9 before:absolute before:bg-blue-600 before:w-7 before:h-7 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-8 peer-checked:before:bg-white"></div>
      </label>
    </div>
  );
});

StaticToggleButton.displayName = 'StaticToggleButton';

export default StaticToggleButton;
