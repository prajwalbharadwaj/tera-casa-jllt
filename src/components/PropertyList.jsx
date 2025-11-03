import { properties } from "../data/properties.js";
import PropertyCard from "./PropertyCard.jsx";

const PropertyList = () => {
  return (
    <section className="list">
      {properties.map((item) => (
        <div key={item.id}>
          <PropertyCard property={item} />
        </div>
      ))}
    </section>
  );
};

export default PropertyList;
