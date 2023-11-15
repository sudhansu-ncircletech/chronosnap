import { Suspense } from "react";
import ParticleRing from "../../features/ParticleRing";


const Home = () => {
  return (
    <div className="relative">
      <Suspense fallback={<h1>...Loading</h1>}>
        <ParticleRing/>
      </Suspense>
    </div>
  );
};

export default Home;

