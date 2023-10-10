import "../styles/personal-introduction.css"
import { useThemeContext } from "../contexts/theme-context-utils"
function PersonalIntroduction(){

    const {contextTheme} = useThemeContext()
    return(
        <>
        <main className="pers-intr-main-cont">
        <div className="intr-line">Hi, my name is</div>
        <div className="intr-line">Daniel.</div>
        <div className="intr-line">I'm a <span className="intr-line-highlight">FULL-STACK</span> web developer</div>
        <img className={`my-picture ${contextTheme}`} src="https://firebasestorage.googleapis.com/v0/b/matei-daniel-website.appspot.com/o/my_photo_1024.jpg?alt=media&token=ea2dcb1e-689e-4d46-a884-6017db0a0d21" alt=""></img>
        </main>
        </>
    )


}

export default PersonalIntroduction