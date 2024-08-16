const Handlebars = require('handlebars');

module.exports = function(eleventyConfig) {
  // Set Handlebars as a template engine
  eleventyConfig.setLibrary("hbs", Handlebars);

  // Copy the `style.css` file to the output folder
  eleventyConfig.addPassthroughCopy("style.css");
  
  // Copy the entire `neighbor-cats` folder to the output
  eleventyConfig.addPassthroughCopy("neighbor-cats");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "dist"
    },
    templateFormats: ["hbs", "md", "html"],
    passthroughFileCopy: true
  };
};