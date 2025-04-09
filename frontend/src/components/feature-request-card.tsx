'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Shimmer } from '~/components/ui/shimmer';

import { formatDate } from '~/lib/utils';

export interface FeatureRequest {
  id: number;
  title: string;
  likes: number;
  createdAt: string;
}

export default function FeatureRequestCard({
  request,
}: {
  request: FeatureRequest;
}) {
  return (
    <Card>
      <div className="flex">
        <div className="flex flex-col items-center justify-start p-4 border-r">
          <LikeButton initialLikes={request.likes} />
        </div>
        <div className="flex-1">
          <CardHeader>
            <CardTitle>{request.title}</CardTitle>
            <CardDescription>
              Submitted on {formatDate(request.createdAt)}
            </CardDescription>
          </CardHeader>
        </div>
      </div>
    </Card>
  );
}

interface LikeButtonProps {
  initialLikes: number;
  isLoading?: boolean;
}

function LikeButton({ initialLikes, isLoading = false }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);

  function handleLikeToggle() {
    if (isLoading) return;

    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    setLikeCount((prevCount) =>
      newLikedState ? prevCount + 1 : prevCount - 1
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className={`flex flex-col gap-1 h-auto ${isLiked ? 'text-primary' : ''}`}
      onClick={handleLikeToggle}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <div className="h-5 w-5 rounded-full bg-gray-400 animate-pulse" />
          <div className="h-4 w-4 rounded bg-gray-400 animate-pulse" />
        </>
      ) : (
        <>
          <Heart className={`h-5 w-5 ${isLiked ? 'fill-primary' : ''}`} />
          <span className="text-sm font-medium">{likeCount}</span>
        </>
      )}
    </Button>
  );
}

export function FeatureRequestSkeleton() {
  return (
    <Card>
      <div className="flex">
        <div className="flex flex-col items-center justify-start p-4 border-r">
          <Shimmer className="h-12 w-8 rounded-md bg-gray-200" />
        </div>
        <div className="flex-1">
          <div className="p-6 pb-3">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Shimmer className="h-6 w-48 rounded-md bg-gray-200" />
                <Shimmer className="h-4 w-32 rounded-md bg-gray-200" />
              </div>
              <Shimmer className="h-8 w-8 rounded-full bg-gray-200" />
            </div>
          </div>
          <div className="px-6 py-3">
            <Shimmer className="h-4 w-full rounded-md bg-gray-200 mb-2" />
            <Shimmer className="h-4 w-3/4 rounded-md bg-gray-200" />
          </div>
          <div className="px-6 py-3 border-t">
            <Shimmer className="h-4 w-24 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </Card>
  );
}
