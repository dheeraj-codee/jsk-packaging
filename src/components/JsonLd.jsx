export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "JSK Packaging",
    image: "https://jskpackaging.in/logo.jpg",
    "@id": "https://jskpackaging.in",
    url: "https://jskpackaging.in",
    telephone: "+91-93142-35578",
    address: {
      "@type": "PostalAddress",
      streetAddress: "D-25, Sudarshanpura Industrial Area, 22 Godam",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302006",
      addressCountry: "IN",
    },
    sameAs: ["https://www.instagram.com/jsk.packaging/"],
    description:
      "JSK Packaging is a Jaipur-based manufacturer of premium rigid boxes, mono cartons, jewellery boxes, gift boxes, sweet boxes, labels and luxury packaging.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}