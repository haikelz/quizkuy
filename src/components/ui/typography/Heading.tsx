import { HeadingProps } from "@/types";

export function Heading({ as, children }: HeadingProps) {
  return (
    <>
      {as === "h1" ? (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {children}
        </h1>
      ) : as === "h2" ? (
        <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight first:mt-0">
          {children}
        </h2>
      ) : as === "h3" ? (
        <h3 className="scroll-m-20 text-2xl font-extrabold tracking-tight">
          {children}
        </h3>
      ) : as === "h4" ? (
        <h4 className="scroll-m-20 text-xl font-extrabold tracking-tight">
          {children}
        </h4>
      ) : null}
    </>
  );
}
