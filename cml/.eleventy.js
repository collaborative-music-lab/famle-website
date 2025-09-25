module.exports = function(eleventyConfig) {
  // Copy images
  eleventyConfig.addPassthroughCopy("src/projects");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/resources");
  eleventyConfig.addPassthroughCopy("src/images");
  
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByTag("projects");
  });

  eleventyConfig.addPairedShortcode("md", (content) => {
    return require("markdown-it")().render(content);
  });

  return {
    //pathPrefix: "/cml",  // this is the key setting
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    }
  };
};