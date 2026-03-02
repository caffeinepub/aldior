import { SizeModal } from "@/components/SizeModal";
import { useGetAllProducts } from "@/hooks/useQueries";
import type { Product } from "@/hooks/useQueries";
import { formatPrice, getProductImage } from "@/utils/imageMap";
import { Plus } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const CATEGORIES = ["ALL", "TOPS", "BOTTOMS", "OUTERWEAR", "ACCESSORIES"];

// Fallback products if backend not ready
const FALLBACK_PRODUCTS: Product[] = [
  {
    id: BigInt(1),
    name: "ALDIOR ESSENTIAL TEE",
    description: "Heavyweight cotton. Oversized silhouette.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    stock: BigInt(50),
    imageUrl: "",
    category: "TOPS",
    price: BigInt(149900),
  },
  {
    id: BigInt(2),
    name: "CARGO UTILITY TROUSERS",
    description: "Multi-pocket. Relaxed fit.",
    sizes: ["28", "30", "32", "34", "36"],
    stock: BigInt(30),
    imageUrl: "",
    category: "BOTTOMS",
    price: BigInt(299900),
  },
  {
    id: BigInt(3),
    name: "CONSTRUCTION BOMBER",
    description: "Structured silhouette. Premium satin lining.",
    sizes: ["S", "M", "L", "XL"],
    stock: BigInt(15),
    imageUrl: "",
    category: "OUTERWEAR",
    price: BigInt(599900),
  },
  {
    id: BigInt(4),
    name: "HEAVY FLEECE HOODIE",
    description: "Oversized. Garment dyed.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: BigInt(25),
    imageUrl: "",
    category: "TOPS",
    price: BigInt(249900),
  },
  {
    id: BigInt(5),
    name: "PUFFER VEST",
    description: "Quilted. Statement fit.",
    sizes: ["S", "M", "L", "XL"],
    stock: BigInt(20),
    imageUrl: "",
    category: "OUTERWEAR",
    price: BigInt(349900),
  },
  {
    id: BigInt(6),
    name: "BAGGY DENIM",
    description: "Washed indigo. Relaxed through the thigh.",
    sizes: ["28", "30", "32", "34", "36"],
    stock: BigInt(18),
    imageUrl: "",
    category: "BOTTOMS",
    price: BigInt(279900),
  },
  {
    id: BigInt(7),
    name: "LOGO CAP",
    description: "6-panel. Embroidered ALDIOR logo.",
    sizes: ["ONE SIZE"],
    stock: BigInt(40),
    imageUrl: "",
    category: "ACCESSORIES",
    price: BigInt(99900),
  },
  {
    id: BigInt(8),
    name: "GRAPHIC LONG SLEEVE",
    description: "Archive print. 100% cotton.",
    sizes: ["S", "M", "L", "XL"],
    stock: BigInt(22),
    imageUrl: "",
    category: "TOPS",
    price: BigInt(179900),
  },
];

function ProductCard({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart: (product: Product) => void;
}) {
  const imageUrl = getProductImage(product.category, product.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="product-card group relative"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4] bg-[#0e0e0e]">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover overlay with Add to Cart */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center">
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="btn-outline-white flex items-center gap-2 px-6 py-3 text-xs font-body font-bold tracking-[0.2em] uppercase transform translate-y-3 group-hover:translate-y-0 transition-transform duration-400"
          >
            <Plus size={14} />
            Add to Cart
          </button>
        </div>

        {/* Category tag */}
        <div className="absolute top-3 left-3">
          <span className="text-[9px] font-body font-bold tracking-[0.25em] text-white/60 uppercase bg-black/60 px-2 py-1 backdrop-blur-sm">
            {product.category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 flex items-start justify-between gap-2">
        <div className="space-y-1 min-w-0">
          <p className="text-sm font-display font-black text-aldior-cream tracking-[0.05em] truncate">
            {product.name}
          </p>
          <p className="text-xs font-body text-white/40 line-clamp-1">
            {product.description}
          </p>
        </div>
        <p className="text-sm font-body font-bold text-aldior-cream flex-shrink-0">
          {formatPrice(product.price)}
        </p>
      </div>

      {/* Size hint */}
      <div className="mt-2 flex flex-wrap gap-1">
        {product.sizes.slice(0, 4).map((s) => (
          <span
            key={s}
            className="text-[9px] font-body text-white/25 border border-white/10 px-1.5 py-0.5 tracking-wider"
          >
            {s}
          </span>
        ))}
        {product.sizes.length > 4 && (
          <span className="text-[9px] font-body text-white/25">
            +{product.sizes.length - 4}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { data: products, isLoading } = useGetAllProducts();

  const allProducts = products?.length ? products : FALLBACK_PRODUCTS;

  const filtered =
    activeCategory === "ALL"
      ? allProducts
      : allProducts.filter((p) => p.category.toUpperCase() === activeCategory);

  return (
    <main className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="pt-16 pb-10 px-6 md:px-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-5xl md:text-8xl font-display font-black text-aldior-cream"
            style={{ letterSpacing: "-0.02em" }}
          >
            SHOP
          </h1>
          <div className="aldior-divider mt-8" />
        </motion.div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 md:top-20 z-30 bg-black/95 backdrop-blur-sm border-b border-white/5 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-0 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-4 text-[10px] font-body font-bold tracking-[0.25em] uppercase transition-colors duration-200 border-b-2 ${
                  activeCategory === cat
                    ? "text-aldior-cream border-aldior-cream"
                    : "text-white/35 border-transparent hover:text-white/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 md:px-10 py-12 max-w-7xl mx-auto">
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {Array.from({ length: 6 }, (_, i) => `skel-${i}`).map((k) => (
              <div key={k} className="space-y-4">
                <div className="aspect-[3/4] bg-white/5 animate-pulse" />
                <div className="h-4 bg-white/5 animate-pulse rounded w-3/4" />
                <div className="h-3 bg-white/5 animate-pulse rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <p className="text-sm font-body font-semibold tracking-[0.3em] text-white/30 uppercase">
              No Items in {activeCategory}
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory("ALL")}
              className="text-xs font-body text-aldior-cream hover:opacity-70 tracking-[0.2em] uppercase underline underline-offset-4"
            >
              View All
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {filtered.map((product) => (
              <ProductCard
                key={String(product.id)}
                product={product}
                onAddToCart={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Size selection modal */}
      <SizeModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}
