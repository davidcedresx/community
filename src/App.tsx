import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<h1>Pagina 1</h1>} />
                <Route path="settings" element={<h1>Pagina 2</h1>} />
            </Route>
        </Routes>
    );
};

export default App;
