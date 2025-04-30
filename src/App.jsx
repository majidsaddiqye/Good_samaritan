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

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Header />
//         <main className="flex-grow">
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <Hero />
//                   <MissionPreview />
//                   <GoodSamaritan />
//                   <Roles />
//                   <MinistryExecutive />
//                   <ProgramsPreview />
//                 </>
//               }
//             />
//             <Route path="/about" element={<About />} />
//             <Route path="/about/leadership" element={<Leadership />} />
//             <Route path="/about/history" element={<History />} />
//             <Route path="/about/news" element={<News />} />
//             <Route path="/about/events" element={<Events />} />
//             <Route path="/about/workplan-2025" element={<Workplan2025 />} />
//             <Route path="/about/mission" element={<Mission />} />
//             <Route path="/about/prayer" element={<Prayer />} />
//             <Route path="/about/anthem" element={<Anthem />} />
//             <Route path="/locations" element={<Locations />} />
//             <Route path="/locations/:id" element={<Parish />} />
//             <Route path="/services" element={<ServicesPrograms />} />
//             <Route path="/support" element={<WaysToSupport />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/donate" element={<Donate />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { Link } from "react-router-dom";

// 👇 Temporary Access Denied UI
function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-md">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Access Denied</h1>
        <p className="text-lg text-gray-700 mb-6">
          Website is temporarily unavailable. Please contact the agency for more information.
        </p>
        <Link to="/contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            Contact Agency
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
