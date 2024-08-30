const TailWindTestTranstion = () => {
  return (
    <div>
      <div className="flex h-64 justify-center items-center">
        <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded p-5 m-3 text-white">
          Save Changes
        </button>
        <button className="transition ease-linear bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded p-5 m-3 text-white">
          Save Changes
        </button>
        <button className="transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100 rounded p-5 m-3 text-white">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default TailWindTestTranstion;