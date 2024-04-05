import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MantineProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MantineProvider>
    </React.StrictMode>
);
