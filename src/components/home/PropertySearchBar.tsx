"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { trackEvent } from "@/lib/analytics";

const cities = [
  "Any City",
  "Jacksonville",
  "Lake City",
  "Live Oak",
  "Branford",
  "Fort White",
  "Macclenny",
  "Hilliard",
  "Fernandina Beach",
  "St. Augustine",
  "Palatka",
];

const priceOptions = [
  { label: "Any Max Price", value: "" },
  { label: "$150,000", value: "150000" },
  { label: "$250,000", value: "250000" },
  { label: "$350,000", value: "350000" },
  { label: "$500,000", value: "500000" },
  { label: "$750,000+", value: "750000" },
];

const bedroomOptions = ["Any Beds", "1+", "2+", "3+", "4+"];

export function PropertySearchBar() {
  const router = useRouter();
  const [city, setCity] = useState("Any City");
  const [maxPrice, setMaxPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("Any Beds");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (city !== "Any City") params.set("city", city);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (bedrooms !== "Any Beds") params.set("bedrooms", bedrooms.replace("+", ""));
    trackEvent("property_search", { source: "homepage-bar", city, maxPrice, bedrooms });
    router.push(`/search${params.toString() ? `?${params.toString()}` : ""}`);
  }

  return (
    <section className="relative z-10 -mt-8 pb-4">
      <Container>
        <form
          onSubmit={handleSubmit}
          className="grid gap-3 rounded-2xl border border-navy/10 bg-white p-4 shadow-lg sm:grid-cols-4 sm:items-end"
        >
          <label className="flex flex-col gap-1 text-sm font-medium text-charcoal">
            City
            <select
              value={city}
              onChange={(event) => setCity(event.target.value)}
              className="tap-target rounded-lg border border-navy/15 bg-white px-3 py-2 text-sm"
            >
              {cities.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-charcoal">
            Max Price
            <select
              value={maxPrice}
              onChange={(event) => setMaxPrice(event.target.value)}
              className="tap-target rounded-lg border border-navy/15 bg-white px-3 py-2 text-sm"
            >
              {priceOptions.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-charcoal">
            Bedrooms
            <select
              value={bedrooms}
              onChange={(event) => setBedrooms(event.target.value)}
              className="tap-target rounded-lg border border-navy/15 bg-white px-3 py-2 text-sm"
            >
              {bedroomOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="tap-target flex items-center justify-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0f2233]"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Search Homes
          </button>
        </form>
      </Container>
    </section>
  );
}
