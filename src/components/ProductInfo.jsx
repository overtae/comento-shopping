const ProductInfo = ({ name, price, thumbnail }) => {
  return (
    <div>
      <img src={thumbnail} alt={name} />
      <div>
        <h3>{name}</h3>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default ProductInfo;
