export default function BulletPoint({ header, content }) {
  return (
    <div className="flex">
      <div className="bg-red-600 w-8 h-8"></div>
      <div className="ml-2">
        <h4 className=" font-bold text-lg">{header}</h4>
        <p className="text-gray-500">{content}</p>
      </div>
    </div>
  );
}
