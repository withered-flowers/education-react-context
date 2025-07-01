import { use } from "react";
import { LanguageContext, ThemeContext } from "../contexts/context";

const SelectOptions = () => {
	const { preferTheme, setPreferTheme, lightSelect, darkSelect } =
		use(ThemeContext);
	const { setLang } = use(LanguageContext);

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

export default SelectOptions;
