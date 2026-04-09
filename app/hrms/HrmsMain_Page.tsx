import Demo from "./Demo"
import HR_Management from "./HR_Management"
import Hr_Operations from "./Hr_Operations"
import Hrms_Pocket from "./Hrms_Pocket"
import Product_Roadmap from "./Product_Roadmap"
import Web_Mobile from "./Web_Mobile"

const HrmsMain_Page = () => {
  return (
    <div>
        <Demo/>
        <HR_Management/>
        <Web_Mobile/>
        <Product_Roadmap/>
        <Hrms_Pocket/>
        <Hr_Operations/>
    </div>
  )
}

export default HrmsMain_Page