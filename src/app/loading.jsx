import ParticlesBackground from "@/components/Background";
import Loader from "@/components/Loader";

export default function Loading() {
  return (
    <>
    {/* <ParticlesBackground/> */}
      <div className="fixed inset-0 flex flex-col items-center justify-center gap-2 z-50 px-2">
        <Loader />
      </div>
    </>
  );
}
