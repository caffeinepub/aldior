import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/hooks/useQueries";
import { formatPrice, getProductImage } from "@/utils/imageMap";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

interface SizeModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function SizeModal({ product, isOpen, onClose }: SizeModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const { addItem, openCart } = useCart();

  if (!product) return null;

  const imageUrl = getProductImage(product.category, product.name);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity: 1,
      imageUrl,
      category: product.category,
    });
    toast.success(`${product.name} added to cart`, {
      description: `Size: ${selectedSize}`,
      action: {
        label: "View Cart",
        onClick: () => openCart(),
      },
    });
    setSelectedSize("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="bg-[#0a0a0a] border border-white/10 text-aldior-cream p-0 max-w-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Product image */}
          <div className="w-full md:w-48 h-48 md:h-auto flex-shrink-0">
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 p-6 space-y-5">
            <DialogHeader className="space-y-1">
              <p className="text-[10px] font-body font-semibold tracking-[0.3em] text-white/40 uppercase">
                {product.category}
              </p>
              <DialogTitle className="text-lg font-display font-black text-aldior-cream tracking-[0.05em]">
                {product.name}
              </DialogTitle>
              <p className="text-sm font-body font-semibold text-white/60">
                {formatPrice(product.price)}
              </p>
            </DialogHeader>

            {/* Size selector */}
            <div className="space-y-3">
              <p className="text-xs font-body font-semibold tracking-[0.2em] text-white/50 uppercase">
                Select Size
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <motion.button
                    key={size}
                    type="button"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-2 text-xs font-body font-semibold tracking-[0.15em] uppercase border transition-all duration-200 ${
                      selectedSize === size
                        ? "border-aldior-cream bg-aldior-cream text-black"
                        : "border-white/15 text-white/60 hover:border-white/40 hover:text-aldior-cream"
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className={`w-full py-3.5 text-xs font-body font-bold tracking-[0.25em] uppercase transition-all duration-300 ${
                selectedSize
                  ? "btn-outline-white"
                  : "border border-white/10 text-white/25 cursor-not-allowed"
              }`}
            >
              {selectedSize ? "Add to Cart" : "Select a Size"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
