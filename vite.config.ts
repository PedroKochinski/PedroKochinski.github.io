import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

function getBasePath() {
  if (!process.env.GITHUB_ACTIONS) return "/";

  const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
  if (!owner || !repository) return "/";

  const isUserPage = repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;
  return isUserPage ? "/" : `/${repository}/`;
}

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? getBasePath(),
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
