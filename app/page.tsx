export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-blue-600">Game Collection</h1>
          <p className="mt-2 text-xl text-slate-600">Your ultimate gaming destination</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-xl font-semibold text-blue-600 mb-4">Categories</h2>
              <nav className="space-y-2">
                <a href="#" className="block px-4 py-2 rounded bg-blue-50 text-blue-600 font-medium">Action</a>
                <a href="#" className="block px-4 py-2 rounded hover:bg-slate-50">Adventure</a>
                <a href="#" className="block px-4 py-2 rounded hover:bg-slate-50">Strategy</a>
                <a href="#" className="block px-4 py-2 rounded hover:bg-slate-50">RPG</a>
                <a href="#" className="block px-4 py-2 rounded hover:bg-slate-50">Survival</a>
              </nav>
            </div>
          </div>

          {/* Main Content - Game Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Monster Survivors Card */}
              <a href="/games/monster-survivors" className="block">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-video bg-slate-200 relative">
                    <img src="/images/monster-survivors-thumb.jpg" alt="Monster Survivors" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Monster Survivors</h3>
                    <p className="text-slate-600 mb-3">Survive against waves of terrifying creatures in this action-packed adventure.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">Action</span>
                      <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">Survival</span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Ragdoll Archers Card */}
              <a href="/games/ragdoll-archers" className="block">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-video bg-slate-200 relative">
                    <img src="/images/ragdoll-archers-thumb.jpg" alt="Ragdoll Archers" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Ragdoll Archers</h3>
                    <p className="text-slate-600 mb-3">A strategy-packed adventure with unique heroes and powerful pets.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">Strategy</span>
                      <span className="bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded">RPG</span>
                    </div>
                  </div>
                </div>
              </a>
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