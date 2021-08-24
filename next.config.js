const WorkerPlugin = require("worker-plugin");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
      // config.experiments = {asyncWebAssembly: true};
      config.plugins.push(
        new WorkerPlugin({
          // use "self" as the global object when receiving hot updates.
          globalObject: "self",
        })
      );
      // config.output.webassemblyModuleFilename = 'WebGL/Build/WebGL.wasm';
      // config.module.rules.push({test: /\.wasm$/, type: "webassembly/async"});
    }
    return config;
  },
};