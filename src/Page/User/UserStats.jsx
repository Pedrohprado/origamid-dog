import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { STATS_GET } from '../../api';
import Loading from '../../Components/Helper/Loading';
import Error from '../../Components/Helper/Error';

const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

const UserStats = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }

    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<></>}>
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
