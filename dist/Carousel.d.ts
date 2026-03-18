import * as React from "react";
import { slideVariants } from "./lib/animations";
interface CarouselItem {
    imageUrl: string;
    title?: string;
    description?: string;
}
interface CarouselProps {
    items: CarouselItem[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
    autoPlayDirection?: "forward" | "reverse";
    infiniteLoop?: boolean;
    pauseOnHover?: boolean;
    pauseOnFocus?: boolean;
    pauseOnDrag?: boolean;
    showPagination?: boolean;
    showArrows?: boolean;
    animation?: keyof typeof slideVariants;
    rtl?: boolean;
    className?: string;
    slideClassName?: string;
    arrowClassName?: string;
    paginationClassName?: string;
    dotClassName?: string;
    captionClassName?: string;
    captionAnimation?: keyof typeof slideVariants;
    captionDelay?: number;
    captionDuration?: number;
}
export default function Carousel(props: CarouselProps): React.ReactElement | null;
export {};
