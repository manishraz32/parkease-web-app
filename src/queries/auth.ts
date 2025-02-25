'use client';
//  eslint-disable @typescript-eslint/no-use-before-define 
//  eslint-disable react-hooks/rules-of-hooks 
import {  useMutation, useQuery } from '@tanstack/react-query';
import { Endpoints } from '@/constants';
import callAPI from '@/services/useAPI';
import { toast } from "react-hot-toast";
import { ReceiptRussianRuble } from 'lucide-react';




// export const useRegisterUser = () => {
//   const queryClient = useQueryClient();
//   return useMutation(postRegisterUser, {
//     onSuccess: (response: any) => {
//       setCookie(
//         QueryKeys.LOGGED_IN,
//         JSON.stringify({
//           tenantId: 'true',
//           spaceId: 1,
//         })
//       );
//     },
//   });
// };


const registerUser = async (registerData: any) => {
    return callAPI({ url: Endpoints.REGISTER, method: 'POST', data: registerData})
}

export const useRegisterUser = () => {
    return useMutation(
        {
            mutationFn: registerUser,
            onSuccess: () => {
            //toast.success("Account created successfully"); 
            //showMessage(true);
            },
            onError: () => {console.log("error")}
        }
    );
}
const logingUser = async(logingdata: any) => {
  return callAPI({url: Endpoints.LOGIN,method:'POST', data: logingdata})
}
export const useLoginUser = () => {
  return useMutation(
      {
          mutationFn: logingUser,
          onSuccess: () => {
          console.log("login is successfully")
          },
          onError: () => {console.log("error")}
      }
  );
}



const getPosts = () => {
  return callAPI({ url: Endpoints.POSTS, method: 'GET' });
};



const fetchParkingData = async () => {
  return callAPI({ url: Endpoints.GETPARKING, method: "GET" }); 
};

export const getParking = () => {
  return useQuery({
    queryKey: ["Parking"], 
    queryFn: fetchParkingData, 
  });
};



export const useGetPost = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: getPosts 
  });
};