import Image from "next/image";
import errorImage from "../../public/icons/error.png";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <Image src={errorImage} alt="error" className="w-56 mb-8" />
      <div className="bg-white px-9 py-14 shadow rounded">
        <h3 className="text-3xl font-bold text-black">Well, so sorry</h3>
        <p className="text-reg font-bold text-black">
          We could not find that post.
        </p>
        <p className="mt-6 text-sm font-light text-black">{error?.message}</p>
      </div>
    </div>
  );
}
