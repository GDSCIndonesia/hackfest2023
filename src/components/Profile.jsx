export default function Profile({ name, position, image }) {
  return (
    <div className="border border-black text-center bg-white p-4 m-2">
      <div className="flex justify-center items-center">
        <div className="bg-black w-full aspect-1 max-h-[200px] max-w-[200px] m-12 lg:m-4 xl:m-12 rounded-full border border-black">
          <img
            className={
              "rounded-full object-cover w-full h-full " +
              (image ? "" : "hidden")
            }
            src={image}
            alt={image}
          />
        </div>
      </div>
      <div>
        <h3 className="font-gooBold text-xl mb-2">{name}</h3>
        <p className="font-gooReg text-base">{position}</p>
      </div>
    </div>
  );
}
