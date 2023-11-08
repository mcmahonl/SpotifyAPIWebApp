import Image from 'next/image'
 
const Artists = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Title */}
      <div className="flex flex-col items-center justify-center mt-32 mb-32">
        <h1 className="text-6xl font-bold text-center mb-2">
          Explore Your <span className="text-green-500">Artists</span>.
        </h1>
        <p className="text-xl text-center text-gray-500">
          Hello world
        </p>
      </div>
    </main>
  );
}

export default Artists;
