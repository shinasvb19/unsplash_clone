import { Box, Container, ImageList, ImageListItem } from "@mui/material";

import { image } from "../types";
type allProps = {
  result: image[];
};
const SearchResult = ({ result }: allProps) => {
  return (
    <div>
      <Container maxWidth="lg">
        <Box sx={{ width: "full", height: "screen", overflowY: "scroll" }}>
          <ImageList
            variant="masonry"
            cols={3}
            gap={8}
            sx={{ marginTop: "18vh" }}
          >
            {result?.results.map((item) => (
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
      </Container>
    </div>
  );
};

export default SearchResult;
