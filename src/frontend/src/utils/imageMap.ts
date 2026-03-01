/**
 * Map product categories and names to local generated images
 */
export function getProductImage(category: string, name: string): string {
  const cat = category.toLowerCase();
  const n = name.toLowerCase();

  if (
    cat === "outerwear" ||
    n.includes("bomber") ||
    n.includes("jacket") ||
    n.includes("coat")
  ) {
    return "/assets/generated/product-bomber.dim_600x700.jpg";
  }
  if (n.includes("hoodie") || n.includes("sweatshirt")) {
    return "/assets/generated/product-hoodie.dim_600x700.jpg";
  }
  if (
    cat === "bottoms" ||
    n.includes("trouser") ||
    n.includes("pant") ||
    n.includes("jean") ||
    n.includes("cargo")
  ) {
    return "/assets/generated/product-trousers.dim_600x700.jpg";
  }
  if (
    cat === "tops" ||
    n.includes("tee") ||
    n.includes("t-shirt") ||
    n.includes("shirt")
  ) {
    return "/assets/generated/product-tee.dim_600x700.jpg";
  }
  // Accessories and fallback — cycle through images
  const images = [
    "/assets/generated/product-tee.dim_600x700.jpg",
    "/assets/generated/product-bomber.dim_600x700.jpg",
    "/assets/generated/product-hoodie.dim_600x700.jpg",
    "/assets/generated/product-trousers.dim_600x700.jpg",
  ];
  // Use a hash of the name for consistent cycling
  const hash = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return images[hash % images.length];
}

export function formatPrice(priceCents: bigint): string {
  return `$${(Number(priceCents) / 100).toFixed(2)}`;
}
