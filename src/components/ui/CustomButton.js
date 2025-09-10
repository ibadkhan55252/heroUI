"use client";
import { Button } from "@heroui/react";
import clsx from "clsx";

function customButton({ style = "primary", customSize = "md", className = "" }) {

    // base styles
    const base = "font-semibold transition-all duration-300";

    // style variants
    const styleVariants = {
        primary: "bg-blue-500 hover:bg-blue-600 hover:text-white-500",
        danger: "bg-red-700 hover:bg-red-900 ",
        ghostPrimary: "bg-danger-700 hover:bg-danger-900 ",
    };

    // size variants
    const sizeVariants = {
        xs: "px-3 py-2 text-xs",
        sm: "px-4 py-3.5 text-sm",
        md: "px-5 py-5.5 text-base",
        lg: "px-7 py-6.5 text-lg",
        xl: "px-9 py-7.5 text-xl",
    };

    return clsx(base, styleVariants[style], sizeVariants[customSize], className);
}

export function MyCustomButton({ style, customSize, children, className, ...props }) {
    return (
        <Button className={customButton({ style, customSize, className })} {...props}>
            {children}
        </Button>
    );
}
