import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import Footer from "./components/footer/Footer";
import AddTaskModal from "./components/tasks/AddTaskModal";
import TaskBoard from "./components/tasks/TaskBoard";

function App() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <TaskBoard />
      <Footer />
    </div>
  );
}

export default App;
