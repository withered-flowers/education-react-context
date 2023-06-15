/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAlbums } from "../actions/actionCreator";

import HeaderSection from "../components/HeaderSection";
import TableSection from "../components/TableSection";
import FooterSection from "../components/FooterSection";
import SelectOptions from "../components/SelectOptions";

import { LanguageProvider, ThemeProvider } from "../contexts/context";
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
        <LanguageProvider>
          <ThemeProvider>
            <MainContainer>
              <h1 className="p-4 animate-pulse">Loading...</h1>
            </MainContainer>
          </ThemeProvider>
        </LanguageProvider>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <LanguageProvider>
          <ThemeProvider>
            <MainContainer>
              <h1 className="p-4">{errorMessage}</h1>
            </MainContainer>
          </ThemeProvider>
        </LanguageProvider>
      </>
    );
  }

  return (
    <>
      <LanguageProvider>
        <ThemeProvider>
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
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
};

export default HomePage;
