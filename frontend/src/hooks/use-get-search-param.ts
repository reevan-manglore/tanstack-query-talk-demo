import { useSearchParams } from 'react-router';

function useGetSearchParam() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  return search ?? '';
}

export default useGetSearchParam;
