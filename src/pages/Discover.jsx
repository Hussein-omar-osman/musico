import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { genres } from '../assets/constants';

const Discover = () => {
  const dispatch = useDispatch();
  const genreTitle = 'POP';
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title='Loading songs...' />;

  if (error) return <Error />;

  return (
    <div className='flex flex-col'>
      <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
        <h2 className='font-bold text-3xl text-white text-left'>
          Discover {genreTitle}
        </h2>

        <select
          onChange={() => {}}
          value=''
          className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

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

export default Discover;

const worldChartData = [
  {
    layout: '5',
    type: 'MUSIC',
    key: '590865488',
    title: 'Yours',
    subtitle: 'JIN',
    share: {
      subject: 'Yours - JIN',
      text: 'I used Shazam to discover Yours by JIN.',
      href: 'https://www.shazam.com/track/590865488/yours',
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/45/ce/0d/45ce0d71-a400-c4d4-253b-299eaf34eb5e/8809829712307.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Yours by JIN.',
      html: 'https://www.shazam.com/snippets/email-share/590865488?lang=en&country=GB',
      avatar:
        'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/bc/00/ab/bc00ab36-828e-0276-7313-5b9e9c8a84b7/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/590865488',
    },
    images: {
      background:
        'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/bc/00/ab/bc00ab36-828e-0276-7313-5b9e9c8a84b7/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/45/ce/0d/45ce0d71-a400-c4d4-253b-299eaf34eb5e/8809829712307.jpg/400x400cc.jpg',
      coverarthq:
        'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/45/ce/0d/45ce0d71-a400-c4d4-253b-299eaf34eb5e/8809829712307.jpg/400x400cc.jpg',
      joecolor: 'b:221e1fp:d4d6cfs:d3d8aet:b0b1acq:b0b391',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1593615825',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/b4/f3/05/b4f3054c-de88-9025-48dd-0adfa3aec23a/mzaf_5542347054597380537.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/yours/1593615288?i=1593615825&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/yours/1593615288?i=1593615825&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'jin',
        id: '42',
        adamid: '1191850724',
      },
    ],
    url: 'https://www.shazam.com/track/590865488/yours',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '498502624',
    title: 'Under The Influence',
    subtitle: 'Chris Brown',
    share: {
      subject: 'Under The Influence - Chris Brown',
      text: 'I used Shazam to discover Under The Influence by Chris Brown.',
      href: 'https://www.shazam.com/track/498502624/-',
      image:
        'https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Under The Influence by Chris Brown.',
      html: 'https://www.shazam.com/snippets/email-share/498502624?lang=en&country=GB',
      avatar:
        'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/498502624',
    },
    images: {
      background:
        'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg',
      coverarthq:
        'https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg',
      joecolor: 'b:000000p:ffffffs:f63710t:cbcbcbq:c42c0d',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1643756110',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/08/05/ba/0805ba7c-18ca-e15e-ffde-43aeb6319896/mzaf_3853369865271726137.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/under-the-influence/1643755888?i=1643756110&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/under-the-influence/1643755888?i=1643756110&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: true,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'chris-brown',
        id: '42',
        adamid: '95705522',
      },
    ],
    url: 'https://www.shazam.com/track/498502624/-',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '628935200',
    title: "I'm Good (Blue)",
    subtitle: 'David Guetta & Bebe Rexha',
    share: {
      subject: "I'm Good (Blue) - David Guetta & Bebe Rexha",
      text: "I used Shazam to discover I'm Good (Blue) by David Guetta & Bebe Rexha.",
      href: 'https://www.shazam.com/track/628935200/im-good-blue',
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/10/07/f9/1007f9e3-9815-38a2-66ae-c1952b1688e9/5054197324338.jpg/400x400cc.jpg',
      twitter:
        "I used @Shazam to discover I'm Good (Blue) by David Guetta & Bebe Rexha.",
      html: 'https://www.shazam.com/snippets/email-share/628935200?lang=en&country=GB',
      avatar:
        'https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/d4/0c/2d/d40c2d6c-9ebc-b1b3-6cd8-36a9fb9d4eef/mzl.jynpmslg.jpg/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/628935200',
    },
    images: {
      background:
        'https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/d4/0c/2d/d40c2d6c-9ebc-b1b3-6cd8-36a9fb9d4eef/mzl.jynpmslg.jpg/800x800cc.jpg',
      coverart:
        'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/10/07/f9/1007f9e3-9815-38a2-66ae-c1952b1688e9/5054197324338.jpg/400x400cc.jpg',
      coverarthq:
        'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/10/07/f9/1007f9e3-9815-38a2-66ae-c1952b1688e9/5054197324338.jpg/400x400cc.jpg',
      joecolor: 'b:6ec7fdp:141c39s:14202at:263e60q:264154',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1640751223',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/31/5b/be/315bbebd-02df-b244-10a8-eb23386f9675/mzaf_12083215036164425590.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/im-good-blue/1640751219?i=1640751223&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/im-good-blue/1640751219?i=1640751223&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: true,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'david-guetta',
        id: '42',
        adamid: '5557599',
      },
      {
        alias: 'bebe-rexha',
        id: '42',
        adamid: '466059563',
      },
    ],
    url: 'https://www.shazam.com/track/628935200/im-good-blue',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '601555046',
    title: 'Calm Down',
    subtitle: 'Rema',
    share: {
      subject: 'Calm Down - Rema',
      text: 'I used Shazam to discover Calm Down by Rema.',
      href: 'https://www.shazam.com/track/601555046/calm-down',
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b2/b4/7c/b2b47cf9-d8e2-53f6-5c62-c974d665c95b/22UMGIM08994.rgb.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Calm Down by Rema.',
      html: 'https://www.shazam.com/snippets/email-share/601555046?lang=en&country=GB',
      avatar:
        'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/a6/0d/fd/a60dfd0f-3c47-713c-8f2b-326396cbdd1a/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/601555046',
    },
    images: {
      background:
        'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/a6/0d/fd/a60dfd0f-3c47-713c-8f2b-326396cbdd1a/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b2/b4/7c/b2b47cf9-d8e2-53f6-5c62-c974d665c95b/22UMGIM08994.rgb.jpg/400x400cc.jpg',
      coverarthq:
        'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b2/b4/7c/b2b47cf9-d8e2-53f6-5c62-c974d665c95b/22UMGIM08994.rgb.jpg/400x400cc.jpg',
      joecolor: 'b:f7f1d1p:020000s:1f1909t:333029q:4a4431',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1614063459',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/70/9f/c7/709fc7e3-8e43-4b42-4f6e-c9f0a94842ce/mzaf_8187227090010990098.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/calm-down/1614063395?i=1614063459&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/calm-down/1614063395?i=1614063459&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'rema',
        id: '42',
        adamid: '1304716885',
      },
    ],
    url: 'https://www.shazam.com/track/601555046/calm-down',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '614204083',
    title: "I Ain't Worried",
    subtitle: 'OneRepublic',
    share: {
      subject: "I Ain't Worried - OneRepublic",
      text: "I used Shazam to discover I Ain't Worried by OneRepublic.",
      href: 'https://www.shazam.com/track/614204083/i-aint-worried',
      image:
        'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/14/14/e6141444-6597-4c3a-7ad1-86304528acf4/22UMGIM45569.rgb.jpg/400x400cc.jpg',
      twitter: "I used @Shazam to discover I Ain't Worried by OneRepublic.",
      html: 'https://www.shazam.com/snippets/email-share/614204083?lang=en&country=GB',
      avatar:
        'https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/cc/0e/16/cc0e16cd-642c-001f-180c-9d6e6080d5c7/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/614204083',
    },
    images: {
      background:
        'https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/cc/0e/16/cc0e16cd-642c-001f-180c-9d6e6080d5c7/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/14/14/e6141444-6597-4c3a-7ad1-86304528acf4/22UMGIM45569.rgb.jpg/400x400cc.jpg',
      coverarthq:
        'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/14/14/e6141444-6597-4c3a-7ad1-86304528acf4/22UMGIM45569.rgb.jpg/400x400cc.jpg',
      joecolor: 'b:1f1303p:f6e7a8s:f8e193t:cbbd87q:ccb876',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1621817894',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/5c/f0/8a/5cf08acf-596f-c264-affa-9c387a7410e8/mzaf_2952444090080507083.plus.aac.p.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/i-aint-worried/1621817793?i=1621817894&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/i-aint-worried/1621817793?i=1621817894&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'onerepublic',
        id: '42',
        adamid: '260414340',
      },
    ],
    url: 'https://www.shazam.com/track/614204083/i-aint-worried',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '618550047',
    title: 'KU LO SA - A COLORS SHOW',
    subtitle: 'Oxlade',
    share: {
      subject: 'KU LO SA - A COLORS SHOW - Oxlade',
      text: 'I used Shazam to discover KU LO SA - A COLORS SHOW by Oxlade.',
      href: 'https://www.shazam.com/track/618550047/ku-lo-sa-a-colors-show',
      image:
        'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/3c/6c/c7/3c6cc7b9-5bff-e196-2751-665fa5705ab1/196589232137.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover KU LO SA - A COLORS SHOW by Oxlade.',
      html: 'https://www.shazam.com/snippets/email-share/618550047?lang=en&country=GB',
      avatar:
        'https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/c7/25/b3/c725b311-5818-acb3-f877-b9eec9f5a1fe/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/618550047',
    },
    images: {
      background:
        'https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/c7/25/b3/c725b311-5818-acb3-f877-b9eec9f5a1fe/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/3c/6c/c7/3c6cc7b9-5bff-e196-2751-665fa5705ab1/196589232137.jpg/400x400cc.jpg',
      coverarthq:
        'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/3c/6c/c7/3c6cc7b9-5bff-e196-2751-665fa5705ab1/196589232137.jpg/400x400cc.jpg',
      joecolor: 'b:006946p:f8faeds:f1e0c8t:c7ddccq:c0c9ae',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1628125458',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/5d/be/c4/5dbec447-9b92-fe07-999f-259d4afdaf61/mzaf_15530274637544670270.plus.aac.p.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/ku-lo-sa-a-colors-show/1628124903?i=1628125458&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/ku-lo-sa-a-colors-show/1628124903?i=1628125458&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: true,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'oxlade',
        id: '42',
        adamid: '968819175',
      },
    ],
    url: 'https://www.shazam.com/track/618550047/ku-lo-sa-a-colors-show',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '616481349',
    title: 'B.O.T.A. (Baddest Of Them All)',
    subtitle: 'Eliza Rose & Interplanetary Criminal',
    share: {
      subject:
        'B.O.T.A. (Baddest Of Them All) - Eliza Rose & Interplanetary Criminal',
      text: 'I used Shazam to discover B.O.T.A. (Baddest Of Them All) by Eliza Rose & Interplanetary Criminal.',
      href: 'https://www.shazam.com/track/616481349/b-o-t-a-baddest-of-them-all',
      image:
        'https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/f3/df/5b/f3df5b83-5e1a-0fff-b05d-91eae8b071e8/5054197307126.jpg/400x400cc.jpg',
      twitter:
        'I used @Shazam to discover B.O.T.A. (Baddest Of Them All) by Eliza Rose & Interplanetary Criminal.',
      html: 'https://www.shazam.com/snippets/email-share/616481349?lang=en&country=GB',
      avatar:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/e4/4f/00/e44f005f-9e59-66a4-2eab-4c454794ac31/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/616481349',
    },
    images: {
      background:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/e4/4f/00/e44f005f-9e59-66a4-2eab-4c454794ac31/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/f3/df/5b/f3df5b83-5e1a-0fff-b05d-91eae8b071e8/5054197307126.jpg/400x400cc.jpg',
      coverarthq:
        'https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/f3/df/5b/f3df5b83-5e1a-0fff-b05d-91eae8b071e8/5054197307126.jpg/400x400cc.jpg',
      joecolor: 'b:110858p:2ad28es:f69c50t:25a983q:c87f51',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1639317828',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/4e/79/c3/4e79c381-bd74-4c08-b33e-142c15964286/mzaf_18363535661891469360.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/b-o-t-a-baddest-of-them-all/1639317367?i=1639317828&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/b-o-t-a-baddest-of-them-all/1639317367?i=1639317828&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'eliza-rose',
        id: '42',
        adamid: '156384506',
      },
      {
        alias: 'interplanetary-criminal',
        id: '42',
        adamid: '1136192992',
      },
    ],
    url: 'https://www.shazam.com/track/616481349/b-o-t-a-baddest-of-them-all',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '607917333',
    title: 'SNAP',
    subtitle: 'Rosa Linn',
    share: {
      subject: 'SNAP - Rosa Linn',
      text: 'I used Shazam to discover SNAP by Rosa Linn.',
      href: 'https://www.shazam.com/track/607917333/snap',
      image:
        'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/1c/e7/90/1ce79090-c8ff-44c4-06d7-b85089df3e4a/196589359995.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover SNAP by Rosa Linn.',
      html: 'https://www.shazam.com/snippets/email-share/607917333?lang=en&country=GB',
      avatar:
        'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/75/4c/3b/754c3b37-5a16-c203-f6f6-ff5c3ddfa93e/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/607917333',
    },
    images: {
      background:
        'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/75/4c/3b/754c3b37-5a16-c203-f6f6-ff5c3ddfa93e/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/1c/e7/90/1ce79090-c8ff-44c4-06d7-b85089df3e4a/196589359995.jpg/400x400cc.jpg',
      coverarthq:
        'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/1c/e7/90/1ce79090-c8ff-44c4-06d7-b85089df3e4a/196589359995.jpg/400x400cc.jpg',
      joecolor: 'b:f3f0ebp:2d2526s:382a2at:554d4dq:5d5251',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1637140913',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/52/09/91/5209916b-da29-539a-20b5-c59494df3b7f/mzaf_16490009023426985124.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/snap/1637140365?i=1637140913&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/snap/1637140365?i=1637140913&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'rosa-linn',
        id: '42',
        adamid: '1580652660',
      },
    ],
    url: 'https://www.shazam.com/track/607917333/snap',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '609260140',
    title: 'As It Was',
    subtitle: 'Harry Styles',
    share: {
      subject: 'As It Was - Harry Styles',
      text: 'I used Shazam to discover As It Was by Harry Styles.',
      href: 'https://www.shazam.com/track/609260140/as-it-was',
      image:
        'https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover As It Was by Harry Styles.',
      html: 'https://www.shazam.com/snippets/email-share/609260140?lang=en&country=GB',
      avatar:
        'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/00/8f/26/008f26ce-ec78-ad42-9303-260ac3b9701c/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/609260140',
    },
    images: {
      background:
        'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/00/8f/26/008f26ce-ec78-ad42-9303-260ac3b9701c/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg',
      coverarthq:
        'https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg',
      joecolor: 'b:d2c8adp:090f12s:3d2b16t:313431q:5b4a34',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1615585008',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/96/7e/ea/967eea0f-3d8e-9bb6-b4c5-fb255f50b906/mzaf_16046209671483865399.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/as-it-was/1615584999?i=1615585008&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/as-it-was/1615584999?i=1615585008&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'harry-styles',
        id: '42',
        adamid: '471260289',
      },
    ],
    url: 'https://www.shazam.com/track/609260140/as-it-was',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '629204672',
    title: 'Hold Me Closer',
    subtitle: 'Elton John & Britney Spears',
    share: {
      subject: 'Hold Me Closer - Elton John & Britney Spears',
      text: 'I used Shazam to discover Hold Me Closer by Elton John & Britney Spears.',
      href: 'https://www.shazam.com/track/629204672/hold-me-closer',
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/44/79/8d/44798d46-1503-f69a-03a0-050762fd0e8b/22UMGIM92163.rgb.jpg/400x400cc.jpg',
      twitter:
        'I used @Shazam to discover Hold Me Closer by Elton John & Britney Spears.',
      html: 'https://www.shazam.com/snippets/email-share/629204672?lang=en&country=GB',
      avatar:
        'https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/22/7a/b7/227ab79d-8c57-3622-f414-ba2e83252ee5/mzl.qlkmclct.jpg/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/629204672',
    },
    images: {
      background:
        'https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/22/7a/b7/227ab79d-8c57-3622-f414-ba2e83252ee5/mzl.qlkmclct.jpg/800x800cc.jpg',
      coverart:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/44/79/8d/44798d46-1503-f69a-03a0-050762fd0e8b/22UMGIM92163.rgb.jpg/400x400cc.jpg',
      coverarthq:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/44/79/8d/44798d46-1503-f69a-03a0-050762fd0e8b/22UMGIM92163.rgb.jpg/400x400cc.jpg',
      joecolor: 'b:fbf2f5p:000001s:293251t:323032q:535971',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1641082205',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/7a/24/60/7a246091-cef8-1df4-1435-a107ed3c6980/mzaf_7031321512640671226.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/hold-me-closer/1641082201?i=1641082205&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/hold-me-closer/1641082201?i=1641082205&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'elton-john',
        id: '42',
        adamid: '54657',
      },
      {
        alias: 'britney-spears',
        id: '42',
        adamid: '217005',
      },
    ],
    url: 'https://www.shazam.com/track/629204672/hold-me-closer',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '618322930',
    title: "DON'T YOU WORRY",
    subtitle: 'Black Eyed Peas, Shakira & David Guetta',
    share: {
      subject: "DON'T YOU WORRY - Black Eyed Peas, Shakira & David Guetta",
      text: "I used Shazam to discover DON'T YOU WORRY by Black Eyed Peas, Shakira & David Guetta.",
      href: 'https://www.shazam.com/track/618322930/dont-you-worry',
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/00/d3/af/00d3af07-4932-0b60-72f9-2411623cc62a/196589007094.jpg/400x400cc.jpg',
      twitter:
        "I used @Shazam to discover DON'T YOU WORRY by Black Eyed Peas, Shakira & David Guetta.",
      html: 'https://www.shazam.com/snippets/email-share/618322930?lang=en&country=GB',
      avatar:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/4e/32/97/4e329727-c448-ac69-1b43-954b3ef7a3f2/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/618322930',
    },
    images: {
      background:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/4e/32/97/4e329727-c448-ac69-1b43-954b3ef7a3f2/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/00/d3/af/00d3af07-4932-0b60-72f9-2411623cc62a/196589007094.jpg/400x400cc.jpg',
      coverarthq:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/00/d3/af/00d3af07-4932-0b60-72f9-2411623cc62a/196589007094.jpg/400x400cc.jpg',
      joecolor: 'b:0a1a2dp:ffffffs:b1c2d6t:ced1d4q:90a0b4',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1627755178',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/65/51/92/6551922a-b420-5355-aeb3-0c69e9758590/mzaf_2281098002630455181.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/dont-you-worry/1627755177?i=1627755178&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/dont-you-worry/1627755177?i=1627755178&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'black-eyed-peas',
        id: '42',
        adamid: '360391',
      },
      {
        alias: 'shakira',
        id: '42',
        adamid: '889327',
      },
      {
        alias: 'david-guetta',
        id: '42',
        adamid: '5557599',
      },
    ],
    url: 'https://www.shazam.com/track/618322930/dont-you-worry',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '622105075',
    title: 'Quevedo: Bzrp Music Sessions, Vol. 52',
    subtitle: 'Bizarrap & Quevedo',
    share: {
      subject: 'Quevedo: Bzrp Music Sessions, Vol. 52 - Bizarrap & Quevedo',
      text: 'I used Shazam to discover Quevedo: Bzrp Music Sessions, Vol. 52 by Bizarrap & Quevedo.',
      href: 'https://www.shazam.com/track/622105075/quevedo-bzrp-music-sessions-vol-52',
      image:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/74/37/3d/74373d24-e999-ea75-e101-b9b21b3887c3/196925240499.jpg/400x400cc.jpg',
      twitter:
        'I used @Shazam to discover Quevedo: Bzrp Music Sessions, Vol. 52 by Bizarrap & Quevedo.',
      html: 'https://www.shazam.com/snippets/email-share/622105075?lang=en&country=GB',
      avatar:
        'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/5a/0d/e5/5a0de5fb-7d27-d211-10a2-337687801092/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/622105075',
    },
    images: {
      background:
        'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/5a/0d/e5/5a0de5fb-7d27-d211-10a2-337687801092/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/74/37/3d/74373d24-e999-ea75-e101-b9b21b3887c3/196925240499.jpg/400x400cc.jpg',
      coverarthq:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/74/37/3d/74373d24-e999-ea75-e101-b9b21b3887c3/196925240499.jpg/400x400cc.jpg',
      joecolor: 'b:000000p:faf9f5s:bcc2c1t:c8c7c4q:969b9a',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1632746802',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/0c/62/9e/0c629e98-c1b7-b9f7-5e3b-50d83afefd62/mzaf_8347361243339584774.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/quevedo-bzrp-music-sessions-vol-52/1632746799?i=1632746802&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/quevedo-bzrp-music-sessions-vol-52/1632746799?i=1632746802&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'bizarrap',
        id: '42',
        adamid: '1239658213',
      },
      {
        alias: 'quevedo',
        id: '42',
        adamid: '377761784',
      },
    ],
    url: 'https://www.shazam.com/track/622105075/quevedo-bzrp-music-sessions-vol-52',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '607910713',
    title: 'Ferrari',
    subtitle: 'James Hype & Miggy Dela Rosa',
    share: {
      subject: 'Ferrari - James Hype & Miggy Dela Rosa',
      text: 'I used Shazam to discover Ferrari by James Hype & Miggy Dela Rosa.',
      href: 'https://www.shazam.com/track/607910713/ferrari',
      image:
        'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/a9/02/ca/a902ca66-530d-d678-077c-17d9da7533ef/22UMGIM36635.rgb.jpg/400x400cc.jpg',
      twitter:
        'I used @Shazam to discover Ferrari by James Hype & Miggy Dela Rosa.',
      html: 'https://www.shazam.com/snippets/email-share/607910713?lang=en&country=GB',
      avatar:
        'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/77/13/f4/7713f41b-e31e-32fe-df64-09671eb06661/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/607910713',
    },
    images: {
      background:
        'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/77/13/f4/7713f41b-e31e-32fe-df64-09671eb06661/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/a9/02/ca/a902ca66-530d-d678-077c-17d9da7533ef/22UMGIM36635.rgb.jpg/400x400cc.jpg',
      coverarthq:
        'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/a9/02/ca/a902ca66-530d-d678-077c-17d9da7533ef/22UMGIM36635.rgb.jpg/400x400cc.jpg',
      joecolor: 'b:121212p:ffffffs:fa0d13t:cfcfcfq:cb0e13',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1617280597',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/12/c3/5d/12c35dee-5ea7-9c51-580a-f2c5b85b9705/mzaf_2493936288894570132.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/ferrari/1617280385?i=1617280597&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/ferrari/1617280385?i=1617280597&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'james-hype',
        id: '42',
        adamid: '925734064',
      },
      {
        alias: 'miggy-dela-rosa',
        id: '42',
        adamid: '762567296',
      },
    ],
    url: 'https://www.shazam.com/track/607910713/ferrari',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '624180456',
    title: 'Super Freaky Girl',
    subtitle: 'Nicki Minaj',
    share: {
      subject: 'Super Freaky Girl - Nicki Minaj',
      text: 'I used Shazam to discover Super Freaky Girl by Nicki Minaj.',
      href: 'https://www.shazam.com/track/624180456/super-freaky-girl',
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/74/d9/a8/74d9a88e-9641-df34-401a-506b739bd824/22UMGIM87047.rgb.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Super Freaky Girl by Nicki Minaj.',
      html: 'https://www.shazam.com/snippets/email-share/624180456?lang=en&country=GB',
      avatar:
        'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/42/ba/a9/42baa989-e090-3478-113a-e6b68efbf531/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/624180456',
    },
    images: {
      background:
        'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/42/ba/a9/42baa989-e090-3478-113a-e6b68efbf531/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/74/d9/a8/74d9a88e-9641-df34-401a-506b739bd824/22UMGIM87047.rgb.jpg/400x400cc.jpg',
      coverarthq:
        'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/74/d9/a8/74d9a88e-9641-df34-401a-506b739bd824/22UMGIM87047.rgb.jpg/400x400cc.jpg',
      joecolor: 'b:010101p:f1e7e8s:dca49dt:c1b9baq:b0837d',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1638814465',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/64/57/b8/6457b8d5-b6ef-f705-29d8-3a3d3d0655d4/mzaf_1124696944858493003.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/super-freaky-girl/1638814204?i=1638814465&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/super-freaky-girl/1638814204?i=1638814465&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: true,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'nicki-minaj',
        id: '42',
        adamid: '278464538',
      },
    ],
    url: 'https://www.shazam.com/track/624180456/super-freaky-girl',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '70679146',
    title: 'Another Love',
    subtitle: 'Tom Odell',
    share: {
      subject: 'Another Love - Tom Odell',
      text: 'I used Shazam to discover Another Love by Tom Odell.',
      href: 'https://www.shazam.com/track/70679146/-',
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f6/2f/c1/f62fc1e3-ac6b-0009-8d3b-52d74821ad53/886443847828.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Another Love by Tom Odell.',
      html: 'https://www.shazam.com/snippets/email-share/70679146?lang=en&country=GB',
      avatar:
        'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/47/4f/7e/474f7ebe-1442-1dd2-ed17-78808b521f08/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/70679146',
    },
    images: {
      background:
        'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/47/4f/7e/474f7ebe-1442-1dd2-ed17-78808b521f08/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f6/2f/c1/f62fc1e3-ac6b-0009-8d3b-52d74821ad53/886443847828.jpg/400x400cc.jpg',
      coverarthq:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f6/2f/c1/f62fc1e3-ac6b-0009-8d3b-52d74821ad53/886443847828.jpg/400x400cc.jpg',
      joecolor: 'b:aba7a4p:080a0ds:06171et:292a2bq:273439',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '608400089',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/72/c5/96/72c596bb-0161-f51d-5779-d8c5c823fabc/mzaf_4624172607665711755.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/another-love/608399874?i=608400089&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/another-love/608399874?i=608400089&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: true,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'tom-odell',
        id: '42',
        adamid: '524929515',
      },
    ],
    url: 'https://www.shazam.com/track/70679146/-',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '615447735',
    title: 'BILLIE EILISH.',
    subtitle: 'Armani White',
    share: {
      subject: 'BILLIE EILISH. - Armani White',
      text: 'I used Shazam to discover BILLIE EILISH. by Armani White.',
      href: 'https://www.shazam.com/track/615447735/billie-eilish',
      image:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/c1/ea/3a/c1ea3a25-93af-84fd-2ca6-59e4210f58aa/22UMGIM62666.rgb.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover BILLIE EILISH. by Armani White.',
      html: 'https://www.shazam.com/snippets/email-share/615447735?lang=en&country=GB',
      avatar:
        'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/80/0f/ac/800fac1c-41aa-8b19-1e6a-605fe1311cb0/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/615447735',
    },
    images: {
      background:
        'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/80/0f/ac/800fac1c-41aa-8b19-1e6a-605fe1311cb0/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/c1/ea/3a/c1ea3a25-93af-84fd-2ca6-59e4210f58aa/22UMGIM62666.rgb.jpg/400x400cc.jpg',
      coverarthq:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/c1/ea/3a/c1ea3a25-93af-84fd-2ca6-59e4210f58aa/22UMGIM62666.rgb.jpg/400x400cc.jpg',
      joecolor: 'b:352839p:53ddf1s:30c1f5t:4db9ccq:31a2cf',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1628828521',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/df/50/c3/df50c3aa-451c-7d16-d930-9dd4ff47612c/mzaf_2051892523701935260.plus.aac.p.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/billie-eilish/1628828345?i=1628828521&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/billie-eilish/1628828345?i=1628828521&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: true,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'armani-white',
        id: '42',
        adamid: '1129439109',
      },
    ],
    url: 'https://www.shazam.com/track/615447735/billie-eilish',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '269981000',
    title: 'Forget',
    subtitle: 'Pogo',
    share: {
      subject: 'Forget - Pogo',
      text: 'I used Shazam to discover Forget by Pogo.',
      href: 'https://www.shazam.com/track/269981000/forget',
      image:
        'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/0b/8a/00/0b8a00b9-d434-f2c9-ac9e-9e439059f481/859714991865_cover.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Forget by Pogo.',
      html: 'https://www.shazam.com/snippets/email-share/269981000?lang=en&country=GB',
      avatar:
        'https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/67/1f/74/671f7437-9993-c32c-a8aa-8d7564240315/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/269981000',
    },
    images: {
      background:
        'https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/67/1f/74/671f7437-9993-c32c-a8aa-8d7564240315/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/0b/8a/00/0b8a00b9-d434-f2c9-ac9e-9e439059f481/859714991865_cover.jpg/400x400cc.jpg',
      coverarthq:
        'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/0b/8a/00/0b8a00b9-d434-f2c9-ac9e-9e439059f481/859714991865_cover.jpg/400x400cc.jpg',
      joecolor: 'b:163a41p:f5f2acs:dee8a3t:c8cd96q:b6c590',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1018850626',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/fb/6c/34/fb6c3424-68a7-0f66-70d7-c56bf7241e31/mzaf_16496890051022922967.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/forget/1018850619?i=1018850626&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/forget/1018850619?i=1018850626&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'pogo',
        id: '42',
        adamid: '215124992',
      },
    ],
    url: 'https://www.shazam.com/track/269981000/forget',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '621419403',
    title: 'Bad Habit',
    subtitle: 'Steve Lacy',
    share: {
      subject: 'Bad Habit - Steve Lacy',
      text: 'I used Shazam to discover Bad Habit by Steve Lacy.',
      href: 'https://www.shazam.com/track/621419403/bad-habit',
      image:
        'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/2a/cb/e3/2acbe3f1-7a65-e2c1-8f12-ba04c6ee05dc/196589099631.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Bad Habit by Steve Lacy.',
      html: 'https://www.shazam.com/snippets/email-share/621419403?lang=en&country=GB',
      avatar:
        'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/4c/13/f4/4c13f434-29ff-36d5-2d40-d6a97a149ba4/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/621419403',
    },
    images: {
      background:
        'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/4c/13/f4/4c13f434-29ff-36d5-2d40-d6a97a149ba4/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/2a/cb/e3/2acbe3f1-7a65-e2c1-8f12-ba04c6ee05dc/196589099631.jpg/400x400cc.jpg',
      coverarthq:
        'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/2a/cb/e3/2acbe3f1-7a65-e2c1-8f12-ba04c6ee05dc/196589099631.jpg/400x400cc.jpg',
      joecolor: 'b:005493p:f4f0efs:e8d3d1t:c3d1dcq:b9bac4',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1631909584',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/78/fa/9e/78fa9e09-f3fd-74ff-2aa9-dfe769d9d872/mzaf_9884762135920880405.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/bad-habit/1631909576?i=1631909584&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/bad-habit/1631909576?i=1631909584&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: true,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'steve-lacy',
        id: '42',
        adamid: '1210275020',
      },
    ],
    url: 'https://www.shazam.com/track/621419403/bad-habit',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '615367972',
    title: 'Last Last',
    subtitle: 'Burna Boy',
    share: {
      subject: 'Last Last - Burna Boy',
      text: 'I used Shazam to discover Last Last by Burna Boy.',
      href: 'https://www.shazam.com/track/615367972/last-last',
      image:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/34/42/db/3442dbd6-644f-a111-8344-0151ffb93313/075679745156.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Last Last by Burna Boy.',
      html: 'https://www.shazam.com/snippets/email-share/615367972?lang=en&country=GB',
      avatar:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/5f/77/17/5f771752-2a96-11be-8c1f-b8b4050eacac/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/615367972',
    },
    images: {
      background:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/5f/77/17/5f771752-2a96-11be-8c1f-b8b4050eacac/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/34/42/db/3442dbd6-644f-a111-8344-0151ffb93313/075679745156.jpg/400x400cc.jpg',
      coverarthq:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/34/42/db/3442dbd6-644f-a111-8344-0151ffb93313/075679745156.jpg/400x400cc.jpg',
      joecolor: 'b:620404p:e1baafs:e2b48dt:c8968dq:c89172',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1623677811',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/f9/30/ac/f930ace0-c70b-f1b6-9f97-b409a366617b/mzaf_4882221701328118167.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/last-last/1623677591?i=1623677811&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/last-last/1623677591?i=1623677811&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'burna-boy',
        id: '42',
        adamid: '591899010',
      },
    ],
    url: 'https://www.shazam.com/track/615367972/last-last',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '616669220',
    title: 'Glimpse of Us',
    subtitle: 'Joji',
    share: {
      subject: 'Glimpse of Us - Joji',
      text: 'I used Shazam to discover Glimpse of Us by Joji.',
      href: 'https://www.shazam.com/track/616669220/glimpse-of-us',
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/db/11/f5/db11f57b-6f54-6cf8-2140-be0fc1a3b495/093624864462.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Glimpse of Us by Joji.',
      html: 'https://www.shazam.com/snippets/email-share/616669220?lang=en&country=GB',
      avatar:
        'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/ff/19/c1/ff19c1c0-bd5f-b5e6-3073-fcf2dc107f6c/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/616669220',
    },
    images: {
      background:
        'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/ff/19/c1/ff19c1c0-bd5f-b5e6-3073-fcf2dc107f6c/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/db/11/f5/db11f57b-6f54-6cf8-2140-be0fc1a3b495/093624864462.jpg/400x400cc.jpg',
      coverarthq:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/db/11/f5/db11f57b-6f54-6cf8-2140-be0fc1a3b495/093624864462.jpg/400x400cc.jpg',
      joecolor: 'b:3f5378p:f1f1f1s:71dfd4t:cdd1d8q:67c3c1',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1640829782',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/07/81/3b/07813b79-ed63-f2b8-35ba-06b4ac5a2a23/mzaf_13996895081737061102.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/glimpse-of-us/1640829780?i=1640829782&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/glimpse-of-us/1640829780?i=1640829782&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'joji',
        id: '42',
        adamid: '1258279972',
      },
    ],
    url: 'https://www.shazam.com/track/616669220/glimpse-of-us',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '611520549',
    title: 'Soweto',
    subtitle: 'Victony & Tempoe',
    share: {
      subject: 'Soweto - Victony & Tempoe',
      text: 'I used Shazam to discover Soweto by Victony & Tempoe.',
      href: 'https://www.shazam.com/track/611520549/soweto',
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/78/cb/ed/78cbed64-1473-0331-e7f6-0c508ba2ee90/4472.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Soweto by Victony & Tempoe.',
      html: 'https://www.shazam.com/snippets/email-share/611520549?lang=en&country=GB',
      avatar:
        'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/8e/0e/bf/8e0ebfa2-b4e1-45fd-4a97-01cc2e369fbf/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/611520549',
    },
    images: {
      background:
        'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/8e/0e/bf/8e0ebfa2-b4e1-45fd-4a97-01cc2e369fbf/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/78/cb/ed/78cbed64-1473-0331-e7f6-0c508ba2ee90/4472.jpg/400x400cc.jpg',
      coverarthq:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/78/cb/ed/78cbed64-1473-0331-e7f6-0c508ba2ee90/4472.jpg/400x400cc.jpg',
      joecolor: 'b:de8f71p:000000s:321c19t:2c1c17q:55332b',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1618317928',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/14/ca/1e/14ca1edc-1958-fca6-83cb-174931183aa2/mzaf_10806040960071313745.plus.aac.p.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/soweto/1618317421?i=1618317928&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/soweto/1618317421?i=1618317928&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: true,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'victony',
        id: '42',
        adamid: '1456464026',
      },
      {
        alias: 'tempoe',
        id: '42',
        adamid: '1582704596',
      },
    ],
    url: 'https://www.shazam.com/track/611520549/soweto',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '612684931',
    title: 'Late Night Talking',
    subtitle: 'Harry Styles',
    share: {
      subject: 'Late Night Talking - Harry Styles',
      text: 'I used Shazam to discover Late Night Talking by Harry Styles.',
      href: 'https://www.shazam.com/track/612684931/late-night-talking',
      image:
        'https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Late Night Talking by Harry Styles.',
      html: 'https://www.shazam.com/snippets/email-share/612684931?lang=en&country=GB',
      avatar:
        'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/00/8f/26/008f26ce-ec78-ad42-9303-260ac3b9701c/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/612684931',
    },
    images: {
      background:
        'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/00/8f/26/008f26ce-ec78-ad42-9303-260ac3b9701c/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg',
      coverarthq:
        'https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg',
      joecolor: 'b:d2c8adp:090f12s:3d2b16t:313431q:5b4a34',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1615585006',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/75/cb/12/75cb120e-8c33-42ac-00f0-c5bac8348236/mzaf_3329463923652745812.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/late-night-talking/1615584999?i=1615585006&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/late-night-talking/1615584999?i=1615585006&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'harry-styles',
        id: '42',
        adamid: '471260289',
      },
    ],
    url: 'https://www.shazam.com/track/612684931/late-night-talking',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '40604721',
    title: 'Lonely',
    subtitle: 'Akon',
    share: {
      subject: 'Lonely - Akon',
      text: 'I used Shazam to discover Lonely by Akon.',
      href: 'https://www.shazam.com/track/40604721/lonely',
      image:
        'https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/05/cd/f8/05cdf871-c9a7-e29c-d00b-3214173806d4/14UMGIM28691.rgb.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Lonely by Akon.',
      html: 'https://www.shazam.com/snippets/email-share/40604721?lang=en&country=GB',
      avatar:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/8c/bf/f2/8cbff239-74ac-e2d8-f336-990e572d0ea1/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/40604721',
    },
    images: {
      background:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/8c/bf/f2/8cbff239-74ac-e2d8-f336-990e572d0ea1/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/05/cd/f8/05cdf871-c9a7-e29c-d00b-3214173806d4/14UMGIM28691.rgb.jpg/400x400cc.jpg',
      coverarthq:
        'https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/05/cd/f8/05cdf871-c9a7-e29c-d00b-3214173806d4/14UMGIM28691.rgb.jpg/400x400cc.jpg',
      joecolor: 'b:3e3f41p:f6f6f8s:dbdce1t:d1d1d3q:bcbdc1',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1446019275',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/0b/f2/17/0bf217b0-e790-756e-980c-d34fc992deb1/mzaf_3767292236696795330.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/lonely/1446019188?i=1446019275&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/lonely/1446019188?i=1446019275&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'akon',
        id: '42',
        adamid: '3261325',
      },
    ],
    url: 'https://www.shazam.com/track/40604721/lonely',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '621931010',
    title: 'Bad Memories (feat. Elley Duhé & FAST BOY)',
    subtitle: 'Meduza & James Carter',
    share: {
      subject:
        'Bad Memories (feat. Elley Duhé & FAST BOY) - Meduza & James Carter',
      text: 'I used Shazam to discover Bad Memories (feat. Elley Duhé & FAST BOY) by Meduza & James Carter.',
      href: 'https://www.shazam.com/track/621931010/bad-memories-feat-elley-duh%C3%A9-fast-boy',
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/15/c7/60/15c76064-413c-4501-9f3f-ae1664e8a6eb/22UMGIM58565.rgb.jpg/400x400cc.jpg',
      twitter:
        'I used @Shazam to discover Bad Memories (feat. Elley Duhé & FAST BOY) by Meduza & James Carter.',
      html: 'https://www.shazam.com/snippets/email-share/621931010?lang=en&country=GB',
      avatar:
        'https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/96/a0/20/96a02073-bb69-4ae5-dd8d-d06c18567c20/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/621931010',
    },
    images: {
      background:
        'https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/96/a0/20/96a02073-bb69-4ae5-dd8d-d06c18567c20/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/15/c7/60/15c76064-413c-4501-9f3f-ae1664e8a6eb/22UMGIM58565.rgb.jpg/400x400cc.jpg',
      coverarthq:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/15/c7/60/15c76064-413c-4501-9f3f-ae1664e8a6eb/22UMGIM58565.rgb.jpg/400x400cc.jpg',
      joecolor: 'b:ffffffp:000000s:402000t:333333q:664c33',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1632534359',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/a5/5a/ee/a55aeeeb-cc7a-49fc-74cd-e83a12c35698/mzaf_1986369836437471151.plus.aac.p.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/bad-memories-feat-elley-duh%C3%A9-fast-boy/1632534353?i=1632534359&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/bad-memories-feat-elley-duh%C3%A9-fast-boy/1632534353?i=1632534359&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'meduza',
        id: '42',
        adamid: '1449138676',
      },
      {
        alias: 'james-carter',
        id: '42',
        adamid: '853703373',
      },
    ],
    url: 'https://www.shazam.com/track/621931010/bad-memories-feat-elley-duh%C3%A9-fast-boy',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '624596103',
    title: 'DESPECHÁ',
    subtitle: 'ROSALÍA',
    share: {
      subject: 'DESPECHÁ - ROSALÍA',
      text: 'I used Shazam to discover DESPECHÁ by ROSALÍA.',
      href: 'https://www.shazam.com/track/624596103/despech%C3%A1',
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/46/1d/66/461d668b-32e7-6642-158e-b6e7b74c95de/196589348883.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover DESPECHÁ by ROSALÍA.',
      html: 'https://www.shazam.com/snippets/email-share/624596103?lang=en&country=GB',
      avatar:
        'https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/eb/94/4a/eb944a40-9438-f7d2-1822-aae4a697c5e0/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/624596103',
    },
    images: {
      background:
        'https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/eb/94/4a/eb944a40-9438-f7d2-1822-aae4a697c5e0/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/46/1d/66/461d668b-32e7-6642-158e-b6e7b74c95de/196589348883.jpg/400x400cc.jpg',
      coverarthq:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/46/1d/66/461d668b-32e7-6642-158e-b6e7b74c95de/196589348883.jpg/400x400cc.jpg',
      joecolor: 'b:161711p:f1b68es:39a8f0t:c59675q:328bc3',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1636782444',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/fd/c9/6e/fdc96e83-167f-44cd-b3ae-188d67ee9ae8/mzaf_12623277209011301064.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/despech%C3%A1/1636782253?i=1636782444&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/despech%C3%A1/1636782253?i=1636782444&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'rosal%C3%ADa',
        id: '42',
        adamid: '313845115',
      },
    ],
    url: 'https://www.shazam.com/track/624596103/despech%C3%A1',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '491697169',
    title: 'Mary On A Cross',
    subtitle: 'Ghost',
    share: {
      subject: 'Mary On A Cross - Ghost',
      text: 'I used Shazam to discover Mary On A Cross by Ghost.',
      href: 'https://www.shazam.com/track/491697169/mary-on-a-cross',
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/b7/b8/3b/b7b83bb0-242d-93f3-e7d3-4a5d7b02c57d/22CRGIM34365.rgb.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Mary On A Cross by Ghost.',
      html: 'https://www.shazam.com/snippets/email-share/491697169?lang=en&country=GB',
      avatar:
        'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/df/28/1f/df281f44-d792-9387-deb8-35aaecb7f058/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/491697169',
    },
    images: {
      background:
        'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/df/28/1f/df281f44-d792-9387-deb8-35aaecb7f058/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/b7/b8/3b/b7b83bb0-242d-93f3-e7d3-4a5d7b02c57d/22CRGIM34365.rgb.jpg/400x400cc.jpg',
      coverarthq:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/b7/b8/3b/b7b83bb0-242d-93f3-e7d3-4a5d7b02c57d/22CRGIM34365.rgb.jpg/400x400cc.jpg',
      joecolor: 'b:000000p:f8b852s:db8c55t:c69342q:af7044',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1641545017',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/ca/50/4e/ca504e65-c4b7-9749-c4e9-394d68190995/mzaf_10675123102918353835.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/mary-on-a-cross/1641544805?i=1641545017&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/mary-on-a-cross/1641544805?i=1641545017&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'ghost',
        id: '42',
        adamid: '600730426',
      },
    ],
    url: 'https://www.shazam.com/track/491697169/mary-on-a-cross',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '629608451',
    title: 'Rush',
    subtitle: 'Ayra Starr',
    share: {
      subject: 'Rush - Ayra Starr',
      text: 'I used Shazam to discover Rush by Ayra Starr.',
      href: 'https://www.shazam.com/track/629608451/rush',
      image:
        'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/00/80/42/00804270-0e0c-150a-500b-6f81201d9d4d/5059449090122.png/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Rush by Ayra Starr.',
      html: 'https://www.shazam.com/snippets/email-share/629608451?lang=en&country=GB',
      avatar:
        'https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/44/de/57/44de5739-5e3f-a831-6c1a-289ec3b667ee/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/629608451',
    },
    images: {
      background:
        'https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/44/de/57/44de5739-5e3f-a831-6c1a-289ec3b667ee/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/00/80/42/00804270-0e0c-150a-500b-6f81201d9d4d/5059449090122.png/400x400cc.jpg',
      coverarthq:
        'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/00/80/42/00804270-0e0c-150a-500b-6f81201d9d4d/5059449090122.png/400x400cc.jpg',
      joecolor: 'b:bed9c6p:151221s:191a2ft:363942q:3a404d',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1642898573',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/80/e4/78/80e4783d-eb2c-11a4-27e3-ba081f25d156/mzaf_6244942275602044186.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/rush/1642898371?i=1642898573&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/rush/1642898371?i=1642898573&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'ayra-starr',
        id: '42',
        adamid: '1536429348',
      },
    ],
    url: 'https://www.shazam.com/track/629608451/rush',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '631823459',
    title: 'Shut Down',
    subtitle: 'BLACKPINK',
    share: {
      subject: 'Shut Down - BLACKPINK',
      text: 'I used Shazam to discover Shut Down by BLACKPINK.',
      href: 'https://www.shazam.com/track/631823459/shut-down',
      image:
        'https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/52/8e/5a/528e5a30-52b0-b68c-f184-635fcf15e6d7/22UM1IM01017.rgb.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Shut Down by BLACKPINK.',
      html: 'https://www.shazam.com/snippets/email-share/631823459?lang=en&country=GB',
      avatar:
        'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/91/31/36/91313698-9306-c1a5-5b9c-d429b3d0800d/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/631823459',
    },
    images: {
      background:
        'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/91/31/36/91313698-9306-c1a5-5b9c-d429b3d0800d/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/52/8e/5a/528e5a30-52b0-b68c-f184-635fcf15e6d7/22UM1IM01017.rgb.jpg/400x400cc.jpg',
      coverarthq:
        'https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/52/8e/5a/528e5a30-52b0-b68c-f184-635fcf15e6d7/22UM1IM01017.rgb.jpg/400x400cc.jpg',
      joecolor: 'b:e8e8e8p:0f0609s:2d2d2dt:3a3335q:535353',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1644431999',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/be/f8/a2/bef8a2a9-1de1-5f5d-a9fc-06f5cb7953d9/mzaf_16238510533875261071.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/shut-down/1644431615?i=1644431999&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/shut-down/1644431615?i=1644431999&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'blackpink',
        id: '42',
        adamid: '1141774019',
      },
    ],
    url: 'https://www.shazam.com/track/631823459/shut-down',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '393331',
    title: 'Running Up That Hill (A Deal With God)',
    subtitle: 'Kate Bush',
    share: {
      subject: 'Running Up That Hill (A Deal With God) - Kate Bush',
      text: 'I used Shazam to discover Running Up That Hill (A Deal With God) by Kate Bush.',
      href: 'https://www.shazam.com/track/393331/running-up-that-hill-a-deal-with-god',
      image:
        'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/22/2e/e5/222ee57c-fed2-cd66-4da6-db372a5496e2/5099902930152.jpg/400x400cc.jpg',
      twitter:
        'I used @Shazam to discover Running Up That Hill (A Deal With God) by Kate Bush.',
      html: 'https://www.shazam.com/snippets/email-share/393331?lang=en&country=GB',
      avatar:
        'https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/2a/7c/7e/2a7c7ee9-743f-5f9e-cc34-248ad7e27df5/mzl.aiqoizvy.jpg/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/393331',
    },
    images: {
      background:
        'https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/2a/7c/7e/2a7c7ee9-743f-5f9e-cc34-248ad7e27df5/mzl.aiqoizvy.jpg/800x800cc.jpg',
      coverart:
        'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/22/2e/e5/222ee57c-fed2-cd66-4da6-db372a5496e2/5099902930152.jpg/400x400cc.jpg',
      coverarthq:
        'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/22/2e/e5/222ee57c-fed2-cd66-4da6-db372a5496e2/5099902930152.jpg/400x400cc.jpg',
      joecolor: 'b:ffffffp:150a10s:3c2633t:443b40q:63515c',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '901279255',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ac/8c/bf/ac8cbf7c-47be-9300-5f31-67674f276b82/mzaf_8609819003735822537.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/running-up-that-hill-a-deal-with-god/901279250?i=901279255&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/running-up-that-hill-a-deal-with-god/901279250?i=901279255&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'kate-bush',
        id: '42',
        adamid: '487277',
      },
    ],
    url: 'https://www.shazam.com/track/393331/running-up-that-hill-a-deal-with-god',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '567381450',
    title: 'Happier Than Ever',
    subtitle: 'Billie Eilish',
    share: {
      subject: 'Happier Than Ever - Billie Eilish',
      text: 'I used Shazam to discover Happier Than Ever by Billie Eilish.',
      href: 'https://www.shazam.com/track/567381450/happier-than-ever',
      image:
        'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/2d/f3/c9/2df3c9fd-e0eb-257c-c035-b04f05a66580/21UMGIM36691.rgb.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Happier Than Ever by Billie Eilish.',
      html: 'https://www.shazam.com/snippets/email-share/567381450?lang=en&country=GB',
      avatar:
        'https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/aa/64/c1/aa64c19b-b273-76ee-f785-05ee22555de4/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/567381450',
    },
    images: {
      background:
        'https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/aa/64/c1/aa64c19b-b273-76ee-f785-05ee22555de4/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/2d/f3/c9/2df3c9fd-e0eb-257c-c035-b04f05a66580/21UMGIM36691.rgb.jpg/400x400cc.jpg',
      coverarthq:
        'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/2d/f3/c9/2df3c9fd-e0eb-257c-c035-b04f05a66580/21UMGIM36691.rgb.jpg/400x400cc.jpg',
      joecolor: 'b:6d4d3ap:fcfbf9s:ead3b5t:e0d8d3q:d1b89c',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1564531202',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/01/e5/e5/01e5e5ed-8c7d-671d-7169-e58658da0996/mzaf_15482996342403637699.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/happier-than-ever/1564530719?i=1564531202&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/happier-than-ever/1564530719?i=1564531202&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: true,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'billie-eilish',
        id: '42',
        adamid: '1065981054',
      },
    ],
    url: 'https://www.shazam.com/track/567381450/happier-than-ever',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '297103606',
    title: 'Faded',
    subtitle: 'Alan Walker',
    share: {
      subject: 'Faded - Alan Walker',
      text: 'I used Shazam to discover Faded by Alan Walker.',
      href: 'https://www.shazam.com/track/297103606/faded',
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/0d/a3/1a/0da31af7-d0ff-9bee-c427-1b6d0336f6fc/886446321981.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Faded by Alan Walker.',
      html: 'https://www.shazam.com/snippets/email-share/297103606?lang=en&country=GB',
      avatar:
        'https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/ed/2b/66/ed2b6697-02fc-0a39-36ca-949fa2ca82ea/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/297103606',
    },
    images: {
      background:
        'https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/ed/2b/66/ed2b6697-02fc-0a39-36ca-949fa2ca82ea/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/0d/a3/1a/0da31af7-d0ff-9bee-c427-1b6d0336f6fc/886446321981.jpg/400x400cc.jpg',
      coverarthq:
        'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/0d/a3/1a/0da31af7-d0ff-9bee-c427-1b6d0336f6fc/886446321981.jpg/400x400cc.jpg',
      joecolor: 'b:e4f0eep:000814s:2d3022t:2d3640q:51564a',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1196294581',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f4/32/01/f43201b9-4bba-7654-2e43-d59e2d907e9f/mzaf_11811407407846702050.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/faded/1196294554?i=1196294581&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/faded/1196294554?i=1196294581&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'alan-walker',
        id: '42',
        adamid: '1062085272',
      },
    ],
    url: 'https://www.shazam.com/track/297103606/faded',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '624940057',
    title: 'Mood',
    subtitle: 'Makar',
    share: {
      subject: 'Mood - Makar',
      text: 'I used Shazam to discover Mood by Makar.',
      href: 'https://www.shazam.com/track/624940057/mood',
      image:
        'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/10/32/2f/10322f7a-827c-a0f7-e09f-100451892959/22UMGIM92533.rgb.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Mood by Makar.',
      html: 'https://www.shazam.com/snippets/email-share/624940057?lang=en&country=GB',
      avatar:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ce/9c/88/ce9c88e3-9a78-34f6-db12-2564db5d1ef4/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/624940057',
    },
    images: {
      background:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ce/9c/88/ce9c88e3-9a78-34f6-db12-2564db5d1ef4/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/10/32/2f/10322f7a-827c-a0f7-e09f-100451892959/22UMGIM92533.rgb.jpg/400x400cc.jpg',
      coverarthq:
        'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/10/32/2f/10322f7a-827c-a0f7-e09f-100451892959/22UMGIM92533.rgb.jpg/400x400cc.jpg',
      joecolor: 'b:000000p:ffffffs:dbdbdbt:cbcbcbq:afafaf',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1640475151',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/aa/05/98/aa0598c1-16e6-37d0-e13a-dbd24ef0c8ea/mzaf_10793030963333013129.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/mood/1640475141?i=1640475151&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/mood/1640475141?i=1640475151&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: true,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'makar',
        id: '42',
        adamid: '1372083152',
      },
    ],
    url: 'https://www.shazam.com/track/624940057/mood',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '606589047',
    title: 'Bones',
    subtitle: 'Imagine Dragons',
    share: {
      subject: 'Bones - Imagine Dragons',
      text: 'I used Shazam to discover Bones by Imagine Dragons.',
      href: 'https://www.shazam.com/track/606589047/bones',
      image:
        'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/33/87/c8/3387c827-adaa-681d-bd10-ce7d8e888b9c/22UMGIM21054.rgb.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Bones by Imagine Dragons.',
      html: 'https://www.shazam.com/snippets/email-share/606589047?lang=en&country=GB',
      avatar:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/83/bd/b7/83bdb7ff-63a6-2252-e04b-ece8ebdc5768/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/606589047',
    },
    images: {
      background:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/83/bd/b7/83bdb7ff-63a6-2252-e04b-ece8ebdc5768/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/33/87/c8/3387c827-adaa-681d-bd10-ce7d8e888b9c/22UMGIM21054.rgb.jpg/400x400cc.jpg',
      coverarthq:
        'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/33/87/c8/3387c827-adaa-681d-bd10-ce7d8e888b9c/22UMGIM21054.rgb.jpg/400x400cc.jpg',
      joecolor: 'b:e3dcccp:000000s:211d1at:2d2c28q:48433d',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1612321591',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/85/bd/1e/85bd1eaa-8aa2-2f8c-d84d-bd66a525faf9/mzaf_17880216165394527644.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/bones/1612321587?i=1612321591&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/bones/1612321587?i=1612321591&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'imagine-dragons',
        id: '42',
        adamid: '358714030',
      },
    ],
    url: 'https://www.shazam.com/track/606589047/bones',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '58129026',
    title: 'Sweater Weather',
    subtitle: 'The Neighbourhood',
    share: {
      subject: 'Sweater Weather - The Neighbourhood',
      text: 'I used Shazam to discover Sweater Weather by The Neighbourhood.',
      href: 'https://www.shazam.com/track/58129026/sweater-weather',
      image:
        'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/b3/df/53/b3df53e3-6dc3-c4d3-d1d5-c7c071c2f910/886443936522.jpg/400x400cc.jpg',
      twitter:
        'I used @Shazam to discover Sweater Weather by The Neighbourhood.',
      html: 'https://www.shazam.com/snippets/email-share/58129026?lang=en&country=GB',
      avatar:
        'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/3b/84/f9/3b84f924-9e0e-fbd6-3460-c04fa43e6a84/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/58129026',
    },
    images: {
      background:
        'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/3b/84/f9/3b84f924-9e0e-fbd6-3460-c04fa43e6a84/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/b3/df/53/b3df53e3-6dc3-c4d3-d1d5-c7c071c2f910/886443936522.jpg/400x400cc.jpg',
      coverarthq:
        'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/b3/df/53/b3df53e3-6dc3-c4d3-d1d5-c7c071c2f910/886443936522.jpg/400x400cc.jpg',
      joecolor: 'b:4b4b4bp:f4f4f4s:eaeaeat:d2d2d2q:cacaca',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '630590281',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/05/e8/2a/05e82ad8-f57d-92f5-a7b0-184f25c22b3f/mzaf_13282496970670707572.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/sweater-weather/630590275?i=630590281&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/sweater-weather/630590275?i=630590281&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'the-neighbourhood',
        id: '42',
        adamid: '219350813',
      },
    ],
    url: 'https://www.shazam.com/track/58129026/sweater-weather',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '613891396',
    title: 'Hold My Hand',
    subtitle: 'Lady Gaga',
    share: {
      subject: 'Hold My Hand - Lady Gaga',
      text: 'I used Shazam to discover Hold My Hand by Lady Gaga.',
      href: 'https://www.shazam.com/track/613891396/hold-my-hand',
      image:
        'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/14/14/e6141444-6597-4c3a-7ad1-86304528acf4/22UMGIM45569.rgb.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Hold My Hand by Lady Gaga.',
      html: 'https://www.shazam.com/snippets/email-share/613891396?lang=en&country=GB',
      avatar:
        'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/2c/7d/5e/2c7d5ec0-bad6-5fb6-08f2-ccfd94aa2985/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/613891396',
    },
    images: {
      background:
        'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/2c/7d/5e/2c7d5ec0-bad6-5fb6-08f2-ccfd94aa2985/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/14/14/e6141444-6597-4c3a-7ad1-86304528acf4/22UMGIM45569.rgb.jpg/400x400cc.jpg',
      coverarthq:
        'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/14/14/e6141444-6597-4c3a-7ad1-86304528acf4/22UMGIM45569.rgb.jpg/400x400cc.jpg',
      joecolor: 'b:1f1303p:f6e7a8s:f8e193t:cbbd87q:ccb876',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1621817905',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/32/b8/11/32b8116b-e335-0a81-2755-ac13cf59520a/mzaf_8485642671902821053.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/hold-my-hand/1621817793?i=1621817905&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/hold-my-hand/1621817793?i=1621817905&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'lady-gaga',
        id: '42',
        adamid: '277293880',
      },
    ],
    url: 'https://www.shazam.com/track/613891396/hold-my-hand',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '628712770',
    title: 'Calm Down',
    subtitle: 'Rema & Selena Gomez',
    share: {
      subject: 'Calm Down - Rema & Selena Gomez',
      text: 'I used Shazam to discover Calm Down by Rema & Selena Gomez.',
      href: 'https://www.shazam.com/track/628712770/calm-down',
      image:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/ee/f1/dc/eef1dc82-f516-fd0f-581c-3f952a0e2243/22UMGIM92113.rgb.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Calm Down by Rema & Selena Gomez.',
      html: 'https://www.shazam.com/snippets/email-share/628712770?lang=en&country=GB',
      avatar:
        'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/a6/0d/fd/a60dfd0f-3c47-713c-8f2b-326396cbdd1a/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/628712770',
    },
    images: {
      background:
        'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/a6/0d/fd/a60dfd0f-3c47-713c-8f2b-326396cbdd1a/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/ee/f1/dc/eef1dc82-f516-fd0f-581c-3f952a0e2243/22UMGIM92113.rgb.jpg/400x400cc.jpg',
      coverarthq:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/ee/f1/dc/eef1dc82-f516-fd0f-581c-3f952a0e2243/22UMGIM92113.rgb.jpg/400x400cc.jpg',
      joecolor: 'b:ea6c31p:0d0400s:24160ct:39190aq:4c2713',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1640501238',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/21/6a/f7/216af760-4f00-d65e-5176-d3b76ff1143d/mzaf_10299316430509002343.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/calm-down/1640501237?i=1640501238&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/calm-down/1640501237?i=1640501238&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'rema',
        id: '42',
        adamid: '1304716885',
      },
      {
        alias: 'selena-gomez',
        id: '42',
        adamid: '280215834',
      },
    ],
    url: 'https://www.shazam.com/track/628712770/calm-down',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '10281674',
    title: 'Bitch',
    subtitle: 'Meredith Brooks',
    share: {
      subject: 'Bitch - Meredith Brooks',
      text: 'I used Shazam to discover Bitch by Meredith Brooks.',
      href: 'https://www.shazam.com/track/10281674/bitch',
      image:
        'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/83/f9/0f/83f90f81-57c9-e611-22b1-c4ca3ddf1335/13UABIM59258.rgb.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Bitch by Meredith Brooks.',
      html: 'https://www.shazam.com/snippets/email-share/10281674?lang=en&country=GB',
      avatar:
        'https://is5-ssl.mzstatic.com/image/thumb/Features114/v4/f3/4c/88/f34c888c-fc78-6da1-3f73-0a1d0c257ffc/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/10281674',
    },
    images: {
      background:
        'https://is5-ssl.mzstatic.com/image/thumb/Features114/v4/f3/4c/88/f34c888c-fc78-6da1-3f73-0a1d0c257ffc/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/83/f9/0f/83f90f81-57c9-e611-22b1-c4ca3ddf1335/13UABIM59258.rgb.jpg/400x400cc.jpg',
      coverarthq:
        'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/83/f9/0f/83f90f81-57c9-e611-22b1-c4ca3ddf1335/13UABIM59258.rgb.jpg/400x400cc.jpg',
      joecolor: 'b:fafbf6p:0d0b0es:283040t:3c3b3dq:525864',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '724259949',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/e3/c6/a4/e3c6a4de-d0a2-52f2-ca07-3d6996c29e46/mzaf_1100282126621746441.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/bitch/724259722?i=724259949&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/bitch/724259722?i=724259949&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'meredith-brooks',
        id: '42',
        adamid: '642709',
      },
    ],
    url: 'https://www.shazam.com/track/10281674/bitch',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '614356939',
    title: 'Vegas (From the Original Motion Picture Soundtrack ELVIS)',
    subtitle: 'Doja Cat',
    share: {
      subject:
        'Vegas (From the Original Motion Picture Soundtrack ELVIS) - Doja Cat',
      text: 'I used Shazam to discover Vegas (From the Original Motion Picture Soundtrack ELVIS) by Doja Cat.',
      href: 'https://www.shazam.com/track/614356939/vegas-from-the-original-motion-picture-soundtrack-elvis',
      image:
        'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/eb/17/f2/eb17f226-831a-b913-0435-748346326f10/196589096296.jpg/400x400cc.jpg',
      twitter:
        'I used @Shazam to discover Vegas (From the Original Motion Picture Soundtrack ELVIS) by Doja Cat.',
      html: 'https://www.shazam.com/snippets/email-share/614356939?lang=en&country=GB',
      avatar:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/d7/a7/37/d7a73703-ee4b-29b7-8f22-64d7b88a31b6/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/614356939',
    },
    images: {
      background:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/d7/a7/37/d7a73703-ee4b-29b7-8f22-64d7b88a31b6/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/eb/17/f2/eb17f226-831a-b913-0435-748346326f10/196589096296.jpg/400x400cc.jpg',
      coverarthq:
        'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/eb/17/f2/eb17f226-831a-b913-0435-748346326f10/196589096296.jpg/400x400cc.jpg',
      joecolor: 'b:080808p:ebc4a0s:dbb677t:bd9e82q:b19361',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1622065027',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/50/0b/78/500b78e1-3d78-b634-fd90-1892533f5cc9/mzaf_584002463352351814.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/vegas-from-the-original-motion-picture-soundtrack-elvis/1622064872?i=1622065027&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/vegas-from-the-original-motion-picture-soundtrack-elvis/1622064872?i=1622065027&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: true,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'doja-cat',
        id: '42',
        adamid: '830588310',
      },
    ],
    url: 'https://www.shazam.com/track/614356939/vegas-from-the-original-motion-picture-soundtrack-elvis',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '614341353',
    title: 'Tití Me Preguntó',
    subtitle: 'Bad Bunny',
    share: {
      subject: 'Tití Me Preguntó - Bad Bunny',
      text: 'I used Shazam to discover Tití Me Preguntó by Bad Bunny.',
      href: 'https://www.shazam.com/track/614341353/-',
      image:
        'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/3e/04/eb/3e04ebf6-370f-f59d-ec84-2c2643db92f1/196626945068.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Tití Me Preguntó by Bad Bunny.',
      html: 'https://www.shazam.com/snippets/email-share/614341353?lang=en&country=GB',
      avatar:
        'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/46/76/b0/4676b074-0a3b-a056-74f2-a83f752e290e/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/614341353',
    },
    images: {
      background:
        'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/46/76/b0/4676b074-0a3b-a056-74f2-a83f752e290e/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/3e/04/eb/3e04ebf6-370f-f59d-ec84-2c2643db92f1/196626945068.jpg/400x400cc.jpg',
      coverarthq:
        'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/3e/04/eb/3e04ebf6-370f-f59d-ec84-2c2643db92f1/196626945068.jpg/400x400cc.jpg',
      joecolor: 'b:fcc2c1p:170a0bs:21201et:452f2fq:4d403e',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1622045635',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/71/8d/43/718d4318-e091-2897-3594-2dcd30af8888/mzaf_16799470290653602820.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/tit%C3%AD-me-pregunt%C3%B3/1622045624?i=1622045635&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/tit%C3%AD-me-pregunt%C3%B3/1622045624?i=1622045635&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'bad-bunny',
        id: '42',
        adamid: '1126808565',
      },
    ],
    url: 'https://www.shazam.com/track/614341353/-',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '616089001',
    title: 'La Bachata',
    subtitle: 'Manuel Turizo',
    share: {
      subject: 'La Bachata - Manuel Turizo',
      text: 'I used Shazam to discover La Bachata by Manuel Turizo.',
      href: 'https://www.shazam.com/track/616089001/la-bachata',
      image:
        'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/df/70/11/df701101-9f0f-3c43-ff6d-2186235d7e9c/196589129123.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover La Bachata by Manuel Turizo.',
      html: 'https://www.shazam.com/snippets/email-share/616089001?lang=en&country=GB',
      avatar:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/4e/27/ea/4e27eace-e436-de7f-0790-138fd31eca3c/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/616089001',
    },
    images: {
      background:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/4e/27/ea/4e27eace-e436-de7f-0790-138fd31eca3c/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/df/70/11/df701101-9f0f-3c43-ff6d-2186235d7e9c/196589129123.jpg/400x400cc.jpg',
      coverarthq:
        'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/df/70/11/df701101-9f0f-3c43-ff6d-2186235d7e9c/196589129123.jpg/400x400cc.jpg',
      joecolor: 'b:eef9ffp:09060ds:3b241bt:37373dq:5f4e49',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1624563284',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/c9/3f/2b/c93f2bd7-8e9a-aa9f-c1e9-423654990c18/mzaf_6489444487574180143.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/la-bachata/1624563280?i=1624563284&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/la-bachata/1624563280?i=1624563284&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'manuel-turizo',
        id: '42',
        adamid: '1186116587',
      },
    ],
    url: 'https://www.shazam.com/track/616089001/la-bachata',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '573875877',
    title: 'Afraid To Feel',
    subtitle: 'LF SYSTEM',
    share: {
      subject: 'Afraid To Feel - LF SYSTEM',
      text: 'I used Shazam to discover Afraid To Feel by LF SYSTEM.',
      href: 'https://www.shazam.com/track/573875877/afraid-to-feel',
      image:
        'https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/0f/60/2d/0f602d0d-19be-6e2b-29b6-70434ee142c2/190296191992.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Afraid To Feel by LF SYSTEM.',
      html: 'https://www.shazam.com/snippets/email-share/573875877?lang=en&country=GB',
      avatar:
        'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/e5/b1/37/e5b137a4-b44c-6124-0008-ea882dc2fbee/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/573875877',
    },
    images: {
      background:
        'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/e5/b1/37/e5b137a4-b44c-6124-0008-ea882dc2fbee/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/0f/60/2d/0f602d0d-19be-6e2b-29b6-70434ee142c2/190296191992.jpg/400x400cc.jpg',
      coverarthq:
        'https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/0f/60/2d/0f602d0d-19be-6e2b-29b6-70434ee142c2/190296191992.jpg/400x400cc.jpg',
      joecolor: 'b:fd7190p:000000s:191817t:32161dq:462a30',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1616903944',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/eb/a4/10/eba410f3-449f-6198-62c9-c82519e96664/mzaf_391096424991158520.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/afraid-to-feel/1616903929?i=1616903944&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/afraid-to-feel/1616903929?i=1616903944&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'lf-system',
        id: '42',
        adamid: '1494945383',
      },
    ],
    url: 'https://www.shazam.com/track/573875877/afraid-to-feel',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '615148221',
    title: 'I Like You (A Happier Song) [feat. Doja Cat]',
    subtitle: 'Post Malone',
    share: {
      subject: 'I Like You (A Happier Song) [feat. Doja Cat] - Post Malone',
      text: 'I used Shazam to discover I Like You (A Happier Song) [feat. Doja Cat] by Post Malone.',
      href: 'https://www.shazam.com/track/615148221/i-like-you-a-happier-song-feat-doja-cat',
      image:
        'https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/0d/e8/8b/0de88b7c-bed9-be30-24e2-82d796e7bcf3/22UMGIM49145.rgb.jpg/400x400cc.jpg',
      twitter:
        'I used @Shazam to discover I Like You (A Happier Song) [feat. Doja Cat] by Post Malone.',
      html: 'https://www.shazam.com/snippets/email-share/615148221?lang=en&country=GB',
      avatar:
        'https://is5-ssl.mzstatic.com/image/thumb/Features112/v4/8a/a1/b5/8aa1b58e-94c5-f6ea-69d4-1ea688df3522/mzl.qcmhftom.jpg/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/615148221',
    },
    images: {
      background:
        'https://is5-ssl.mzstatic.com/image/thumb/Features112/v4/8a/a1/b5/8aa1b58e-94c5-f6ea-69d4-1ea688df3522/mzl.qcmhftom.jpg/800x800cc.jpg',
      coverart:
        'https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/0d/e8/8b/0de88b7c-bed9-be30-24e2-82d796e7bcf3/22UMGIM49145.rgb.jpg/400x400cc.jpg',
      coverarthq:
        'https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/0d/e8/8b/0de88b7c-bed9-be30-24e2-82d796e7bcf3/22UMGIM49145.rgb.jpg/400x400cc.jpg',
      joecolor: 'b:181e24p:dadee6s:b4bdcdt:b3b7bfq:959dab',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1623193283',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/b3/2f/2a/b32f2a15-147f-d324-03d7-0a82a50f9267/mzaf_460639408625458102.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/i-like-you-a-happier-song-feat-doja-cat/1623192950?i=1623193283&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/i-like-you-a-happier-song-feat-doja-cat/1623192950?i=1623193283&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: true,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'post-malone',
        id: '42',
        adamid: '966309175',
      },
    ],
    url: 'https://www.shazam.com/track/615148221/i-like-you-a-happier-song-feat-doja-cat',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '506004198',
    title: 'MIDDLE OF THE NIGHT',
    subtitle: 'Elley Duhé',
    share: {
      subject: 'MIDDLE OF THE NIGHT - Elley Duhé',
      text: 'I used Shazam to discover MIDDLE OF THE NIGHT by Elley Duhé.',
      href: 'https://www.shazam.com/track/506004198/middle-of-the-night',
      image:
        'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/64/03/cb/6403cb43-d892-4663-d759-5093b5ed610c/886448203087.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover MIDDLE OF THE NIGHT by Elley Duhé.',
      html: 'https://www.shazam.com/snippets/email-share/506004198?lang=en&country=GB',
      avatar:
        'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/d9/8a/3b/d98a3bbc-85cd-b2eb-5afe-df93bc7d8ece/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/506004198',
    },
    images: {
      background:
        'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/d9/8a/3b/d98a3bbc-85cd-b2eb-5afe-df93bc7d8ece/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/64/03/cb/6403cb43-d892-4663-d759-5093b5ed610c/886448203087.jpg/400x400cc.jpg',
      coverarthq:
        'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/64/03/cb/6403cb43-d892-4663-d759-5093b5ed610c/886448203087.jpg/400x400cc.jpg',
      joecolor: 'b:1f1110p:ffffffs:e2c579t:d2cfcfq:bba164',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1492152237',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/2b/bd/d0/2bbdd03b-2079-452b-9e54-3000ad9db011/mzaf_10814947559187448634.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/middle-of-the-night/1492152228?i=1492152237&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/middle-of-the-night/1492152228?i=1492152237&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'elley-duh%C3%A9',
        id: '42',
        adamid: '394295270',
      },
    ],
    url: 'https://www.shazam.com/track/506004198/middle-of-the-night',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '591322562',
    title: 'Sunroof',
    subtitle: 'Nicky Youre & Dazy',
    share: {
      subject: 'Sunroof - Nicky Youre & Dazy',
      text: 'I used Shazam to discover Sunroof by Nicky Youre & Dazy.',
      href: 'https://www.shazam.com/track/591322562/sunroof',
      image:
        'https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/c8/3f/14/c83f14cc-ec3d-ad8e-dfd3-1c7602cc063f/196589131317.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Sunroof by Nicky Youre & Dazy.',
      html: 'https://www.shazam.com/snippets/email-share/591322562?lang=en&country=GB',
      avatar:
        'https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/ca/64/35/ca64354e-b9bc-8621-ce3d-93393abf4e82/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/591322562',
    },
    images: {
      background:
        'https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/ca/64/35/ca64354e-b9bc-8621-ce3d-93393abf4e82/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/c8/3f/14/c83f14cc-ec3d-ad8e-dfd3-1c7602cc063f/196589131317.jpg/400x400cc.jpg',
      coverarthq:
        'https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/c8/3f/14/c83f14cc-ec3d-ad8e-dfd3-1c7602cc063f/196589131317.jpg/400x400cc.jpg',
      joecolor: 'b:265a8fp:f6d9ces:d3d9ddt:cdc0c1q:b0c0cd',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1620953051',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/8e/16/03/8e1603c6-e5eb-c8d1-4aa6-7a178cac0b89/mzaf_16179972330837339186.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/sunroof/1620952862?i=1620953051&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/sunroof/1620952862?i=1620953051&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'nicky-youre',
        id: '42',
        adamid: '1514850269',
      },
      {
        alias: 'dazy',
        id: '42',
        adamid: '1614230070',
      },
    ],
    url: 'https://www.shazam.com/track/591322562/sunroof',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '621762078',
    title: 'Bandana',
    subtitle: 'Fireboy DML & Asake',
    share: {
      subject: 'Bandana - Fireboy DML & Asake',
      text: 'I used Shazam to discover Bandana by Fireboy DML & Asake.',
      href: 'https://www.shazam.com/track/621762078/-',
      image:
        'https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/f3/e9/34/f3e93478-8d0e-b366-55c1-bfc05d2f4e0b/194690888939_cover.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Bandana by Fireboy DML & Asake.',
      html: 'https://www.shazam.com/snippets/email-share/621762078?lang=en&country=GB',
      avatar:
        'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/ef/97/3b/ef973b1a-78c4-52d4-e6e8-a28caf033628/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/621762078',
    },
    images: {
      background:
        'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/ef/97/3b/ef973b1a-78c4-52d4-e6e8-a28caf033628/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/f3/e9/34/f3e93478-8d0e-b366-55c1-bfc05d2f4e0b/194690888939_cover.jpg/400x400cc.jpg',
      coverarthq:
        'https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/f3/e9/34/f3e93478-8d0e-b366-55c1-bfc05d2f4e0b/194690888939_cover.jpg/400x400cc.jpg',
      joecolor: 'b:dadad8p:110c0as:191916t:393533q:403f3d',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1633281954',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/10/44/14/10441410-a032-bc78-e04e-f0df6e2da39c/mzaf_5389131125302051641.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/bandana/1633281947?i=1633281954&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/bandana/1633281947?i=1633281954&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: true,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'fireboy-dml',
        id: '42',
        adamid: '1437009453',
      },
      {
        alias: 'asake',
        id: '42',
        adamid: '1436064480',
      },
    ],
    url: 'https://www.shazam.com/track/621762078/-',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '575061784',
    title: 'Pepas',
    subtitle: 'Farruko',
    share: {
      subject: 'Pepas - Farruko',
      text: 'I used Shazam to discover Pepas by Farruko.',
      href: 'https://www.shazam.com/track/575061784/-',
      image:
        'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/02/59/6b/02596b89-0475-9b14-3b51-934d24770ec3/886449572236.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Pepas by Farruko.',
      html: 'https://www.shazam.com/snippets/email-share/575061784?lang=en&country=GB',
      avatar:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a7/e7/6a/a7e76a3f-aba3-7ccb-7f39-54ba50ed1c5b/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/575061784',
    },
    images: {
      background:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a7/e7/6a/a7e76a3f-aba3-7ccb-7f39-54ba50ed1c5b/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/02/59/6b/02596b89-0475-9b14-3b51-934d24770ec3/886449572236.jpg/400x400cc.jpg',
      coverarthq:
        'https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/02/59/6b/02596b89-0475-9b14-3b51-934d24770ec3/886449572236.jpg/400x400cc.jpg',
      joecolor: 'b:080401p:fdfffcs:e9860at:cbccc9q:bc6c08',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1586869915',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f4/d8/36/f4d83642-7224-b117-b0a7-af0d713375a8/mzaf_6572891366325147107.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/pepas/1586869902?i=1586869915&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/pepas/1586869902?i=1586869915&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: true,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'farruko',
        id: '42',
        adamid: '364377482',
      },
    ],
    url: 'https://www.shazam.com/track/575061784/-',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '511731769',
    title: 'Shinunoga E-Wa',
    subtitle: 'Fujii Kaze',
    share: {
      subject: 'Shinunoga E-Wa - Fujii Kaze',
      text: 'I used Shazam to discover Shinunoga E-Wa by Fujii Kaze.',
      href: 'https://www.shazam.com/track/511731769/shinunoga-e-wa',
      image:
        'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/96/4e/5b/964e5b6e-4766-63ba-7e50-9f8a5bd0569e/20UMGIM17280.rgb.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Shinunoga E-Wa by Fujii Kaze.',
      html: 'https://www.shazam.com/snippets/email-share/511731769?lang=en&country=GB',
      avatar:
        'https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/e5/3f/da/e53fda17-e8d5-5c76-1d9e-bdfb127475e9/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/511731769',
    },
    images: {
      background:
        'https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/e5/3f/da/e53fda17-e8d5-5c76-1d9e-bdfb127475e9/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/96/4e/5b/964e5b6e-4766-63ba-7e50-9f8a5bd0569e/20UMGIM17280.rgb.jpg/400x400cc.jpg',
      coverarthq:
        'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/96/4e/5b/964e5b6e-4766-63ba-7e50-9f8a5bd0569e/20UMGIM17280.rgb.jpg/400x400cc.jpg',
      joecolor: 'b:abababp:050505s:070707t:262626q:272727',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1505498792',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/09/dc/85/09dc85ff-864d-63fd-277a-bfbbaff0725d/mzaf_15542888245757637983.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/shinunoga-e-wa/1505498769?i=1505498792&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/shinunoga-e-wa/1505498769?i=1505498792&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'fujii-kaze',
        id: '42',
        adamid: '1486113150',
      },
    ],
    url: 'https://www.shazam.com/track/511731769/shinunoga-e-wa',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '528311140',
    title: "World's Smallest Violin",
    subtitle: 'AJR',
    share: {
      subject: "World's Smallest Violin - AJR",
      text: "I used Shazam to discover World's Smallest Violin by AJR.",
      href: 'https://www.shazam.com/track/528311140/-',
      image:
        'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/aa/3a/43/aa3a4356-17ae-acc1-44ac-d7edd16f2c8b/886448988809.jpg/400x400cc.jpg',
      twitter: "I used @Shazam to discover World's Smallest Violin by AJR.",
      html: 'https://www.shazam.com/snippets/email-share/528311140?lang=en&country=GB',
      avatar:
        'https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/69/69/82/696982b4-9bee-c3fa-def8-040d58ba41e4/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/528311140',
    },
    images: {
      background:
        'https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/69/69/82/696982b4-9bee-c3fa-def8-040d58ba41e4/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/aa/3a/43/aa3a4356-17ae-acc1-44ac-d7edd16f2c8b/886448988809.jpg/400x400cc.jpg',
      coverarthq:
        'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/aa/3a/43/aa3a4356-17ae-acc1-44ac-d7edd16f2c8b/886448988809.jpg/400x400cc.jpg',
      joecolor: 'b:160f1cp:d2c0b6s:fc7f48t:ac9d97q:ce683f',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1544998843',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/75/db/d9/75dbd938-f566-5ee6-9b1d-d1352bfed089/mzaf_11239383803015709673.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/worlds-smallest-violin/1544998133?i=1544998843&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/worlds-smallest-violin/1544998133?i=1544998843&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: true,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'ajr',
        id: '42',
        adamid: '359553651',
      },
    ],
    url: 'https://www.shazam.com/track/528311140/-',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '448792155',
    title: 'Waking Up',
    subtitle: 'MJ Cole & Freya Ridings',
    share: {
      subject: 'Waking Up - MJ Cole & Freya Ridings',
      text: 'I used Shazam to discover Waking Up by MJ Cole & Freya Ridings.',
      href: 'https://www.shazam.com/track/448792155/waking-up',
      image:
        'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/2f/d2/f3/2fd2f30b-bef5-7b07-6671-47fc2a8a41b8/886447562895.jpg/400x400cc.jpg',
      twitter:
        'I used @Shazam to discover Waking Up by MJ Cole & Freya Ridings.',
      html: 'https://www.shazam.com/snippets/email-share/448792155?lang=en&country=GB',
      avatar:
        'https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/b8/1a/d9/b81ad91a-b0fa-9825-a547-4203af6be730/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/448792155',
    },
    images: {
      background:
        'https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/b8/1a/d9/b81ad91a-b0fa-9825-a547-4203af6be730/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/2f/d2/f3/2fd2f30b-bef5-7b07-6671-47fc2a8a41b8/886447562895.jpg/400x400cc.jpg',
      coverarthq:
        'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/2f/d2/f3/2fd2f30b-bef5-7b07-6671-47fc2a8a41b8/886447562895.jpg/400x400cc.jpg',
      joecolor: 'b:101419p:dc8be0s:f61a34t:b374b8q:c7192e',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1452294085',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4a/ba/1a/4aba1a14-6ac5-36a5-59e8-12835fef2605/mzaf_507706599796135798.plus.aac.ep.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/waking-up/1452294071?i=1452294085&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/waking-up/1452294071?i=1452294085&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: false,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'mj-cole',
        id: '42',
        adamid: '405892',
      },
      {
        alias: 'freya-ridings',
        id: '42',
        adamid: '1225659793',
      },
    ],
    url: 'https://www.shazam.com/track/448792155/waking-up',
    highlightsurls: {},
    properties: {},
  },
  {
    layout: '5',
    type: 'MUSIC',
    key: '623615874',
    title: 'Doja',
    subtitle: 'Central Cee',
    share: {
      subject: 'Doja - Central Cee',
      text: 'I used Shazam to discover Doja by Central Cee.',
      href: 'https://www.shazam.com/track/623615874/doja',
      image:
        'https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/69/71/cd/6971cdac-f975-8691-97e6-4454a99da56a/5054197234330.jpg/400x400cc.jpg',
      twitter: 'I used @Shazam to discover Doja by Central Cee.',
      html: 'https://www.shazam.com/snippets/email-share/623615874?lang=en&country=GB',
      avatar:
        'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/70/1a/86/701a8620-9257-10fd-8999-7bb934288604/pr_source.png/800x800cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/623615874',
    },
    images: {
      background:
        'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/70/1a/86/701a8620-9257-10fd-8999-7bb934288604/pr_source.png/800x800cc.jpg',
      coverart:
        'https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/69/71/cd/6971cdac-f975-8691-97e6-4454a99da56a/5054197234330.jpg/400x400cc.jpg',
      coverarthq:
        'https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/69/71/cd/6971cdac-f975-8691-97e6-4454a99da56a/5054197234330.jpg/400x400cc.jpg',
      joecolor: 'b:160607p:c0d7fas:cfb9a2t:9eadc9q:aa9583',
    },
    hub: {
      type: 'APPLEMUSIC',
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      actions: [
        {
          name: 'apple',
          type: 'applemusicplay',
          id: '1634523100',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/fa/c6/23/fac62369-02ae-6451-1942-76f38e2a61b0/mzaf_1964475913263690754.plus.aac.p.m4a',
        },
      ],
      options: [
        {
          caption: 'OPEN',
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/doja/1634523099?i=1634523100&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/doja/1634523099?i=1634523100&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            type: 'open',
            providername: 'applemusic',
          },
          image:
            'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          type: 'open',
          listcaption: 'Open in Apple Music',
          overflowimage:
            'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          colouroverflowimage: false,
          providername: 'applemusic',
        },
      ],
      explicit: true,
      displayname: 'APPLE MUSIC',
    },
    artists: [
      {
        alias: 'central-cee',
        id: '42',
        adamid: '1085149646',
      },
    ],
    url: 'https://www.shazam.com/track/623615874/doja',
    highlightsurls: {},
    properties: {},
  },
];
