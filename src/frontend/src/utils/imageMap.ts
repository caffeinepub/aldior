/**
 * Map product categories and names to local generated images
 */
export function getProductImage(category: string, name: string): string {
  const cat = category.toLowerCase();
  const n = name.toLowerCase();

  if (n.includes("bomber")) {
    return "/assets/generated/product-bomber.dim_800x1000.jpg";
  }
  if (n.includes("coach") || n.includes("windbreaker")) {
    return "/assets/generated/product-coach.dim_800x1000.jpg";
  }
  if (cat === "outerwear" || n.includes("jacket") || n.includes("coat")) {
    return "/assets/generated/product-bomber.dim_800x1000.jpg";
  }
  if (
    n.includes("hoodie") ||
    n.includes("sweatshirt") ||
    n.includes("fleece")
  ) {
    return "/assets/generated/product-hoodie.dim_800x1000.jpg";
  }
  if (
    cat === "bottoms" ||
    n.includes("trouser") ||
    n.includes("pant") ||
    n.includes("jean") ||
    n.includes("cargo") ||
    n.includes("denim")
  ) {
    if (n.includes("cargo"))
      return "/assets/generated/product-cargo.dim_800x1000.jpg";
    return "/assets/generated/product-trousers.dim_800x1000.jpg";
  }
  if (
    cat === "tops" ||
    n.includes("tee") ||
    n.includes("t-shirt") ||
    n.includes("shirt") ||
    n.includes("long sleeve") ||
    n.includes("graphic")
  ) {
    return "/assets/generated/product-tshirt.dim_800x1000.jpg";
  }
  if (n.includes("beanie") || n.includes("hat") || n.includes("cap")) {
    return "/assets/generated/product-beanie.dim_800x1000.jpg";
  }
  if (cat === "accessories" || n.includes("bag")) {
    return "/assets/generated/product-bag.dim_800x1000.jpg";
  }
  // Fallback — cycle through images
  const images = [
    "/assets/generated/product-tshirt.dim_800x1000.jpg",
    "/assets/generated/product-bomber.dim_800x1000.jpg",
    "/assets/generated/product-hoodie.dim_800x1000.jpg",
    "/assets/generated/product-trousers.dim_800x1000.jpg",
  ];
  // Use a hash of the name for consistent cycling
  const hash = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return images[hash % images.length];
}

export function formatPrice(pricePaise: bigint): string {
  const amount = Number(pricePaise) / 100;
  return `₹${amount.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
}
