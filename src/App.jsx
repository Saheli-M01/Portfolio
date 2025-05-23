import Sidebar from './Components/Sidebar';
import HomeSection from './Components/HomeSection';
import AboutSection from './Components/AboutSection';
import Navigation from './Components/Navigation';
import Greeting from './Components/Greet';
function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Greeting />
        <Navigation />
        <HomeSection />
        <AboutSection />
      </div>
    </div>
  );
}

export default App;
