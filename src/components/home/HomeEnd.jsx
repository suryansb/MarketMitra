import "./HomeEnd.css"

function HomeEnd() {
    return (
        <>
        <div className="home-end">
            <div className="box">
            <span>Stay Up to Date about our latest events! </span>

            <button className="btn btn-outline-dark" style={{margin: "10px"}}>Subscribe to our newsletter!</button>
            </div>
            <div className="endcontent">
                <div className="company">
                    <h1>MarketMitra</h1>
                    <h6>We have products that are fresh and most
                        favored by health experts. From dairy to unprocessed fresh farm 
                        items.</h6>
                </div>
                <div className="contact">
                    <h4>Contact Us:</h4>
                    <ul className="list">
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Facebook</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div className="details" style={{textAlign:"left"}}>
                    <h5>COMPANY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  HELP</h5>
                    <h7>About &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp; &emsp;&emsp;  Customer Support</h7><br/>
                    <h7>Features &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&nbsp;  Delivery Details</h7><br/>
                    <h7>Work &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp; &emsp;&emsp;&nbsp;&nbsp;  Privacy Policy</h7><br/>
                    <h7>Careers &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &emsp;&emsp;&emsp;&nbsp;&nbsp; Terms & Conditions</h7>
                </div>
            </div>
        </div>
        </>
    )
}

export default HomeEnd;