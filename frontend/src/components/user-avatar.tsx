import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Shimmer } from '~/components/ui/shimmer';
import { getProfilePicture } from '~/services/api-service';

export function UserAvatar() {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  useEffect(() => {
    getProfilePicture()
      .then((response) => {
        setImageUrl(response.data?.avatarUrl || undefined);
      })
      .catch((error) => {
        console.error('Error fetching profile picture:', error);
      });
  }, []);

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={imageUrl} alt="Profile picture" />
      <AvatarFallback>
        <Shimmer className="h-8 w-8 rounded-full bg-gray-200" />
      </AvatarFallback>
    </Avatar>
  );
}
