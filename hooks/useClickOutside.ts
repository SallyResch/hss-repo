import { useEffect } from "react";

type elementType = React.RefObject<HTMLElement | null>;

export function useClickOutside(
    ref:elementType,
    callback: ()=> void
){
    useEffect(()=>{
        function handleClick(event: MouseEvent){
            if(
                ref.current &&
                !ref.current.contains(event.target as Node)
            ){
                callback();
            }
        }

        document.addEventListener("mousedown", handleClick);

        return()=>{
            document.removeEventListener(
                "mousedown", handleClick
            );
        };
    }, [ref,callback]);
}