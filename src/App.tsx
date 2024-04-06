import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Students from "./pages/Students"
import Data from "./pages/Data"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Students />} />
                <Route path="settings" element={<Data />} />
            </Route>
        </Routes>
    );
};

export default App;
