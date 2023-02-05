export default function Profile({ name, position, image }) {
  return (
    <div className="border border-black text-center bg-white">
      <div className="flex aspect-1 justify-center items-center">
        <div className="bg-gooBlue-500 aspect-1 h-56 rounded-full border border-black">
          <img src={image} /*alt={name + " profile"}*/ />
        </div>
      </div>
      <div className="mb-8">
        <h3 className="font-gooBold text-2xl">{name}</h3>
        <p className="font-gooReg text-lg">{position}</p>
      </div>
    </div>
  );
}
