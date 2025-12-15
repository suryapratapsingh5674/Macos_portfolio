import { Doc, Navbar, Welcome } from '#components'
import { Finder, Resume, Safari, Terminal, Text, Image, Contact } from '#windows'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Doc/>
      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Contact/>
    </main>
  )
}

export default App