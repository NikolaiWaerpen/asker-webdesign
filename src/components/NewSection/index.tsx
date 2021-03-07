export default function NewSection({ blueText, greyText, img }) {
  return (
    <div>
      <div className="flex justify-center uppercase font-bold text-3xl">
        <h3 className="text-blue-400">{blueText}&nbsp;</h3>
        <h3>{greyText}</h3>
      </div>
      <div className="flex space-x-4 justify-center">
        <div className="text-blue-400 font-extralight text-xs">----------</div>
        <img src={img} alt="icon" className="w-7" />
        <div className="text-blue-400 font-extralight text-xs">----------</div>
      </div>
    </div>
  );
}
