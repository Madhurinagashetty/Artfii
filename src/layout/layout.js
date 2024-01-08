import Footer from "./footer"
import Header from "./header"

const ArtLayout = (props) => {
    return (
        <>
        <Header/>
     {props.children}
        <Footer/>
        </>
    )
}
export default ArtLayout