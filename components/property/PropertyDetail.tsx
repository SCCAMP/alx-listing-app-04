import { PropertyProps } from "@/interfaces";
import ReviewSection from "./ReviewSection";

interface PropertyDetailPageProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailPageProps> = ({ property }) => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{property.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img 
          src={property.image} 
          alt={property.name} 
          className="rounded-xl w-full h-[400px] object-cover" 
        />
        
        <div>
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 mb-4">{property.description}</p>
          
          <h2 className="text-2xl font-semibold mb-2">Amenities</h2>
          <ul className="grid grid-cols-2 gap-2 mb-6">
            {property.amenities.map((item, index) => (
              <li key={index} className="bg-gray-100 p-2 rounded text-sm text-center">
                {item}
              </li>
            ))}
          </ul>

          <div className="p-4 border rounded-lg bg-blue-50">
            <p className="text-xl font-bold">${property.price} / night</p>
            <button className="w-full mt-4 bg-pink-600 text-white py-3 rounded-lg font-bold hover:bg-pink-700">
              Reserve Now
            </button>
          </div>
        </div>
      </div>

      <hr className="my-10" />
      
      {/* Dynamic Review Section */}
      <ReviewSection propertyId={property.id} />
    </div>
  );
};

export default PropertyDetail;