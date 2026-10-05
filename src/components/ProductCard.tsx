import { useState } from "react";
import { formatPrice } from "../utils/formatPrice";

interface ProductCardProps {
  name: string;
  price: number;
  badge?: string;
}

export default function ProductCard({
  name,
  price,
  badge,
}: ProductCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <article className="product-card">
      {badge && <span className="product-card__badge">{badge}</span>}
      <h2>{name}</h2>
      <p>{formatPrice(price)}</p>

      <button
        className="favorite-button"
        type="button"
        aria-pressed={isFavorited}
        onClick={() => setIsFavorited(!isFavorited)}
      >
        {isFavorited ? "★ Saved" : "☆ Save"}
      </button>
    </article>
  );
}