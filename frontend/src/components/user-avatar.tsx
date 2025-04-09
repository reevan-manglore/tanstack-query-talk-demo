import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';

export function UserAvatar() {
  const imageUrl = 'https://api.dicebear.com/9.x/initials/svg?seed=Nolan';
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={imageUrl} alt="Profile picture" />
      <AvatarFallback />
    </Avatar>
  );
}
