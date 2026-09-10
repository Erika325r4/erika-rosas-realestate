export type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const mainNavigation: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Search Homes", href: "/search" },
  { label: "Sell With Erika", href: "/sell" },
  {
    label: "Property Types",
    href: "/property-types",
    children: [
      { label: "Homes", href: "/property-types/homes" },
      { label: "Land and Acreage", href: "/property-types/land-acreage" },
      { label: "Manufactured Homes", href: "/property-types/manufactured-homes" },
      { label: "New Construction", href: "/property-types/new-construction" },
      { label: "Investment Properties", href: "/property-types/investment-properties" },
    ],
  },
  { label: "Areas Served", href: "/areas" },
  { label: "About Erika", href: "/about" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Buyer Guide", href: "/resources/buyer-guide" },
      { label: "Seller Guide", href: "/resources/seller-guide" },
      { label: "Military and VA Buyers", href: "/resources/military-va" },
      { label: "Relocation Guide", href: "/resources/relocation" },
      { label: "Divorce Property Support", href: "/resources/divorce-property-support" },
      { label: "Blog", href: "/blog" },
      { label: "Spanish Resources", href: "/resources/spanish" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  explore: [
    { label: "Search Homes", href: "/search" },
    { label: "Sell With Erika", href: "/sell" },
    { label: "About Erika", href: "/about" },
    { label: "Areas Served", href: "/areas" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  propertyTypes: [
    { label: "Homes", href: "/property-types/homes" },
    { label: "Land and Acreage", href: "/property-types/land-acreage" },
    { label: "Manufactured Homes", href: "/property-types/manufactured-homes" },
    { label: "New Construction", href: "/property-types/new-construction" },
    { label: "Investment Properties", href: "/property-types/investment-properties" },
  ],
  resources: [
    { label: "Buyer Guide", href: "/resources/buyer-guide" },
    { label: "Seller Guide", href: "/resources/seller-guide" },
    { label: "Military and VA Buyers", href: "/resources/military-va" },
    { label: "Relocation Guide", href: "/resources/relocation" },
    { label: "Divorce Property Support", href: "/resources/divorce-property-support" },
    { label: "Spanish Resources", href: "/resources/spanish" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Accessibility Statement", href: "/accessibility" },
  ],
} as const;
