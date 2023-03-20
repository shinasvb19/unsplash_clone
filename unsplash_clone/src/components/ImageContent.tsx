import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Container from "@mui/material/Container";
import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

type image = {
  id: string;
  urls: {
    thumb: string;
  };
  alt_description?: string;
};

export default function ImageContent() {
  const [images, setImage] = useState<image[]>([]);
  const [searchResult, setSearchResult] = useState<image[]>([]);
  useEffect(() => {
    fetchImages();
  }, []);
  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = import.meta.env.VITE_ACCESSKEY;

    https: axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then((res) => {
        console.log(res.data);
        setImage([...images, ...res.data]);
      });
  };

  return (
    <Container maxWidth="lg">
      <InfiniteScroll
        dataLength={images?.length}
        next={fetchImages}
        hasMore={true}
        loader={<>loading</>}
      >
        <Box sx={{ width: "full", height: "screen", overflowY: "scroll" }}>
          <ImageList
            variant="masonry"
            cols={3}
            gap={8}
            sx={{ marginTop: "18vh" }}
          >
            {images?.map((item) => (
              <ImageListItem key={item?.id}>
                <img
                  src={`${item?.urls.thumb}?w=248&fit=crop&auto=format`}
                  srcSet={`${item?.urls.thumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.alt_description}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </InfiniteScroll>
    </Container>
  );
}
