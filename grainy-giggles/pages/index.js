// pages/index.js
export default function HomePage() {
    return (
      <div>
        <header className="text-center bg-gray-100 py-8">
          <h1 className="text-3xl">Grainy Giggles</h1>
          <p className="text-lg text-gray-500">Shake your greens.</p>
        </header>
  
        <main className="p-5">
          <div className="hero text-center">
            <p className="my-5">Your pre and post-workout meals await!</p>
          </div>
  
          <section className="features mt-10 text-center">
            <h2 className="text-2xl mb-5">Features</h2>
            <div className="cards flex justify-center gap-5">
              <div className="card border p-5 w-48 rounded bg-white">
                <h3 className="text-xl">Healthy Meals</h3>
                <p>Nutrition-packed meals for your needs.</p>
              </div>
              <div className="card border p-5 w-48 rounded bg-white">
                <h3 className="text-xl">Custom Plans</h3>
                <p>Tailored to your fitness goals.</p>
              </div>
            </div>
          </section>
        </main>
  
        <footer className="text-center mt-10 py-5 bg-gray-100">
          <p>&copy; 2024 Grainy Giggles</p>
        </footer>
      </div>
    );
  }
  