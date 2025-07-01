/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAlbums } from "../features/albums/album-slice.js";

import HeaderSection from "../components/HeaderSection";
import TableSection from "../components/TableSection";
import FooterSection from "../components/FooterSection";
import SelectOptions from "../components/SelectOptions";

const HomePage = () => {
  const lightMain =
    "bg-white min-h-screen text-slate-700 flex flex-col items-center justify-center transitions-color duration-500";
  const darkMain =
    "bg-slate-800 min-h-screen text-slate-50 flex flex-col items-center justify-center transitions-color duration-500";

  const lightSelect = "py-2 px-4 bg-slate-100 text-slate-700 rounded";
  const darkSelect = "py-2 px-4 bg-slate-500 text-slate-50 rounded";

  const [lang, setLang] = useState("en");
  const [preferTheme, setPreferTheme] = useState("light");

  const { isError, isLoading, albums, errorMessage } = useSelector(
    (state) => state.albums
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  if (isLoading) {
    return (
      <>
        <main className={preferTheme === "light" ? lightMain : darkMain}>
          <h1 className="p-4 animate-pulse">Loading...</h1>
        </main>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <main className={preferTheme === "light" ? lightMain : darkMain}>
          <h1 className="p-4">{errorMessage}</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <main className={preferTheme === "light" ? lightMain : darkMain}>
        {/* Select Options */}
        <SelectOptions
          setLang={setLang}
          preferTheme={preferTheme}
          lightSelect={lightSelect}
          darkSelect={darkSelect}
          setPreferTheme={setPreferTheme}
        />

        {/* Headers */}
        <HeaderSection lang={lang} />

        {/* Content */}
        <TableSection albums={albums} />

        {/* Footer */}
        <FooterSection lang={lang} />
      </main>
    </>
  );
};

export default HomePage;
