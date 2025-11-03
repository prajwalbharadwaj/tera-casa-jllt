import { Link } from "react-router-dom";
import classes from "../styles/PropertyCard.module.css";
import Location from "../assets/images/location.svg";
import Star from "../assets/images/star.svg";
import Enquiry from "../assets/images/enquiry.svg";
import Compare from "../assets/images/compare.svg";
import Download from "../assets/images/download.svg";

const PropertyCard = ({ property }) => {
  return (
    <div className={classes.property}>
      <div className={classes.propertyImage}>
        <Link to={`/property/${property.id}`}>
          <img
            key={property.id}
            src={
              new URL(`../assets/images/${property.image}`, import.meta.url)
                .href
            }
            alt={property.name}
          />
        </Link>
      </div>
      <div className={classes.propertyContainer}>
        <div className={classes.propertyContent}>
          <Link to={`/property/${property.id}`}>
            <div className={classes.propertyName}> {property.name} </div>
          </Link>
          <div className={`${classes.propertyLocation} text-muted text-14`}>
            <img src={Location} alt="" />
            {property.location.city}{" "}
          </div>
          <div className={`text-14 text-muted`}> {property.description} </div>
        </div>
        <div className={classes.propertyActions}>
          <div className={classes.propertyActionsIcons}>
            <img src={Star} alt="" />
            <img src={Enquiry} alt="" />
            <img src={Compare} alt="" />
            <img src={Download} alt="" />
          </div>
          <div className={classes.propertyActionsStatus}>
            <div>
              <div className="text-muted">Status: </div>
              <span className="text-red font-500">{property.status}</span>
            </div>
          </div>
          <div className={classes.propertyActionsStatus}>
            <div>
              <div className="text-muted">Office Space: </div>
              <span className="text-red font-500">{property.office_space}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
