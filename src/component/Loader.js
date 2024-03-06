import React from "react";

export default function Loader() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-4 py-8 ">
        <div className="text-center">
          <div
            class="animate-spin inline-block size-6 md:size-8  border-[3px] border-current border-t-transparent text-gray-400 rounded-full"
            role="status"
            aria-label="loading"
          >
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div className="text-base md:text-lg xl:text-2xl font-bold mb-4 text-center text-indigo-500">
          Awaiting for identity <br /> verification via Digilocker.
        </div>
        <div className="text-center font-bold text-gray-500">
          If not redirected automatically,
          <br /> login through the link below
        </div>
        <a
          href="#"
          className="flex justify-center gap-4 flex-row mt-2  px-4 py-2 rounded-md font-medium text-[#147cdef1]"
        >
          <svg
            className=" size-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: "#147cdef1" }}
          >
            <g>
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z" />
            </g>
          </svg>
          Login to Digilocker
        </a>
        <div className="mt-6 text-center text-gray-400 text-sm">
          Powered By Bureau
        </div>
      </div>
    </div>
  );
}
