
import CoreFeatures from "./CoreFeatures"
import Demo from "./Demo"
import HowIt_works from "./HowIt_works"
import Manage_Lead from "./Manage_Lead"
import Mobile_App from "./Mobile_App"
import Product_RoadMap from "./Product_RoadMap"
import Why_Choose from "./Why_Choose"
const HomeSection = () => {
  return (
    <div>
        <Demo/>
        <Why_Choose/>
        <CoreFeatures/>
        <Product_RoadMap/>
        <HowIt_works/>
        <Mobile_App/>
        <Manage_Lead/>
    </div>
  )
}

export default HomeSection