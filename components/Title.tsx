import { cn } from "@/lib/utils"

export const Title = ({className, children}:{className?:string, children:React.ReactNode}) => {
    return (
        <h1 className={cn("text-2xl lg:text-3xl font-semibold text-darkGreen capitalize tracking-wide", className)}>{children}</h1>
    )
}
