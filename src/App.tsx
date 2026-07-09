import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Tabs } from "@heroui/react";
import Home from "./pages/Home";
import AstraeaLogo from "./assets/astraea.png";

// Placeholder components for your views
const HomeView = () => <Home />;
const DownloadsView = () => <div>Downloads Content</div>;
const AboutView = () => <div>About Content</div>;

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the top-level path to keep the correct tab highlighted
  // (e.g., "/about" becomes "about")
  const currentTab = location.pathname.split("/")[1] || "home";

  return (
    <div className="flex justify-between p-3">
      {/*Logo*/}
      <div>
        <button>
          <img src={AstraeaLogo} alt="astraea logo" className="max-w-15" />
        </button>
      </div>

      {/*Tab switcher*/}
      <div className="pt-2">
        <Tabs
          className="w-full max-w-md"
          selectedKey={currentTab}
          onSelectionChange={(key) => navigate(`/${key}`)}
        >
          <Tabs.ListContainer>
            <Tabs.List aria-label="Options">
              <Tabs.Tab id="home">
                Home
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="downloads">
                Downloads
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="about">
                About
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
        </Tabs>

        <div className="pt-4">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/home" element={<HomeView />} />
            <Route path="/downloads" element={<DownloadsView />} />
            <Route path="/about/*" element={<AboutView />} />
          </Routes>
        </div>
      </div>

      {/*Version number*/}
      <div className=""></div>
    </div>
  );
}

export default App;
