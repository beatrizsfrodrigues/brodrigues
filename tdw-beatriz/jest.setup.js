require("esbuild").buildSync({
  entryPoints: ["./src/index.jsx"], // Replace with your entry file
  bundle: true,
  outfile: "out.js",
  jsx: "automatic", // Enables new JSX runtime
});
