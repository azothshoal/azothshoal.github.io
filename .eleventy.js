const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPassthroughCopy("dist/styles");
  
  // Add this line to copy images
  eleventyConfig.addPassthroughCopy("src/images");

  // Make sure Eleventy knows about our data file
  eleventyConfig.addGlobalData("siteData", () => {
    return require("./src/_data/data.js");
  });

  // Copy the `src/.nojekyll` file to `dist/`
  eleventyConfig.addPassthroughCopy(".nojekyll");

  // Copy the CSS file
  eleventyConfig.addPassthroughCopy("src/styles");

  return {
    dir: {
      input: "src",  // adjust if your source directory is different
      output: "_site"
    }
  };
};