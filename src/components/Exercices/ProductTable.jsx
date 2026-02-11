function ProductTable({ data, OutOfStock, searchText }) {
  return (
    <div>
      {data
        .filter((p_filter) => {
          if (OutOfStock) {
            return true;
          } else return p_filter.number > 0;
        })
        .filter((p_filter2) =>
          p_filter2.name.toUpperCase().includes(searchText.toUpperCase())
        )
        .map((p, idx) => (
          <ul key={idx}>
            <li>Nom: {p.name}</li>
            <li>Prix: {p.price}</li>
            <li>Quantité: {p.number}</li>
            <li>Catégorie: {p.category}</li>
          </ul>
        ))}
    </div>
  );
}

export default ProductTable;
