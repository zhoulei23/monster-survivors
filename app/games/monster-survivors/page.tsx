export default function MonsterSurvivors() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <a href="/" className="text-blue-600 hover:text-blue-800">← Back to Games</a>
          <h1 className="text-4xl font-bold text-blue-600 mt-4">Monster Survivors</h1>
          <p className="mt-2 text-xl text-slate-600">Survive the monster apocalypse in this thrilling action-packed adventure!</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Content */}
          <div className="lg:col-span-2">
            <section className="mb-12">
              <div className="game-container rounded-lg shadow-lg overflow-hidden">
                <iframe 
                  src="https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html" 
                  allowFullScreen 
                  title="Monster Survivors Game"
                  className="absolute top-0 left-0 w-full h-full border-none"
                />
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">About Monster Survivors</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-slate-700 mb-4">
                  Monster Survivors is an exhilarating survival game that puts you in the middle of a monster-infested world. 
                  Your mission is to survive against waves of terrifying creatures while gathering resources and upgrading your abilities.
                </p>
                <p className="text-lg text-slate-700 mb-4">
                  With stunning graphics and smooth gameplay, Monster Survivors offers an immersive experience that will keep you on the edge of your seat. 
                  The game features various levels of difficulty, unique monsters, and powerful upgrades to keep the challenge fresh and exciting.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">How to Play</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ol className="list-decimal list-inside space-y-2 text-slate-700">
                  <li>Use WASD or arrow keys to move your character</li>
                  <li>Click or tap to attack monsters</li>
                  <li>Collect resources and power-ups</li>
                  <li>Upgrade your abilities between waves</li>
                  <li>Survive as long as possible!</li>
                </ol>
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
                    <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">Action</span>
                    <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">Survival</span>
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