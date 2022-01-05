const { createProxyMiddleware } = require("http-proxy-middleware");
const DEV_SERVER = "localhost:5000";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: `http://${DEV_SERVER}`,
      logLevel: "debug",
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
