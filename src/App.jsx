import './App.css'
import Homecard from './components/Homecard.jsx'
import Hero from './components/Hero.jsx'
import Jobs from './components/Jobs.jsx'
import Navbar from './components/Navbar.jsx'
function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <Homecard /> {/* <!-- Developers and Employers --> */}
      <Jobs/> 

   
    

    
     

    {/* <!-- Browse Jobs --> */}
    
      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
          >View All Jobs</a
        >
      </section>
    </>
  )
}

export default App
