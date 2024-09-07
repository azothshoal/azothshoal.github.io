module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles");
  
  // Add this line to copy images
  eleventyConfig.addPassthroughCopy("src/images");

  // Make sure Eleventy knows about our data file
  eleventyConfig.addGlobalData("siteData", () => {
    return require("./src/_data/data.js");
  });

  eleventyConfig.addPassthroughCopy(".nojekyll");

  // Add favicon copy
  eleventyConfig.addPassthroughCopy("src/images/intention.ico");

  return {
    dir: {
      input: "src",  // adjust if your source directory is different
      output: "_site",
      includes: "_includes"
    }
  };
};