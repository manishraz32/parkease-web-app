const AUTH = '/auth';
const POSTS = '/posts';
const REGISTER = '/api/auth/register';
const LOGIN = '/api/auth/login';
const GETPARKING = '/api/parking/get-parkings'
const GETPARKINGID = '/api/parking/get-parking/:id'
const CREATEBOOKING = '/api/booking/add-booking'

export default {
  AUTH,
  POSTS,
  REGISTER,
  LOGIN,
  GETPARKING,
  GETPARKINGID,
  CREATEBOOKING,
} as const;
