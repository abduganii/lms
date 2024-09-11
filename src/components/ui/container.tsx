export default function Container({ children, className }: any) {
  return (
    <>
      <div
        className={`w-full max-w-[1192px] mx-auto px-4 ${
          className && className
        }`}
      >
        {children}
      </div>
    </>
  );
}
