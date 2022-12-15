// Components
import StyledCssClasses from "./components/StyledCssClasses"
import StyledCssModules from "./components/StyledCssModules/StyledCssModules"
import StyledInnline from "./components/StyledInnline"
import StyledTailwind from "./components/StyledTailwind"

function App() {
  return (
    <>
      <main>
        <StyledInnline />
        <StyledCssClasses />
        <StyledCssModules />
        <StyledTailwind />
      </main>
    </>
  )
}

export default App
