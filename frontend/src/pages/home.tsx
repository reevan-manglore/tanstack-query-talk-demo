import Header from '~/components/headder';
import SearchBar from '~/components/search-bar';
import ColumnLayout from '~/components/column-layout';
import FeatureRequestList from '~/components/feature-request-list';
import FeatureRequestForm from '~/components/feature-request-form';

function Home() {
  return (
    <section className="">
      <Header />

      <ColumnLayout>
        <div>
          <SearchBar />
          <FeatureRequestList />
        </div>
        <FeatureRequestForm />
      </ColumnLayout>
    </section>
  );
}

export default Home;
