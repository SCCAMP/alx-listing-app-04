export interface PropertyProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  location: {
    city: string;
    country: string;
  };
  rating: number;
  amenities: string[];
}

export interface ReviewProps {
  id: string;
  user: string;
  avatar: string;
  comment: string;
  rating: number;
}