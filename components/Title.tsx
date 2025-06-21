import { cn } from "@/lib/utils"

const Title = ({className, children}:{className?:string, children:React.ReactNode}) => {
    return (
        <h1 className={cn("text-2xl lg:text-3xl font-semibold text-darkGreen capitalize tracking-wide", className)}>{children}</h1>
    )
}

const SubText = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("text-xs text-slate-600", className)}>
      {children}
    </p>
  );
};

const SubTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("text-sm text-slate-600", className)}>
      {children}
    </p>
  );
};


export {Title, SubTitle, SubText}
