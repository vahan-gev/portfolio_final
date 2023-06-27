import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
function App() {
  return (
    <>
      <main className="app transition-all ease-in">
        <Home />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
