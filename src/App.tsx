import SectionCards from './components/SectionCards';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container px-8 mx-auto">
        <SectionCards />
      </main>
    </>
  );
};

export default App;
