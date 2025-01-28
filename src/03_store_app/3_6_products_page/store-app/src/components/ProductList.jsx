export default function ProductList({ products }) {
  return <div>{products.map((p) => p.title)}</div>;
}
