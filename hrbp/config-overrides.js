const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (config) => {
  // Remove the ModuleScopePlugin which throws when we try
  // to import something outside of src/.
  config.resolve.plugins.pop();

  // Resolve the path aliases.
  config.resolve.plugins.push(new TsconfigPathsPlugin());

  // Let Babel compile outside of src/.
  const oneOfRule = config.module.rules.find((rule) => rule.oneOf);
  const tsRule = oneOfRule.oneOf.find((rule) =>
    rule.test.toString().includes("ts|tsx")
  );
  tsRule.include = undefined;
  tsRule.exclude = /node_modules/;

  // Fork Ts Plugin set build to true
  const forkTsPlugInInstances = config.plugins.find(
    (p) => p.constructor.name === "ForkTsCheckerWebpackPlugin"
  );
  if (!forkTsPlugInInstances) {
    return config;
  }

  forkTsPlugInInstances.options.typescript.build = true;

  return config;
};
