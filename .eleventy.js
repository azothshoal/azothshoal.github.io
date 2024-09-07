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

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["hbs", "md", "html"],
    htmlTemplateEngine: "hbs"
  };
};