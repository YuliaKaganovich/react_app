import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout"
import { HomePage }  from "./pages/HomePage";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/forbidden" element={<div>forbidden</div>} />
          <Route path="/addquestion" element={<div>add question</div>} />
          <Route path="/question/:id" element={<div>Question page</div>} />
          <Route path="*" element={<div>Not found page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


  export default App;
