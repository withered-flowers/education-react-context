import { use } from "react";
import { LanguageContext } from "../contexts/context";

import en from "../i18n/en.json";
import id from "../i18n/id.json";

/* eslint-disable react/prop-types */
const FooterSection = () => {
	const { lang } = use(LanguageContext);

	return (
		<section className="border border-red-400">
			<h3 className="px-4 py-2 mt-4 font-semibold text-base text-center">
				{lang === "en" ? en.footerText : id.footerText}
			</h3>
		</section>
	);
};

export default FooterSection;
