module.exports = {
    proxy: "http://localhost:80",
    files: ["views/**/*.ejs"],
    port: 2000,
    ui: {
      port: 3002
    },
    open: false,
    notify: false
};
  
