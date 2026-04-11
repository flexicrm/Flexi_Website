// app/components/HomeSection.tsx
import CoreFeatures from "./CoreFeatures"
import Demo from "./Demo"
import HowIt_works from "./HowIt_works"
import Manage_Lead from "./Manage_Lead"
import Mobile_App from "./Mobile_App"
import Product_RoadMap from "./Product_RoadMap"
import Why_Choose from "./Why_Choose"

const HomeSection = () => {
  return (
    // FIX: Added 'overflow-x-hidden max-w-[100vw]' to prevent Framer Motion 
    // animations from stretching the screen width before they trigger.
    <div className="overflow-x-hidden max-w-[100vw] w-full">
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