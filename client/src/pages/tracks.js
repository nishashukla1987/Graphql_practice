import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { Layout } from '../components';
import TrackCard from '../containers/track-card';

export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;
  return (
    <Layout grid>
      {data?.tracksForHome?.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </Layout>
  );
};

export default Tracks;
