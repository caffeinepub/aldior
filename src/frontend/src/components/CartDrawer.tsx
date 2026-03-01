import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/imageMap";
import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    subtotal,
    totalItems,
    isCartOpen,
    closeCart,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-[#080808] border-l border-white/8 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/8">
              <div className="flex items-center gap-3">
                <ShoppingBag
                  size={18}
                  strokeWidth={1.5}
                  className="text-aldior-cream"
                />
                <h2 className="text-sm font-body font-semibold tracking-[0.25em] text-aldior-cream uppercase">
                  Cart
                  {totalItems > 0 && (
                    <span className="ml-2 text-white/40">({totalItems})</span>
                  )}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="p-2 text-white/40 hover:text-aldior-cream transition-colors"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
                  <div className="w-16 h-16 border border-white/10 flex items-center justify-center">
                    <ShoppingBag
                      size={28}
                      strokeWidth={1}
                      className="text-white/20"
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-sm font-body font-semibold tracking-[0.2em] text-white/50 uppercase">
                      Your Cart Is Empty
                    </p>
                    <p className="text-xs font-body text-white/30">
                      Discover pieces built for those who move in silence.
                    </p>
                  </div>
                  <Link
                    to="/shop"
                    onClick={closeCart}
                    className="btn-outline-white text-xs font-body font-semibold tracking-[0.2em] px-8 py-3 uppercase"
                  >
                    Shop Now
                  </Link>
                </div>
              ) : (
                <ul className="divide-y divide-white/5">
                  {items.map((item) => (
                    <li
                      key={`${item.productId}-${item.size}`}
                      className="flex gap-4 p-6"
                    >
                      {/* Product Image */}
                      <div className="w-20 h-24 flex-shrink-0 overflow-hidden bg-aldior-mid">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-body font-semibold tracking-[0.05em] text-aldior-cream line-clamp-1">
                              {item.name}
                            </p>
                            <p className="text-xs font-body text-white/40 tracking-[0.15em] uppercase mt-0.5">
                              Size: {item.size}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              removeItem(item.productId, item.size)
                            }
                            className="p-1 text-white/30 hover:text-white/70 transition-colors flex-shrink-0"
                            aria-label="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Quantity */}
                          <div className="flex items-center gap-3 border border-white/10">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.productId,
                                  item.size,
                                  item.quantity - 1,
                                )
                              }
                              className="p-1.5 text-white/40 hover:text-aldior-cream transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-xs font-body font-semibold text-aldior-cream w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.productId,
                                  item.size,
                                  item.quantity + 1,
                                )
                              }
                              className="p-1.5 text-white/40 hover:text-aldior-cream transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>

                          <p className="text-sm font-body font-semibold text-aldior-cream">
                            {formatPrice(item.price * BigInt(item.quantity))}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-white/8 px-6 py-6 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-body font-semibold tracking-[0.2em] text-white/50 uppercase">
                    Subtotal
                  </span>
                  <span className="text-lg font-display font-black text-aldior-cream">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <p className="text-xs font-body text-white/30">
                  Shipping & taxes calculated at checkout
                </p>
                <button
                  type="button"
                  className="w-full btn-outline-white py-4 text-xs font-body font-bold tracking-[0.25em] uppercase"
                >
                  Proceed to Checkout
                </button>
                <button
                  type="button"
                  onClick={closeCart}
                  className="w-full text-xs font-body text-white/40 hover:text-aldior-cream transition-colors tracking-[0.2em] uppercase py-2"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
