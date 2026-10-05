import ProductCard from "./components/ProductCard";
import Button from "./components/Button";
import { products } from "./features/products/products";
import "./styles/tokens.css";
import "./App.css";

function App() {
  return (
    <main className="demo">
      <h1>Button variants</h1>
      <p>One component, configured with different props.</p>

      <div className="button-row">
        <Button label="Save changes" variant="primary" />
        <Button label="Cancel" variant="secondary" />
      </div>
    <section className="product-section">
       <h2>Products</h2>
        <div className="product-grid">
         {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            badge={product.badge}
          />
        ))}
      </div>
    </section>
      
    </main>
  );
}

export default App;