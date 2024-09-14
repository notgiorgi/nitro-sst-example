//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  preset: "aws-lambda",
  inlineDynamicImports: true,
});
