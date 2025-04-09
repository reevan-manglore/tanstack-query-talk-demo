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
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { formatDate } from '~/lib/utils';

import {
  FeatureResponse,
  getFeatureById,
  StandardResponse,
  toggleLikeFeature,
} from '~/services/api-service';
import { toast } from 'sonner';

export interface FeatureRequest {
  id: number;
  title: string;

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
          <LikeButton id={request.id} />
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
  id: number;
}

function LikeButton({ id }: LikeButtonProps) {
  const { data: feature, isLoading } = useQuery({
    queryKey: ['feature-requests', id],
    queryFn: async () => {
      return getFeatureById(id);
    },
  });
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (isLiked: boolean) => toggleLikeFeature(id, isLiked),
    onMutate: async (isLiked) => {
      await queryClient.cancelQueries({
        queryKey: ['feature-requests'],
      });
      const previousFeature = queryClient.getQueryData<
        StandardResponse<FeatureResponse>
      >(['feature-requests', id]);

      if (!previousFeature || !previousFeature.data?.feature) return;

      queryClient.setQueryData<StandardResponse<FeatureResponse>>(
        ['feature-requests', id],
        () => {
          return {
            ...previousFeature,
            data: {
              feature: {
                ...(previousFeature.data as unknown as FeatureResponse).feature,
                liked: isLiked,
              },
            },
          };
        }
      );
      return { previousFeature };
    },
    onError: (_, __, context) => {
      toast.error('Error liking feature request');
      if (!context) return;
      queryClient.setQueryData(
        ['feature-requests', id],
        context.previousFeature
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['feature-requests', id],
      });
    },
  });

  function handleLikeToggle() {
    const newLikedState = !(feature?.data?.feature.liked ?? false);
    mutate(newLikedState);
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className={`flex flex-col gap-1 h-auto ${feature?.data?.feature.liked ? 'text-primary' : ''}`}
      onClick={handleLikeToggle}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <div className="h-5 w-5 rounded-full bg-gray-400 animate-pulse" />
        </>
      ) : (
        <>
          <Heart
            className={`h-5 w-5 ${feature?.data?.feature.liked ? 'fill-primary' : ''}`}
          />
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
