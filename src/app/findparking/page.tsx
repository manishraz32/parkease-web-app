'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, MapPin, Phone } from 'lucide-react';

// Mock data for parking spaces
const mockParkingSpaces = [
  {
    id: 1,
    name: 'Central Park Garage',
    rating: 4.5,
    place: 'Downtown',
    phone: '123-456-7890',
  },
  {
    id: 2,
    name: 'Riverside Parking',
    rating: 4.2,
    place: 'Riverside',
    phone: '234-567-8901',
  },
  {
    id: 3,
    name: 'Mall Parking Complex',
    rating: 4.0,
    place: 'Shopping District',
    phone: '345-678-9012',
  },
];

export default function Home() {
  const [city, setCity] = useState('');
  const [parkingSpaces, setParkingSpaces] = useState<typeof mockParkingSpaces>(
    []
  );
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would fetch data based on the city
    // For this example, we'll just use the mock data
    setParkingSpaces(mockParkingSpaces);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Find Parking Spaces
      </h1>
      <form onSubmit={handleSubmit} className="flex gap-4 mb-8">
        <Input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit">Search</Button>
      </form>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {parkingSpaces.map((space) => (
          <Card
            key={space.id}
            className="cursor-pointer hover:shadow-lg transition-shadow"
          >
            <Link href={`findparking/parking/${space.id}`}>
              <CardHeader>
                <CardTitle>{space.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span>{space.rating.toFixed(1)}</span>
                </div>
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{space.place}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>{space.phone}</span>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
