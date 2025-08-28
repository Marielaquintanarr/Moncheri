
import collage1 from "../assets/collage1.png";
import collage2 from "../assets/collage2.png";
import collage3 from "../assets/collage3.png";
import collage4 from "../assets/collage4.png";
import collage5 from "../assets/collage5.png";
import collage6 from "../assets/collage6.png";

export function CollageSection() {
    return (
      <div style={{ marginTop: "100px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", position: "relative" }}>
        <img src={collage1} style={{ gridColumn: "1", gridRow: "1", maxHeight: "300px" }} />
        <img src={collage2} style={{ gridColumn: "2", gridRow: "2", maxHeight: "300px" }} />
        <img src={collage3} style={{ gridColumn: "3", gridRow: "1 / span 2", maxHeight: "300px" }} />
        <img src={collage4} style={{ gridColumn: "4", gridRow: "2", maxHeight: "300px" }} />
        <img src={collage5} style={{ gridColumn: "2", gridRow: "3", maxHeight: "300px" }} />
        <img src={collage6} style={{ gridColumn: "3", gridRow: "3", maxHeight: "300px" }} />
        <p style={{ gridColumn: "1", gridRow: "3", fontSize: "28px", alignSelf: "center" }}>Get inspired</p>
      </div>
    );
  }
  