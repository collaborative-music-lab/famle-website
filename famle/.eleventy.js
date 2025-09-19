module.exports = function(eleventyConfig) {
  // Copy images
  eleventyConfig.addPassthroughCopy("src/projects");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/resources");
  eleventyConfig.addPassthroughCopy("src/images");
  
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByTag("projects");
  });

  return {
    pathPrefix: "/famle",  // this is the key setting
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    }
  };
};