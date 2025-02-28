import { Navbar } from '@/components/Navbar';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: '1',
    name: 'Summer Fridays Lip Butter Balm',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa',
    description: 'Lip Butter Balm for Hydration & Shine',
    category: 'Makeup',
    isNew: true,
    isLimitedEdition: true
  },
  {
    id: '2',
    name: 'LANEIGE Glaze Craze Tinted',
    price: 22.00,
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af',
    description: 'Polypeptide Lip Serum',
    category: 'Skincare',
    isNew: true
  },
  {
    id: '3',
    name: 'Rare Beauty Soft Pinch Liquid Blush',
    price: 23.00,
    image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92',
    description: 'Weightless, long-lasting liquid blush',
    category: 'Makeup',
    isNew: false,
    isLimitedEdition: false
  },
  {
    id: '4',
    name: 'Charlotte Tilbury Airbrush Flawless Finish',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1599733594230-6b823276abcc',
    description: 'Setting Powder',
    category: 'Makeup',
    isNew: false,
    isLimitedEdition: true
  }
];

const featuredBrands = [
  { name: 'Rare Beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348' },
  { name: 'Charlotte Tilbury', image: 'https://images.unsplash.com/photo-1599733358449-716b5d8d3a75' },
  { name: 'Fenty Beauty', image: 'https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4' },
  { name: 'Pat McGrath Labs', image: 'https://images.unsplash.com/photo-1599733432348-6b54dc4b9d32' }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-full bg-black text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Now Serving: New Makeup</h2>
            <p className="mb-4">Buttery, silky, juicy picks—plus 4X points on all of it.</p>
            <button className="text-white border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors">
              USE CODE NOWSERVING
            </button>
          </div>
        </div>

        {/* Featured Collections */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Clean Beauty</h3>
              <p className="text-gray-600 mb-4">Shop our curated selection of clean beauty products</p>
              <Button variant="outline">Shop Now</Button>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Bestsellers</h3>
              <p className="text-gray-600 mb-4">Discover our most-loved products</p>
              <Button variant="outline">Shop Now</Button>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">New Arrivals</h3>
              <p className="text-gray-600 mb-4">Be the first to try our latest products</p>
              <Button variant="outline">Shop Now</Button>
            </div>
          </div>
        </div>

        {/* Chosen For You */}
        <h2 className="text-2xl font-bold mb-6">Chosen For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Beauty Tips */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Beauty Tips & Tricks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Master the Perfect Cat Eye</h3>
              <p className="text-gray-600 mb-4">Learn the secrets to achieving a flawless winged liner look.</p>
              <Button variant="link">Read More →</Button>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Skincare Routine Guide</h3>
              <p className="text-gray-600 mb-4">Build your perfect morning and evening skincare routine.</p>
              <Button variant="link">Read More →</Button>
            </div>
          </div>
        </div>

        {/* Featured Brands */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredBrands.map((brand) => (
              <div key={brand.name} className="text-center">
                <div className="aspect-square rounded-full overflow-hidden mb-4">
                  <img src={brand.image} alt={brand.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-medium">{brand.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-100 p-8 rounded-lg text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Join Beauty Insider</h2>
          <p className="text-gray-600 mb-6">Get exclusive offers, early access to new products, and beauty tips delivered straight to your inbox.</p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </main>
  );
}