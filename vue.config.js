module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "@/styles/_variables.scss";
        @import "@/styles/_common.scss";
        @import "@/styles/_clearfix.scss";
        `
      }
    }
  }
};
