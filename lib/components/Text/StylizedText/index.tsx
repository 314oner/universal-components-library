import React, { MouseEventHandler } from 'react';
import styles from './index.module.css'
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const variants = {
    cursorPointer: "cursor-pointer",
    cursorText: "cursor-text",
    textColorWhite: "text-white-500",
    textColorGray: "text-gray-500",
    textColorDark: "text-dark-500",
    textColorBlue: "text-blue-500",
    fontWeightBold: "font-bold",
    fontWeightNormal: "font-normal",
    fontStyleItalic: "italic",
    fontStyleNotItalic: "not-italic",
    fontSizeTiny: "text-xs",
    fontSizeSmall: "text-sm",
    fontSizeDefault: "text-base"
} as const;

export interface IStylizedTextProps {
    children: React.ReactNode
    size?: 'fontSizeTiny' | 'fontSizeSmall' | 'fontSizeDefault'
    bold?: boolean
    italic?: boolean
    color?: 'textColorWhite' | 'textColorGray' | 'textColorDark' | 'textColorBlue'
    cursor?: 'cursorPointer' | 'cursorText'
    onClick?: MouseEventHandler<HTMLParagraphElement>,
    className?: object
}
export const StylizedText: React.FC<IStylizedTextProps> =
    ({ size = "fontSizeDefault", bold = false, italic = false, color = "textColorWhite", onClick = undefined, className = styles.text, children }) => {
        const isClickable = onClick ? variants.cursorPointer : variants.cursorText;
        const isDedicated = bold ? variants.fontWeightBold : variants.fontWeightNormal;
        const isTilted = italic ? variants.fontStyleItalic : variants.fontStyleNotItalic;

        return (
            <p className={twMerge(clsx(variants[color as keyof typeof variants], variants[size as keyof typeof variants], className, isClickable, isDedicated, isTilted))}
                onClick={onClick}
            >
                {children}
            </p>
        )
    }


StylizedText.displayName = 'StylizedText';

export default StylizedText;
