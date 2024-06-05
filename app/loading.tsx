import Loader from "@/components/ui/Loader";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Loader />
    </div>
  );
}
