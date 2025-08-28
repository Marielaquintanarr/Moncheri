
export function Header() {
    return (
      <>
      <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", 
          textAlign: "center"
        }}>
        <div style={{display: "flex", gap: "200px", fontSize: "32px", fontWeight: '100'}}>
            <p>Nosotros</p>
            <p>Productos</p>
            <p>Envios</p>
            <p>Contacto</p>
        </div>
        <h1 style={{fontSize: '180px', fontWeight: '100',  marginTop: "-60px", marginBottom: "0"}}>
            moncheri joyeria
        </h1>
      </div>
      </>
    )
}
  
  