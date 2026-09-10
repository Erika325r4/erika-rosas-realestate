"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
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

const propertyTypes: { value: string; label: string }[] = [
  { value: "", label: "Any Type" },
  { value: "home", label: "Home" },
  { value: "land", label: "Land / Acreage" },
  { value: "manufactured", label: "Manufactured Home" },
  { value: "new-construction", label: "New Construction" },
  { value: "investment", label: "Investment Property" },
];

const inputClass = "tap-target w-full rounded-lg border border-navy/15 bg-white px-3 py-2 text-sm";

export function PropertyFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [city, setCity] = useState(searchParams.get("city") ?? "Any City");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") ?? "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") ?? "");
  const [bedrooms, setBedrooms] = useState(searchParams.get("bedrooms") ?? "");
  const [bathrooms, setBathrooms] = useState(searchParams.get("bathrooms") ?? "");
  const [propertyType, setPropertyType] = useState(searchParams.get("propertyType") ?? "");
  const [minAcreage, setMinAcreage] = useState(searchParams.get("minAcreage") ?? "");
  const [manufacturedHome, setManufacturedHome] = useState(
    searchParams.get("manufacturedHome") === "true",
  );
  const [newConstruction, setNewConstruction] = useState(
    searchParams.get("newConstruction") === "true",
  );
  const [waterfront, setWaterfront] = useState(searchParams.get("waterfront") === "true");
  const [noHoa, setNoHoa] = useState(searchParams.get("noHoa") === "true");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (city !== "Any City") params.set("city", city);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (bedrooms) params.set("bedrooms", bedrooms);
    if (bathrooms) params.set("bathrooms", bathrooms);
    if (propertyType) params.set("propertyType", propertyType);
    if (minAcreage) params.set("minAcreage", minAcreage);
    if (manufacturedHome) params.set("manufacturedHome", "true");
    if (newConstruction) params.set("newConstruction", "true");
    if (waterfront) params.set("waterfront", "true");
    if (noHoa) params.set("noHoa", "true");

    trackEvent("property_search", Object.fromEntries(params.entries()));
    router.push(`/search${params.toString() ? `?${params.toString()}` : ""}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Filter listings"
      className="flex flex-col gap-4 rounded-2xl border border-navy/10 bg-white p-5"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm font-medium text-charcoal">
          City
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={`${inputClass} mt-1`}
          >
            {cities.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium text-charcoal">
          Property Type
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className={`${inputClass} mt-1`}
          >
            {propertyTypes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm font-medium text-charcoal">
          Min Price
          <input
            type="number"
            min={0}
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className={`${inputClass} mt-1`}
          />
        </label>
        <label className="text-sm font-medium text-charcoal">
          Max Price
          <input
            type="number"
            min={0}
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className={`${inputClass} mt-1`}
          />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <label className="text-sm font-medium text-charcoal">
          Bedrooms
          <input
            type="number"
            min={0}
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className={`${inputClass} mt-1`}
          />
        </label>
        <label className="text-sm font-medium text-charcoal">
          Bathrooms
          <input
            type="number"
            min={0}
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            className={`${inputClass} mt-1`}
          />
        </label>
        <label className="text-sm font-medium text-charcoal">
          Min Acreage
          <input
            type="number"
            min={0}
            step="0.1"
            value={minAcreage}
            onChange={(e) => setMinAcreage(e.target.value)}
            className={`${inputClass} mt-1`}
          />
        </label>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <label className="flex items-center gap-2 text-sm text-charcoal">
          <input
            type="checkbox"
            checked={manufacturedHome}
            onChange={(e) => setManufacturedHome(e.target.checked)}
          />
          Manufactured home
        </label>
        <label className="flex items-center gap-2 text-sm text-charcoal">
          <input
            type="checkbox"
            checked={newConstruction}
            onChange={(e) => setNewConstruction(e.target.checked)}
          />
          New construction
        </label>
        <label className="flex items-center gap-2 text-sm text-charcoal">
          <input
            type="checkbox"
            checked={waterfront}
            onChange={(e) => setWaterfront(e.target.checked)}
          />
          Waterfront
        </label>
        <label className="flex items-center gap-2 text-sm text-charcoal">
          <input type="checkbox" checked={noHoa} onChange={(e) => setNoHoa(e.target.checked)} />
          No HOA
        </label>
      </div>

      <button
        type="submit"
        className="tap-target rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0f2233]"
      >
        Apply Filters
      </button>
    </form>
  );
}
