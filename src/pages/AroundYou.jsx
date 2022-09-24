import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';
import CardsSkeleton from '../components/CardsSkeleton';

const CountryTracks = () => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  let available = [
    'DE,PT,DK,HR,UA,HU,MA,ID,IE,US,EG,IL,UY,IN,ZA,IT,MX…G,BY,GB,CA,CH,KR,CL,GR,CN,CO,KZ,CR,TH,PE,CZ,PL,TR',
  ];

  console.log(country);
  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_QUaF3el0dW60uQp0RRhX2MOhwWJiW`
      )
      .then((res) => setCountry(res?.data?.location.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);
  console.log(country);
  const getCorrectCountry = (country) => {
    if (available.includes(country)) return country;
    return 'US';
  };

  const { data, isFetching, error } = useGetSongsByCountryQuery(
    getCorrectCountry(country)
  );

  if (error && country !== '') return <Error />;

  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Around you <span className='font-black'>{country}</span>
      </h2>
      {isFetching && loading && <CardsSkeleton />}
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryTracks;
