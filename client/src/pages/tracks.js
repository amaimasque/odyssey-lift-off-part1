import React from 'react';
import { Layout } from '../components';
import { useQuery } from '@apollo/client';
import { TRACKS } from '../utils/graphql/queries';
import TrackCard from '../containers/track-card';
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const {loading, data, error} = useQuery(TRACKS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <Layout grid>
      {data.tracksForHome?.map((track) => (
        <TrackCard key={track.id} track={track}/>
      ))}
    </Layout>
  );
};

export default Tracks;
