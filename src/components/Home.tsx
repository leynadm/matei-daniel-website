import { useThemeContext } from "../contexts/theme-context-utils"
import "../styles/home-dark.css"
import "../styles/home-light.css"
import PersonalIntroduction from "./PersonalIntroduction";
function Home(){

    const { contextTheme, setContextTheme } = useThemeContext();

    return(
        <>
        <div className="container">

          <PersonalIntroduction/>
          {/* 
          <aside className="sidebar">
            Something
          </aside>
          <main className="content">meme</main>
          <aside className="sidebar">Another</aside>
         */}

          </div>

        </>
    )
}

export default Home