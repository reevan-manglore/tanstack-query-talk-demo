import Header from '~/components/headder';
import SearchBar from '~/components/search-bar';
import ColumnLayout from '~/components/column-layout';
import FeatureRequestList from '~/components/feature-request-list';
import FeatureRequestCard from '~/components/feature-request-card';
import FeatureRequestForm from '~/components/feature-request-form';

const featureRequests = [
  {
    id: '1',
    title: 'Feature Request 1',
    likes: 10,
    createdAt: '2023-10-01',
  },
  {
    id: '2',
    title: 'Feature Request 2',
    likes: 5,

    createdAt: '2023-10-02',
  },
  {
    id: '3',
    title: 'Feature Request 3',
    likes: 8,
    createdAt: '2023-10-03',
  },
  {
    id: '4',
    title: 'Feature Request 4',
    likes: 3,
    createdAt: '2023-10-04',
  },
  {
    id: '5',
    title: 'Feature Request 5',
    likes: 12,
    createdAt: '2023-10-05',
  },
  {
    id: '6',
    title: 'Feature Request 6',
    likes: 7,
    createdAt: '2023-10-06',
  },
  {
    id: '7',
    title: 'Feature Request 7',
    likes: 2,
    createdAt: '2023-10-07',
  },
  {
    id: '8',
    title: 'Feature Request 8',
    likes: 15,
    createdAt: '2023-10-08',
  },
  {
    id: '9',
    title: 'Feature Request 9',
    likes: 4,
    createdAt: '2023-10-09',
  },
  {
    id: '10',
    title: 'Feature Request 10',
    likes: 6,
    createdAt: '2023-10-10',
  },
];

function Home() {
  return (
    <section className="">
      <Header />

      <ColumnLayout>
        <div>
          <SearchBar />
          <FeatureRequestList>
            {featureRequests.map((request) => (
              <FeatureRequestCard key={request.id} request={request} />
            ))}
          </FeatureRequestList>
        </div>
        <FeatureRequestForm />
      </ColumnLayout>
    </section>
  );
}

export default Home;
