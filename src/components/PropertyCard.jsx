import { Link } from "react-router-dom";
import classes from "../styles/PropertyCard.module.css";
import OfficeOne from "../assets/images/office-1.jpg";
import OfficeTwo from "../assets/images/office-2.jpg";
import OfficeThree from "../assets/images/office-3.jpg";
import OfficeFour from "../assets/images/office-4.jpg";
import Location from "../assets/images/location.svg";
import Star from "../assets/images/star.svg";
import Enquiry from "../assets/images/enquiry.svg";
import Compare from "../assets/images/compare.svg";
import Download from "../assets/images/download.svg";

const Images = {
  office1: OfficeOne,
  office2: OfficeTwo,
  office3: OfficeThree,
  office4: OfficeFour
};

const PropertyCard = ({ property }) => {
  return (
    <div className={classes.property}>
      <div className={classes.propertyImage}>
        <Link to={`/property/${property.id}`}>
          <img src={Images[property.image]} alt="" />
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
          <p className={classes.propertyActionsStatus}>
            <div>
              <div className="text-muted">Status: </div>
              <span className="text-red font-500">{property.status}</span>
            </div>
          </p>
          <p className={classes.propertyActionsStatus}>
            <div>
              <div className="text-muted">Office Space: </div>
              <span className="text-red font-500">{property.office_space}</span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
