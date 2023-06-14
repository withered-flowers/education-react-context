/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAlbums } from "../actions/actionCreator";

import en from "../i18n/en.json";
import id from "../i18n/id.json";

// Ceritanya ini file contexts/context.js
// TODO: 21. Karena nanti di sini akan berisi "Component", maka rename menjadi context.jsx
// Ceritanya ini sekarang menjadi contexts/context.jsx
import { createContext } from "react";

// TODO: 1. Sekarang kita akan membuat context untuk tema dan bahasa
export const ThemeContext = createContext(null);
export const LanguageContext = createContext(null);

// TODO: 23. Declare component ThemeProvider
export const ThemeProvider = ({ children }) => {
  // TODO: 24. Declare state dan return ThemeContext.Provider
  // Karena sekarang di sini sudah menjadi "Component"
  // Kita bisa mendeclare state dan informasi yang dibutuhkan di sini dengan lebih leluasa
  const [preferTheme, setPreferTheme] = useState("light");

  // TODO: 32. Memindahkan lightMain dan darkMain ke sini
  const lightMain =
    "bg-white min-h-screen text-slate-700 flex flex-col items-center justify-center transitions-color duration-500";
  const darkMain =
    "bg-slate-800 min-h-screen text-slate-50 flex flex-col items-center justify-center transitions-color duration-500";

  return (
    // TODO: 33. Tambahkan lightMain dan darkMain ke sini
    <ThemeContext.Provider
      value={{ preferTheme, setPreferTheme, lightMain, darkMain }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
// TODO: 22. Karena nanti di sini akan berisi "Component", maka rename menjadi context.jsx
// --- END OF FILE: context/context.js
// END OF FILE: context/context.jsx

// Ceritanya ini components/HeaderSection.jsx
// TODO: 4. Import useContext untuk digunakan pada Component anakan
import { useContext } from "react";

// TODO: 5. Menghapus props lang karena sudah tidak digunakan
const HeaderSection = () => {
  // TODO: 6. Menggunakan useContext untuk mengambil value dari context yang telah dibuat
  // const lang = useContext(LanguageContext);

  // TODO: 15. Karena LanguageContext punya value sudah menjadi Object, sehingga bisa destructuring
  const { lang } = useContext(LanguageContext);

  return (
    <section className="border border-red-400 mb-4">
      <h1 className="px-4 py-2 font-semibold text-xl text-center">
        {lang === "en" ? en.tableName : id.tableName}
      </h1>
      <h2 className="px-4 py-2 mb-4 font-semibold text-lg text-center">
        {lang === "en" ? en.tableDesc : id.tableDesc}
      </h2>
    </section>
  );
};

// Ceritanya ini components/TableSection.jsx
const TableSection = ({ albums }) => {
  return (
    <section className="flex justify-center mx-auto mb-4 border border-red-400 p-4">
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
          {albums?.slice(0, 10).map((album) => (
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
  );
};

// Ceritanya ini components/FooterSection.jsx
// TODO: 8. Menghapus props lang karena sudah tidak digunakan
const FooterSection = () => {
  // TODO: 9. Menggunakan useContext untuk mengambil value dari context yang telah dibuat
  // const lang = useContext(LanguageContext);

  // TODO: 16. Karena LanguageContext punya value sudah menjadi Object, sehingga bisa destructuring
  const { lang } = useContext(LanguageContext);

  return (
    <section className="border border-red-400">
      <h3 className="px-4 py-2 mt-4 font-semibold text-base text-center">
        {lang === "en" ? en.footerText : id.footerText}
      </h3>
    </section>
  );
};

// Ceritanya ini components/SelectOptions.jsx
// TODO: 11. Menghapus props preferTheme karena sudah tidak digunakan
// TODO: 18. Setelah menghapus props setPreferTheme dan setLang, maka kita akan menggantinya dengan useContext
const SelectOptions = ({
  // setPreferTheme,
  // setLang,
  lightSelect,
  darkSelect,
}) => {
  // TODO: 12. Menggunakan useContext untuk mengambil value dari context yang telah dibuat
  // const preferTheme = useContext(ThemeContext);
  // ???: 13. Lalu untuk setPreferTheme dan setLang bagaimana nih jadinya?
  //          Mari kita ubah Providernya untuk bisa menerima setPreferTheme dan setLang juga !

  // TODO: 19. Karena ThemeContext punya value sudah menjadi Object, sehingga bisa destructuring
  const { preferTheme, setPreferTheme } = useContext(ThemeContext);

  // TODO: 20. Karena LanguageContext punya value sudah menjadi Object, sehingga bisa destructuring
  const { setLang } = useContext(LanguageContext);

  return (
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
  );
};

// TODO: 28. Extract Loading menjadi Component (LoginComponent)
const LoadingComponent = () => {
  // Di sini kita bisa memanggil useContext untuk mengambil value dari context yang telah dibuat
  // const preferTheme = useContext(ThemeContext);
  const { preferTheme, lightMain, darkMain } = useContext(ThemeContext);

  return (
    <main className={preferTheme === "light" ? lightMain : darkMain}>
      <h1 className="p-4 animate-pulse">Loading...</h1>
    </main>
  );
};

// TODO: 30. Extract Error menjadi Component (ErrorComponent)
const ErrorComponent = ({ errorMessage }) => {
  // Di sini kita bisa memanggil useContext untuk mengambil value dari context yang telah dibuat
  // const preferTheme = useContext(ThemeContext);
  const { preferTheme, lightMain, darkMain } = useContext(ThemeContext);

  return (
    <main className={preferTheme === "light" ? lightMain : darkMain}>
      <h1 className="p-4">{errorMessage}</h1>
    </main>
  );
};

// TODO: 33. Extract MainContainer menjadi Component (MainContainer)
const MainContainer = ({ children }) => {
  // Di sini kita bisa memanggil useContext untuk mengambil value dari context yang telah dibuat
  const { preferTheme, lightMain, darkMain } = useContext(ThemeContext);

  return (
    <main className={preferTheme === "light" ? lightMain : darkMain}>
      {children}
    </main>
  );
};

const HomePage = () => {
  // TODO: 31. Sekarang ini lightMain, darkMain bisa dipindahkan ke dalam ThemeProvider
  // const lightMain =
  //   "bg-white min-h-screen text-slate-700 flex flex-col items-center justify-center transitions-color duration-500";
  // const darkMain =
  //   "bg-slate-800 min-h-screen text-slate-50 flex flex-col items-center justify-center transitions-color duration-500";

  const lightSelect = "py-2 px-4 bg-slate-100 text-slate-700 rounded";
  const darkSelect = "py-2 px-4 bg-slate-500 text-slate-50 rounded";

  const [lang, setLang] = useState("en");

  // TODO: 26. Karena sudah dideclare di dalam ThemeProvider, ini tidak dibutuhkan lagi
  // const [preferTheme, setPreferTheme] = useState("light");

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
        {/* TODO: 27. Sekarang ini akan menjadi error karena kita sudah tidak punya preferTheme lagi
          //        Solusinya adalah kita harus mengambil preferTheme dari ThemeContext
          //        Tapi kan kita tidak bisa mengambil preferTheme dari ThemeContext karena ini bukan komponen
          //        sehingga ini HARUS menjadi Component supaya kita bisa mengambil preferTheme dari ThemeContext
        */}

        {/* <main className={preferTheme === "light" ? lightMain : darkMain}>
          <h1 className="p-4 animate-pulse">Loading...</h1>
        </main> */}

        {/* Jangan lupa untuk menyuntikkan ThemeProvider di sini */}
        <ThemeProvider>
          <LoadingComponent />
        </ThemeProvider>
      </>
    );
  }

  if (isError) {
    return (
      <>
        {/* TODO: 29. Sekarang ini akan menjadi error karena kita sudah tidak punya preferTheme lagi
          //        Solusinya adalah kita harus mengambil preferTheme dari ThemeContext
          //        Tapi kan kita tidak bisa mengambil preferTheme dari ThemeContext karena ini bukan komponen
          //        sehingga ini HARUS menjadi Component supaya kita bisa mengambil preferTheme dari ThemeContext

        */}
        {/* <main className={preferTheme === "light" ? lightMain : darkMain}>
          <h1 className="p-4">{errorMessage}</h1>
        </main> */}

        {/* Jangan lupa untuk menyuntikkan ThemeProvider di sini */}
        <ThemeProvider>
          <ErrorComponent errorMessage={errorMessage} />
        </ThemeProvider>
      </>
    );
  }

  // TODO: 2. Menyuntikkan Provider ke dalam komponen utama
  return (
    <>
      {/* Perhatikan di sini untuk setiap Provider yang digunakan */}
      {/* Kita harus menyiapkan default value yang ada */}

      {/* 
        // TODO: 14. Sekarang mari kita ubah ThemeContext.Provider dan LanguageContext.Provider
        //           untuk menyediakan value dan setter yang dibutuhkan
        // PS: Ini akan mengubah seluruh context yang digunakan !
      */}
      {/* <ThemeContext.Provider value={preferTheme}> */}
      {/* <LanguageContext.Provider value={lang}> */}

      {/* 
        // TODO: 25. Karena di atas sudah mendeclare ThemeProvider
        //           maka kita tidak perlu lagi menyediakan value dan setter
        //           Cukup memanggil ThemeProvider saja  
      */}
      {/* <ThemeContext.Provider value={{ preferTheme, setPreferTheme }}> */}
      <ThemeProvider>
        <LanguageContext.Provider value={{ lang, setLang }}>
          {/* 
            // TODO: 32. Sekarang ini akan menjadi error karena kita sudah tidak punya preferTheme lagi
            //        Solusinya adalah kita harus mengambil preferTheme dari ThemeContext
            //        Tapi kan kita tidak bisa mengambil preferTheme dari ThemeContext karena ini bukan komponen
            //        sehingga ini HARUS menjadi Component supaya kita bisa mengambil preferTheme dari ThemeContext
          */}
          {/* <main className={preferTheme === "light" ? lightMain : darkMain}> */}
          <MainContainer>
            {/* Select Options */}
            <SelectOptions
              // TODO: 10. Sekarang kita tidak perlu menyuntikkan preferTheme lagi
              // setLang={setLang}
              // setPreferTheme={setPreferTheme}
              // TODO: 17. Setelah Provider menjadi Object, kita tidak memerlukan setLang dan setPreferTheme lagi
              lightSelect={lightSelect}
              darkSelect={darkSelect}
            />

            {/* Headers */}
            {/* 
              // TODO: 3. Menghapus props lang yang digunakan di HeaderSection
            */}
            <HeaderSection />

            {/* Content */}
            <TableSection albums={albums} />

            {/* Footer */}
            {/* 
              // TODO: 7. Menghapus props lang yang digunakan di FooterSection
            */}
            <FooterSection />
          </MainContainer>
          {/* </main> */}
        </LanguageContext.Provider>
      </ThemeProvider>
      {/* </ThemeContext.Provider> */}
    </>
  );
};

export default HomePage;
