import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { useQuery } from '@tanstack/react-query';
import { getProfilePicture } from '~/services/api-service';

export function UserAvatar() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user'],
    queryFn: () => getProfilePicture(),
  });
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage
        src={!isLoading && !error ? data?.data?.avatarUrl : undefined}
        alt="Profile picture"
      />
      <AvatarFallback />
    </Avatar>
  );
}
