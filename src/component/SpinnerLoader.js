// SpinnerLoader.js

import React from "react";

const SpinnerLoader = () => {
  return (
    <div
      class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-gray-400 rounded-full"
      role="status"
      aria-label="loading"
    >
      <span class="sr-only">Loading...</span>
    </div>
  );
};

export default SpinnerLoader;
