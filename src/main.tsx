import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/components/theme-provider";
import App from "./App.tsx";
import "./index.css";
import { MouseFollower } from "@/components/ui/mouse-follower";

createRoot(document.getElementById("root")!).render(
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <div id="bg-layer" />
        <MouseFollower />
        <App />
    </ThemeProvider>
);
