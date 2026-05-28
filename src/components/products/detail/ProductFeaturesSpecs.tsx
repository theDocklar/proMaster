import type { ProductDetail } from "@/types/product";

type ProductFeaturesSpecsProps = {
  product: ProductDetail;
};

export default function ProductFeaturesSpecs({ product }: ProductFeaturesSpecsProps) {
  return (
    <>
      <div id="overview" className="di-features scroll-mt-32">
        {product.features.map((feature) => (
          <div className="di-feat-item" key={feature}>
            {feature}
          </div>
        ))}
      </div>

      <div id="specs" className="di-specs scroll-mt-32">
        {product.specifications.map(({ key, value }) => (
          <div className="di-spec-row" key={key}>
            <span className="di-spec-key">{key}</span>
            <span className="di-spec-val">{value}</span>
          </div>
        ))}
      </div>

      <div id="application" className="di-area-row scroll-mt-32">
        {product.applicationAreas.map((area) => (
          <span className="di-area-tag" key={area}>
            {area}
          </span>
        ))}
      </div>
    </>
  );
}
