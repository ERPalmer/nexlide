import { slideVariants } from "./lib/animations";
interface CarouselItem {
    imageUrl: string;
    title: string;
    description: string;
}
interface CarouselProps {
    items: CarouselItem[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
    showPagination?: boolean;
    showArrows?: boolean;
    infiniteLoop?: boolean;
    className?: string;
    slideClassName?: string;
    captionClassName?: string;
    arrowClassName?: string;
    paginationClassName?: string;
    dotClassName?: string;
    animation?: keyof typeof slideVariants;
    captionAnimation?: keyof typeof slideVariants;
    captionDelay?: number;
}
export default function Carousel({ items, autoPlay, autoPlayInterval, showPagination, showArrows, infiniteLoop, className, slideClassName, captionClassName, arrowClassName, paginationClassName, dotClassName, animation, captionAnimation, captionDelay, }: CarouselProps): import("react/jsx-runtime").JSX.Element | null;
export {};
