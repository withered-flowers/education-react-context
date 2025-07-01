/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import FooterSection from "../components/FooterSection";
import HeaderSection from "../components/HeaderSection";
import MainContainer from "../components/MainContainer";
import SelectOptions from "../components/SelectOptions";
import TableSection from "../components/TableSection";

import { fetchAlbums } from "../features/albums/album-slice.js";

const HomePage = () => {
	const { isError, isLoading, albums, errorMessage } = useSelector(
		(state) => state.albums,
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAlbums());
	}, [dispatch]);

	if (isLoading) {
		return (
			<MainContainer>
				<h1 className="p-4 animate-pulse">Loading...</h1>
			</MainContainer>
		);
	}

	if (isError) {
		return (
			<MainContainer>
				<h1 className="p-4">{errorMessage}</h1>
			</MainContainer>
		);
	}

	return (
		<MainContainer>
			{/* Select Options */}
			<SelectOptions />

			{/* Headers */}
			<HeaderSection />

			{/* Content */}
			<TableSection albums={albums} />

			{/* Footer */}
			<FooterSection />
		</MainContainer>
	);
};

export default HomePage;
