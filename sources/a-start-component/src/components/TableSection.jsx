/* eslint-disable react/prop-types */
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

export default TableSection;
