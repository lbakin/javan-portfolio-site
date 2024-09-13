// queries.js

// Query to fetch portfolio sections
export const portfolioSectionsQuery = `
  *[_type == "portfolioSection"]{
    title,
    reelUrls[]{
      type,
      url
    },
    images[]{
      'src': src.asset->url,
      alt,
      text
    },
    sectionStyle,
    id
  }
`;

// You can add more queries here, for example, fetching a single portfolio section by ID:
export const singlePortfolioSectionQuery = (id) => `
  *[_type == "portfolioSection" && _id == "${id}"]{
    title,
    reelUrls,
    images[]{
      'src': src.asset->url,
      alt,
      text
    },
    sectionStyle,
    id
  }
`;
