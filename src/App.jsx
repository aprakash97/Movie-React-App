import { createRoot } from "react-dom/client";
// import SearchParams from "./SearchParams";
import Movies from "./Movies";

const App = () => {
  return (
    <div>
      <Movies />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
