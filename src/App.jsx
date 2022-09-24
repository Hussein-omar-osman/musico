import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
} from './pages';
import EmptySearchTerm from './pages/EmptySearch';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <SkeletonTheme baseColor='#202020' highlightColor='#444'>
      <div className='relative flex'>
        <Sidebar />
        <div className='flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]'>
          <Searchbar />

          <div className='px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse'>
            <div className='flex-1 h-fit pb-40'>
              <Routes>
                <Route path='/' index element={<Discover />} />
                <Route path='/top-artists' element={<TopArtists />} />
                <Route path='/top-charts' element={<TopCharts />} />
                <Route path='/around-you' element={<AroundYou />} />
                <Route path='/artists/:name/:id' element={<ArtistDetails />} />
                <Route path='/songs/:songid' element={<SongDetails />} />
                <Route path='/search/:searchTerm' element={<Search />} />
                <Route path='/search' element={<EmptySearchTerm />} />
              </Routes>
            </div>
            {window.innerWidth > 600 && (
              <div className='xl:sticky relative top-0 h-fit'>
                <TopPlay />
              </div>
            )}
          </div>
        </div>

        {activeSong?.title && (
          <div className='absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10'>
            <MusicPlayer />
          </div>
        )}
      </div>
    </SkeletonTheme>
  );
};

export default App;
