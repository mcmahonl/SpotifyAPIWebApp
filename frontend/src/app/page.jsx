'use client';

import React from 'react'; 
import Image from 'next/image';

import useAuth from '../hooks/useAuth';

import AuthButton from '../components/authButton';
 
const HomePage = () => {
  // Here we use a custom hook to get the authentication status of the user
  const token = useAuth();
  
  if (token) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Title */}
        <div className="flex flex-col items-center justify-center mt-32">
          <h1 className="text-6xl font-bold text-center mb-2">
            Welcome to <span className="text-green-500">SpotifyAPIWebApp</span>.
          </h1>
          <p className="text-xl text-center text-gray-500">
            A new way to see your listening habits!
          </p>
        </div>
        {/* Spotify logo */}
        <div className="opacity-10 absolute translate-y-1/2 flex place-items-center before:absolute 
                        before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full 
                        before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl 
                        before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] 
                        after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 
                        after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent 
                        before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] 
                        after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/spotify-logo.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className="gap-2 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          {/* Genre button */}
          <a
            href="/genres"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 
                       hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Explore Genres{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore your favorite genres and find new ones!
            </p>
          
          </a>

          {/* Artist button */}
          <a
            href="/artists"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 
                       hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Explore Artists{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore your favorite artists and find new ones!
            </p>
          </a>

          {/* playlist button */}
          <a
            href="/playlists"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 
                       hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Explore Playlists{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 
                               motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore your favorite playlists and find new ones!
            </p>
          </a>
        </div>
      </main>
    );
  }
  else {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Title */}
        <div className="flex flex-col items-center justify-center mt-32">
          <h1 className="text-6xl font-bold text-center mb-2">
            Welcome to <span className="text-green-500">SpotifyAPIWebApp</span>.
          </h1>
          <p className="text-xl text-center text-gray-500">
            A new way to see your listening habits
          </p>
        </div>
        {/* Spotify logo */}
        <div className="opacity-10 absolute translate-y-1/2 flex place-items-center before:absolute 
                        before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial 
                        before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 
                        after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 
                        after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br 
                        before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 
                        after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/spotify-logo.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div style={{
          marginTop: "10rem",
          marginBottom: "10rem",
        }}>
          <AuthButton />
        </div>
      </main>
    );
  }
}

export default HomePage;
