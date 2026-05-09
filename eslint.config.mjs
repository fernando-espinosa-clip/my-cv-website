import tseslint from "typescript-eslint"
import nextConfig from "eslint-config-next"
import prettierConfig from "eslint-config-prettier"

export default tseslint.config(
  ...nextConfig,
  prettierConfig,
  {
    plugins: { "@typescript-eslint": tseslint.plugin },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
  {
    ignores: [".next/**", "node_modules/**"],
  },
)
