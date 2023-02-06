export default function Profile({ name, position, image }) {
  return (
    <div className="border border-black text-center bg-white p-4">
      <div className="flex justify-center items-center">
        <div className="bg-gooBlue-500 w-full h-full aspect-1 m-12 xl:m-12 lg:m-8 rounded-full border border-black">
          <img src={image} /*alt={name + " profile"}*/ />
        </div>
      </div>
      <div className="mb-8">
        <h3 className="font-gooBold text-xl 2xl:text-2xl mb-2">{name}</h3>
        <p className="font-gooReg text-md 2xl:text-lg">{position}</p>
      </div>
    </div>
  );
}
