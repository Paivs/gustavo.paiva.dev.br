import Splash from "@/components/Splash";

export default function Loading() {
  return (
    <>
      <div className="fixed inset-0 flex flex-col items-center justify-center gap-2 bg-white z-50">
        <Splash />
      </div>
    </>
  );
}
