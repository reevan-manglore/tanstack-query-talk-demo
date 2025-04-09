import type React from 'react';

import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';

import { createFeature } from '~/services/api-service';
import { toast } from 'sonner';

function FeatureRequestForm() {
  const [title, setTitle] = useState('');
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createFeature,
    onError: (error) => {
      toast.error(
        'An error occurred while submitting your request. Please try again.'
      );
    },
    onSuccess: () => {
      toast.success('Feature request submitted successfully!');
      queryClient.invalidateQueries({ queryKey: ['feature-requests'] });
      setTitle('');
    },
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    mutateAsync(title);
  }

  return (
    <Card className="sticky top-20 z-10 h-fit">
      <CardHeader>
        <CardTitle>Submit a Feature Request</CardTitle>
        <CardDescription>
          Share your ideas for new features or improvements
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter a concise title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full my-4" disabled={isPending}>
            {isPending ? 'Submitting...' : 'Submit Request'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default FeatureRequestForm;
