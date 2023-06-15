import en from "../i18n/en.json";
import id from "../i18n/id.json";

/* eslint-disable react/prop-types */
const HeaderSection = ({ lang }) => {
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

export default HeaderSection;
