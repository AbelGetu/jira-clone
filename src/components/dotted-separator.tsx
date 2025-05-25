import { cn } from "@/lib/utils";

interface DottedSeparatorProps {
    className?: string;
    color?: string;
    height?: string;
    dotSize?: string;
    gapSize?: string;
    direction?: "horizontal" | "vertical"  
}

export const DottedSeparator = ({
    className,
    color = "#d4d4d8",
    // height = "2px",
    dotSize = "2px",
    gapSize = "6px",
    direction = "horizontal"
}: DottedSeparatorProps) => {
    const isHorizontal = direction === 'horizontal';

    return (
        <div className={cn(
            isHorizontal ? "w-full flex items-center" : "w-full flex flex-col items-center",
            className,
        )}>
            <div 
            className={isHorizontal ? "flex-grow" : "flex-grow-0"}
            style={{ 
                width: isHorizontal ? "100%" : dotSize,
                height: isHorizontal ? dotSize : "100%",
                backgroundImage: `repeating-radial-gradient(circle, ${color} 0, ${color} ${dotSize}, transparent ${dotSize}, transparent calc(${dotSize} + ${gapSize}))`,
                backgroundSize: isHorizontal
                    ? `calc(${dotSize} + ${gapSize}) ${dotSize}`
                    : `${dotSize} calc(${dotSize} + ${gapSize})`,
                backgroundRepeat: "repeat",
                backgroundPosition: "center"
             }}
            />
        </div>
    )
}