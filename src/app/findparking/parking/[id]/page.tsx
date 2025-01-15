'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, MapPin, Phone, Clock, Car, DollarSign } from 'lucide-react';

// Mock data for a single parking space
const mockParkingSpace = {
  id: 1,
  name: 'Central Park Garage',
  rating: 4.5,
  place: '123 Main St, Downtown',
  phone: '123-456-7890',
  hours: '24/7',
  capacity: 500,
  hourlyRate: 2.5,
  description:
    "Conveniently located in the heart of downtown, Central Park Garage offers secure and affordable parking for both short-term and long-term needs. With 24/7 access and ample space, it's the perfect solution for your parking requirements.",
};

export default function ParkingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  // In a real application, you would fetch the parking space data based on the id
  // For this example, we'll just use the mock data
  const space = mockParkingSpace;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/findparking">
        <Button variant="outline" className="mb-4">
          ← Back to Search
        </Button>
      </Link>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{space.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="flex items-center mb-2">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span>{space.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{space.place}</span>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="w-5 h-5 mr-2" />
                <span>{space.phone}</span>
              </div>
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 mr-2" />
                <span>{space.hours}</span>
              </div>
              <div className="flex items-center mb-2">
                <Car className="w-5 h-5 mr-2" />
                <span>{space.capacity} spaces</span>
              </div>
              <div className="flex items-center mb-2">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>${space.hourlyRate.toFixed(2)} / hour</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p>{space.description}</p>
            </div>
          </div>
          <div className="mt-6">
            <Button asChild>
              <Link href={`/findparking/parking/${id}/reserve`}>
                Reserve a Spot
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
