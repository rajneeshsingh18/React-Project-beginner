import ContactForm from "./Components/ContactForm/contactForm"
import ContactHeader from "./Components/ContactHeader/ContactHeader"
import Navigation from "./Components/Navigation/Navigation"


function App() {
  return (
    <>

    <main className="main_container">
      <Navigation/>
      <ContactHeader/>
      <ContactForm/>
    </main>
    
    </>
  )
}

export default App
