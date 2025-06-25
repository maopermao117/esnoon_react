"use client";

type Props = {
  title: string;
  type: string;
  name: string
  placeholder: string;
}

export default function Textfield({title, type, name, placeholder}:Props) {

  return (
    <>
      <div className="flex flex-col items-start w-full">
        <p className="text-center text-base font-normal text-gray-800">
          {title}
        </p>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="input input-bordered w-full border-1 border-gray-500"
        />
      </div>

    </>
  );
}