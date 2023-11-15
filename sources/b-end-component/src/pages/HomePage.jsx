/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAlbums } from "../actions/actionCreator";

import HeaderSection from "../components/HeaderSection";
import TableSection from "../components/TableSection";
import FooterSection from "../components/FooterSection";
import SelectOptions from "../components/SelectOptions";

import MainContainer from "../components/MainContainer";

const HomePage = () => {
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
        <MainContainer>
          <h1 className="p-4 animate-pulse">Loading...</h1>
        </MainContainer>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <MainContainer>
          <h1 className="p-4">{errorMessage}</h1>
        </MainContainer>
      </>
    );
  }

  return (
    <>
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
    </>
  );
};

export default HomePage;
