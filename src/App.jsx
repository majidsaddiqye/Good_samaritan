// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import MissionPreview from "./components/Mission";
// import GoodSamaritan from "./components/GoodSamaritan";
// import Roles from "./components/Roles";
// import MinistryExecutive from "./components/MinistryExecutive";
// import ProgramsPreview from "./components/ProgramsPreview";
// import Footer from "./components/Footer";
// import About from "./pages/About";
// import Leadership from "./pages/Leadership";
// import History from "./pages/History";
// import News from "./pages/News";
// import Events from "./pages/Events";
// import Locations from "./pages/Locations";
// import Parish from "./pages/Parish";
// import Contact from "./pages/Contact";
// import Donate from "./pages/Donate";
// import ServicesPrograms from "./pages/ServicesPrograms";
// import WaysToSupport from "./pages/WaysToSupport";
// import Workplan2025 from "./pages/Workplan2025";
// import Prayer from "./pages/Prayer";
// import Anthem from "./pages/Anthem";
// import Mission from "./pages/Mission";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="relative text-center p-8 bg-gray-800 rounded-xl shadow-2xl max-w-2xl mx-4 border border-red-500/30">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent animate-pulse"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-6 font-mono tracking-wider">
            <span className="text-red-400">[</span>
            ACCESS DENIED
            <span className="text-red-400">]</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 font-mono">
            <span className="text-red-400"></span> SYSTEM UNDER MAINTENANCE
          </p>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-red-500/20 backdrop-blur-sm">
            <p className="text-lg text-gray-300 mb-4 font-mono">
              <span className="text-red-400"></span> CONTACT DEVELOPER FOR ACCESS
            </p>
            <p className="text-red-400 font-mono">
              <span className="animate-pulse">[</span> THANK YOU FOR YOUR PATIENCE <span className="animate-pulse">]</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;