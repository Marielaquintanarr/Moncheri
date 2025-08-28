import { Product } from "./Product";
import model from "../assets/model.png";
import earring from "../assets/earrings.png";
export function MainImage() {
    return (
      <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        textAlign: "center",
        marginTop: "50px"
      }}>
        <div style={{display:"flex"}}>
            <img src={model}/>
            <div style={{display: 'flex', gap: "50px"}}>
                <Product product={earring} name="Luna Earrings" price="$200" />
                <Product product={earring} name="Star Bracelet" price="$100" />
                <Product product={earring} name="Moon Ring" price="$150" />
            </div>
        </div>
      </div>
      </>
    )
}
  
  