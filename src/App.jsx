import { createRoot } from "react-dom/client";
import Header from "./Header";
// import SearchParams from "./SearchParams";
import Movies from "./Movies";
import Section from "./Section";

const App = () => {
  return (
    <div>
      <Section />
      <Header />
      <Movies />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
