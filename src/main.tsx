import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/components/theme-provider";
import App from "./App.tsx";
import "./index.css";
import { MouseFollower } from "@/components/ui/mouse-follower";

createRoot(document.getElementById("root")!).render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <MouseFollower />
        <App />
    </ThemeProvider>
);
