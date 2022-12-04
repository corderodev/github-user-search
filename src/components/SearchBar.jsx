import iconSearch from "../img/search.svg";

export const SearchBar = ({username, setUsername}) => {  
  const onClick = (e) => {
    setUsername(e)
  };

  return (
    <>
      <form
        id="userForm"
        autoComplete="off"
        className="h-auto max-w-3xl flex flex-col sm:flex-row gap-5 place-items-center place-content-center bg-gh-gray m-auto px-6 py-2 rounded-3xl shadow-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex gap-2 w-full">
          <label htmlFor="inputSearch" className="flex cursor-pointer">
            <img src={iconSearch} alt="icon search" className="w-8" />
          </label>
          <input
            required
            id="inputSearch"
            type="text"
            placeholder="Search GitHub username..."
            className="w-full h-12 px-2 text-base md:text-lg font-normal text-gh-white outline-none bg-transparent"
          />
          <button
            id="btnSearch"
            onClick={() => {
              onClick(document.getElementById("inputSearch").value);
            }}
            type="button"
            className="w-32 h-fit py-1 self-center bg-gh-green text-base md:text-lg  text-gh-white rounded-md shadow-sm active:scale-95 transition-all"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};
