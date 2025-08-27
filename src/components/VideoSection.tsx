import video from "../assets/moncheri.jpg";

export function VideoSection() {
    return (
      <>
      <div style={{display: "flex", marginTop: "100px"}}>
        <img src={video} style={{maxHeight: "700px", marginLeft: "120px"}}/>
        <p style={{fontSize: "80px", textAlign: "right", marginRight: "120px"}}>Esto es Moncheri Joyeria</p>
      </div>
      </>
    )
}
  