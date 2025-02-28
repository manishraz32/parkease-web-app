

'use client';

import { useState , useEffect} from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCreateBookingUser } from '@/queries/auth';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ReservationPage() {
  const { id: parkingId } = useParams();
  console.log('parkingId', parkingId);
  const router = useRouter();
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: '',
    startDate: '',
    startTime: '',
    duration: '',
  });

  const { mutate: userMutate } = useCreateBookingUser();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    
    const userData = localStorage.getItem("user");
    console.log("userData",userData)
    const bookedBy = userData ? JSON.parse(userData)._id : null;
    
    if (!bookedBy) {
      console.error("User ID not found in localStorage");
    }
    const startDateTime = new Date(
      `${formData.startDate}T${formData.startTime}:00Z`
    );
    console.log('startDateTime', startDateTime);

    const bookingData = {
      ...formData,
      startDateTime,
      parkingId,
      bookedBy,
    };

    console.log('bookingData', bookingData);
    userMutate(bookingData);
    alert('Reservation completed!');
  };

  return (
    <div className="mx-auto px-4 py-8 container">
      <Link href={`/findparking/parking/${parkingId}`}>
        <Button variant="outline" className="mb-4">
          ← Back to Parking Space
        </Button>
      </Link>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Reserve a Parking Spot</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="gap-4 grid md:grid-cols-2">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="vehicleType">Vehicle Type</Label>
                <Select
                  name="vehicleType"
                  onValueChange={handleSelectChange('vehicleType')}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select vehicle type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="car">Car</SelectItem>
                    <SelectItem value="motorcycle">Motorcycle</SelectItem>
                    <SelectItem value="van">Van</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="startTime">Start Time</Label>
                <Input
                  id="startTime"
                  name="startTime"
                  type="time"
                  value={formData.startTime}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="duration">Duration (hours)</Label>
                <Input
                  id="duration"
                  name="duration"
                  type="number"
                  min="1"
                  max="24"
                  value={formData.duration}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" onClick={handleSubmit}>
            Confirm Reservation
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

