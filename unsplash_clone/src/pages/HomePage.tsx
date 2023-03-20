import axios from "axios";
import React, { useState } from "react";
import Bottom from "../components/Bottom";
import ImageContent from "../components/ImageContent";
import NavBar from "../components/NavBar";
import PageSearch from "../components/PageSearch";
import SearchResult from "../components/SearchResult";
export type image = {
  id: string;
  urls: {
    thumb: string;
  };
  alt_description?: string;
};
const HomePage = () => {
  function searchApi(values: string | undefined) {
    if (values?.length === 0) return;
    const apiRoot = "https://api.unsplash.com";
    const accessKey = import.meta.env.VITE_ACCESSKEY;
    axios
      .get(
        `${apiRoot}/search/photos?page=1&query=${values}&client_id=${accessKey}`
      )
      .then((res) => {
        setSearchResult(res.data);
      });
  }
  const [searchResult, setSearchResult] = useState<image[]>([]);
  return (
    <div>
      <NavBar
        allData={searchResult}
        setFunction={setSearchResult}
        searchApi={searchApi}
      />
      <Bottom />
      {searchResult?.length === 0 ? (
        <div>
          <PageSearch />
          <ImageContent />
        </div>
      ) : (
        <div>
          <SearchResult />
        </div>
      )}
    </div>
  );
};

export default HomePage;
