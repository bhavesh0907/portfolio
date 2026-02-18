export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 -z-10 opacity-10">
      <div className="absolute w-full h-full bg-[linear-gradient(#1f2933_1px,transparent_1px),linear-gradient(90deg,#1f2933_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
}
