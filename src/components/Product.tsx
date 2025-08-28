
export function Product({ product, name, price }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <img style={{ maxHeight: '150px' }} src={product} alt={name} />
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}
