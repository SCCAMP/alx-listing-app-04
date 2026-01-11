import { PropertyProps } from "@/interfaces";
import Link from "next/link";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link href={`/property/${property.id}`}>
      <div className="border rounded-lg overflow-hidden shadow-hover transition-shadow cursor-pointer">
        <img 
          src={property.image} 
          alt={property.name} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">{property.name}</h3>
            <span className="text-yellow-500">★ {property.rating}</span>
          </div>
          <p className="text-gray-500 text-sm">
            {property.location.city}, {property.location.country}
          </p>
          <p className="mt-2 font-semibold text-green-700">
            ${property.price} / night
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;