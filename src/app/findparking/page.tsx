'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, MapPin, Phone } from 'lucide-react';
import { getParking } from '@/queries/auth';

// Mock data for parking spaces
// const mockParkingSpaces = [
//   {
//     id: 1,
//     name: 'Central Park Garage',
//     rating: 4.5,
//     place: 'Downtown',
//     phone: '123-456-7890',
//   },
//   {
//     id: 2,
//     name: 'Riverside Parking',
//     rating: 4.2,
//     place: 'Riverside',
//     phone: '234-567-8901',
//   },
//   {
//     id: 3,
//     name: 'Mall Parking Complex',
//     rating: 4.0,
//     place: 'Shopping District',
//     phone: '345-678-9012',
//   },
//];

export default function Home() {
  const [state, setState] = useState('');
  const [filteredParking, setFilteredParking] = useState<any[]>([]);
 
  const { data: parkingSpaces = [], isLoading, isError } = getParking();
  
  console.log("parkingSpaces",parkingSpaces);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would fetch data based on the city
    // For this example, we'll just use the mock data
    //setParkingSpaces(mockParkingSpaces);


    if (!state.trim()) {
      setFilteredParking(parkingSpaces?.data || []);
      return;
    }

    const filtered = parkingSpaces?.data?.filter((space: any) =>
      space.state.toLowerCase().includes(state.toLowerCase())
    );

    setFilteredParking(filtered);
  };

  return (
    <div className="mx-auto px-4 py-8 container">
      <h1 className="mb-8 font-bold text-3xl text-center">
        Find Parking Spaces
      </h1>
      <form onSubmit={handleSubmit} className="flex gap-4 mb-8">
        <Input
          type="text"
          placeholder="Enter state name"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit">Search</Button>
      </form>
      {isLoading && <p className="text-center">Loading...</p>}
      {isError && <p className="text-red-500 text-center">Failed to fetch data</p>}

      <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
        {(filteredParking.length > 0 ? filteredParking : parkingSpaces?.data)?.map((space: any) => (
          <Card
            key={space?._id}
            className="hover:shadow-lg transition-shadow cursor-pointer"
          >
            <Link href={`findparking/parking/${space._id}`}>
              <CardHeader>
                <CardTitle>{space.parkingName}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-2">
                  <Star className="mr-1 w-5 h-5 text-yellow-400" />
                  {/* <span>{space.rating.toFixed(1)}</span> */}
                </div>
                <div className="flex items-center mb-2">
                  <MapPin className="mr-2 w-5 h-5" />
                  <span>{space.state}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 w-5 h-5" />
                  <span>{space.phoneNumber}</span>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

