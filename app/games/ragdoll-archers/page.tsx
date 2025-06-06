export default function RagdollArchers() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <a href="/" className="text-blue-600 hover:text-blue-800">← Back to Games</a>
          <h1 className="text-4xl font-bold text-blue-600 mt-4">Ragdoll Archers</h1>
          <p className="mt-2 text-xl text-slate-600">A strategy-packed adventure with unique heroes and powerful pets!</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Content */}
          <div className="lg:col-span-2">
            <section className="mb-12">
              <div className="game-container rounded-lg shadow-lg overflow-hidden">
                <iframe 
                  src="https://games.crazygames.com/en_US/ragdoll-archers/index.html" 
                  allowFullScreen 
                  title="Ragdoll Archers Game"
                  className="absolute top-0 left-0 w-full h-full border-none"
                />
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">About Ragdoll Archers</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-slate-700 mb-4">
                  Heroes Assemble is a strategy-packed adventure where you unite legendary heroes across eras. 
                  Craft unique strategies by pairing them with adorable, powerful pets. Dive into unpredictable 
                  dungeons with Rogue-like elements for endless surprises.
                </p>
                <p className="text-lg text-slate-700 mb-4">
                  Challenge yourself with thrilling modes like boss battles, arenas, alliances, and more. 
                  Your choices shape every epic moment!
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">How to Play</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-slate-700">Use the left mouse button to play.</p>
              </div>
            </section>
          </div>

          {/* Game Information Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-8">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Game Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-700">Categories</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">Strategy</span>
                    <span className="bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded">RPG</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-700">Difficulty</h4>
                  <p className="text-slate-600">Medium</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-700">Last Updated</h4>
                  <p className="text-slate-600">March 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p>&copy; 2024 Game Collection. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 