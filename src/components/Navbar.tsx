"use client";

import Link from "next/link";
import {useCartStore} from "@/lib/store";
import {ShoppingBag, Search} from "lucide-react";

export function Navbar() {
  const items = useCartStore((state) => state.items);

  return (
    <div className="w-full">
      <div className="bg-black text-white text-sm py-1 px-4 text-center">
        Don&apos;t miss out! So many deals, trial sizes, sample sets and more.
        <Link href="/offers" className="underline ml-2">
          Shop Beauty Offers
        </Link>
      </div>
      <div className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            SEPHORA
          </Link>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 border rounded-full bg-gray-50"
              />
              <Search
                className="absolute right-4 top-2.5 text-gray-400"
                size={20}
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Link href="/stores" className="text-sm hover:text-gray-600">
                Stores & Services
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/community" className="text-sm hover:text-gray-600">
                Community
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/sign-in" className="text-sm hover:text-gray-600">
                Sign In
              </Link>
            </div>
            <Link href="/cart" className="relative">
              <ShoppingBag size={24} />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        <nav className="container mx-auto px-4 py-2">
          <ul className="flex gap-6 text-sm">
            {[
              "New",
              "Brands",
              "Makeup",
              "Skincare",
              "Hair",
              "Fragrance",
              "Tools & Brushes",
              "Bath & Body",
              "Mini Size",
              "Beauty Under $20",
              "Gifts & Gift Cards",
              "Sale & Offers",
            ].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(/ /g, "-")}`}
                  className="hover:text-gray-600"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
