import { useSearchParams } from 'react-router';

import { Search } from 'lucide-react';
import { Input } from '~/components/ui/input';

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = (
    newParams: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = newParams.target.value;
    if (!value || value.length === 0) {
      setSearchParams((prev) => {
        prev.delete('search');
        return prev;
      });
      return;
    }
    setSearchParams((prev) => ({ ...prev, search: newParams.target.value }));
  };

  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
      <Input
        type="search"
        placeholder="Search feature requests..."
        className="pl-8"
        value={searchParams.get('search') || ''}
        onChange={updateSearchParams}
      />
    </div>
  );
}
