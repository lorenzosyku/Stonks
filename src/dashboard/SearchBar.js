import React from 'react'

function SearchBar() {
  return (
    <div className="md:3/4">
      <div className="flex justify-end">
        <input type="text" placeholder="Stock Ticker" />
        <button
          className="bg-zinc-400 text-white p-1 rounded-md"
         
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        
      </div>
    </div>
  )
}

export default SearchBar
