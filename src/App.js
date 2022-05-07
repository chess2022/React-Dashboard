import './App.css';
import Sidebar from "./components/Sidebar"
import Reviews from "./components/Reviews";
import Average from "./components/Average";
import Sentiment from "./components/Sentiment";
import Visitors from "./components/Visitors";

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <Reviews />
      <Average />
      <Sentiment />
      <Visitors />
    </div>
  );
}

