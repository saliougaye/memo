import { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useClickOutside } from "../utils/hooks";

export interface ColorInputProps {
    color: string;
    onChange: (color: string) => void
}



export const ColorInput = (props: ColorInputProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const close = useCallback(() => setIsOpen(false), [])
    const popover = useRef<any>();

    useClickOutside(popover, close);

    return (
        <div className="relative">
            <div 
                style={{ 
                    background: props.color, 
                    boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(0, 0, 0, 0.1)' 
                }}
                className="
                    w-6 
                    h-6 
                    rounded-md 
                    border-2 
                    border-white 
                    cursor-pointer
                "
                onClick={() => setIsOpen(true)}
            />
            {
                isOpen && (
                    <div 
                        ref={popover}
                        className='
                            absolute
                            right-0
                            rounded-lg
                            z-30
                        '
                        style={{
                            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                            top: 'calc(100% + 2px)'
                        }}
                    >
                        <HexColorPicker color={props.color} onChange={props.onChange} />
                    </div>
                )
            }
        </div>
    );
}