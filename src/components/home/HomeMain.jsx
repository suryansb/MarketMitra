import "./HomeMain.css";
import img2 from "../../assets/img/cover1.png";
import HomeAbout from "./HomeAbout";
import HomeEnd from "./HomeEnd";
function HomeMain () {
    return(
        <>
        <div className="grid-container">
            <div className="grid-item">
                <img src={img2} alt="Image"/>
        </div>
        <div className="grid-item text">
            <p className="text-design">Shop Local.</p>
            <p className="text-design">Live Green.</p>
            <p className="text-design">Eat Healthy. </p>
            <button className="btn btn-success btn-lg">Buy</button>
            <button className="btn btn-outline-success btn-lg">Sell</button>
        </div>
        <div className="grid-item vision">
        <p className="text-design"> Our Vision</p>
        <br/>
        <p className="content"> <span>“</span>we aim to enhance transparency, accountability, and confidence within the agricultural industry while 
            encouraging eco-friendly farming practices. Ultimately, we envision a future where farmers flourish, 
            consumers access top-notch products at reasonable prices, and the agricultural supply chain functions 
            smoothly and ethically.<span>”</span> </p>
        </div>
        <HomeAbout/> 
        <HomeEnd/>
        </div>
       
        </>
    )

}

export default HomeMain;