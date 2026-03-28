import * as React from "react";
import { animationVariants } from "./lib/animationVariants";
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
    rtl?: boolean;
    pauseOnHover?: boolean;
    pauseOnFocus?: boolean;
    pauseOnDrag?: boolean;
    showPagination?: boolean;
    showArrows?: boolean;
    animation?: keyof typeof animationVariants;
    captionAnimation?: keyof typeof animationVariants;
    captionDelay?: number;
    captionDuration?: number;
    className?: string;
    slideClassName?: string;
    arrowClassName?: string;
    paginationClassName?: string;
    dotClassName?: string;
    captionClassName?: string;
}
export default function Carousel(props: CarouselProps): React.ReactElement | null;
export {};
