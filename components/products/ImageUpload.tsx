"use client";
import { PhotoIcon } from "@heroicons/react/16/solid";
import { CldUploadWidget } from "next-cloudinary";

export default function ImageUpload() {
  return (
    <div>
      <CldUploadWidget
        onSuccess={(result, { widget }) => {
          console.log(result);
        }}
        uploadPreset="b5ju4j4h"
        options={{
          maxFiles: 1,
        }}
      >
        {({ open }) => (
          <>
            <div className=" space-y-2">
              <label className=" text-slate-800">Products image</label>
              <div
                className=" relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100"
                onClick={() => open()}
              >
                <PhotoIcon width={20} />
                <p className=" text-lg from-transparent">Add image</p>
              </div>
            </div>
          </>
        )}
      </CldUploadWidget>
    </div>
  );
}
