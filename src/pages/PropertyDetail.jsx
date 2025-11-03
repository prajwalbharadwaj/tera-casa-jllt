import { Link } from "react-router-dom";
import classes from "../styles/PropertyCard.module.css";

const PropertyDetail = () => {
  return (
    <div style={{ padding: "2rem", display: "grid", justifyContent: "center" }}>
      <Link to=".." className={classes.productDetails}>
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default PropertyDetail;
