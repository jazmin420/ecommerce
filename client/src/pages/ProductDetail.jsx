import Breadcrumb from '../components/Breadcrumb'

function ProductDetail() {
  const { category, subcategory, productId } = useParams();

  return (
    <div>
      <Breadcrumb />
      <h2>Product {productId} in {subcategory} - {category}</h2>
      {/* Display product details */}
    </div>
  );
}

export default ProductDetail;
