export default function InfoSection({ headerText, infoText }) {
  return (
    <div>
      <div className="space-y-3 p-10">
        <div className="bg-red-600 w-10 h-10 flex justify-center" />
        {/* <div className="w-10 h-10">{children}</div> */}
        <h4 className="text-lg font-bold flex justify-center">{headerText}</h4>
        <p className="text-gray-500 flecx justify-center">{infoText}</p>
      </div>
    </div>
  );
}
