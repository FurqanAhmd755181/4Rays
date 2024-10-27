import p1 from "../../../assets/Partner1.png";
import p2 from "../../../assets/Partner2.png";
import p3 from "../../../assets/Partner3.png";

const Companies = () =>{


    return(
        <div className="flex items-center justify-between">
        <h1 className="text-[45px] font-[700]">
          <span className="text-[#C10A28]">Our</span> <br /> Partners:
        </h1>
        <div className="flex items-center ">
          <img src={p1} alt="" />
          <img src={p2} alt="" />
          <img src={p3} alt="" />
        </div>
      </div>
        
        
    )
}

export default Companies;