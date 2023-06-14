import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAlbums } from "../actions/actionCreator";

import en from "../i18n/en.json";
import id from "../i18n/id.json";

const HomePage = () => {
  const [lang, setLang] = useState("en");
  const [preferTheme, setPreferTheme] = useState("light");

  const lightMain =
    "bg-white min-h-screen text-slate-700 flex flex-col items-center justify-center";
  const darkMain =
    "bg-slate-800 min-h-screen text-slate-50 flex flex-col items-center justify-center";

  const lightSelect = "py-2 px-4 bg-slate-100 text-slate-700 rounded";
  const darkSelect = "py-2 px-4 bg-slate-500 text-slate-50 rounded";

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
          <h1 className="p-4">Loading...</h1>
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
        <section className="flex gap-4 mb-4">
          <div className="flex gap-4 items-center">
            <label htmlFor="theme">Theme</label>
            <select
              className={preferTheme === "light" ? lightSelect : darkSelect}
              id="theme"
              onChange={(e) => setPreferTheme(e.target.value)}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div className="flex gap-4 items-center">
            <label htmlFor="theme">Language</label>
            <select
              className={preferTheme === "light" ? lightSelect : darkSelect}
              id="theme"
              onChange={(e) => setLang(e.target.value)}
            >
              <option value="en">English</option>
              <option value="id">Indonesia</option>
            </select>
          </div>
        </section>

        {/* Headers */}
        <section>
          <h1 className="px-4 py-2 font-semibold text-xl text-center">
            {lang === "en" ? en.tableName : id.tableName}
          </h1>
          <h2 className="px-4 py-2 mb-4 font-semibold text-lg text-center">
            {lang === "en" ? en.tableDesc : id.tableDesc}
          </h2>
        </section>

        {/* Content */}
        <section className="flex justify-center mx-auto">
          <table>
            <thead>
              <tr>
                <th className="p-4 text-center font-semibold border border-slate-300 dark:border-slate-400">
                  Id
                </th>
                <th className="p-4 text-center font-semibold border border-slate-300 dark:border-slate-400">
                  Title
                </th>
              </tr>
            </thead>
            <tbody>
              {albums.slice(0, 10).map((album) => (
                <tr key={album.id}>
                  <td className="p-2 text-center border border-slate-300 dark:border-slate-400">
                    {album.id}
                  </td>
                  <td className="p-2 text-left border border-slate-300 dark:border-slate-400">
                    {album.title}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Footer */}
        <section>
          <h3 className="px-4 py-2 mt-4 font-semibold text-base text-center">
            {lang === "en" ? en.footerText : id.footerText}
          </h3>
        </section>
      </main>
    </>
  );
};

export default HomePage;
