'use client';
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Endpoints } from '@/constants';
import useAPI from '@/services/useAPI';
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

const getPosts = async () => {
  return useAPI({ url: Endpoints.POSTS, method: 'GET' });
};

export const useGetPost = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });
};
