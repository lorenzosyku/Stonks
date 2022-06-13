import React from "react";

function AssetAllocation() {
  return (
    <div className="flex bg-slate-50">
      <div className="bg-slate-200 flex justify-center items-center">👍</div>
      <div className="flex flex-col flex-grow space-y-3">
        <div className="flex justify-between items-center px-5 pt-2">
          <div>
            <p className="font-semibold">unibright</p>
            <p className="text-sm text-stone-500">ubt=$0.38</p>
          </div>
          <div>
            <p className="font-semibold">12,345 UBT</p>
            <p className="text-sm text-stone-500">$ 3690</p>
          </div>
        </div>
        <div className="px-5 pb-2">
          <div className="w-full bg-gray-200 rounded-full">
            <div
              className="bg-blue-600 text-xs w-1/4 font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
              
            >
              {" "}
              25%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetAllocation;
