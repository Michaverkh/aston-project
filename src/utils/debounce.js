// import {useCallback, useRef} from "react";
//
// export function useDebounce(callback, delay) {
//     const timer = useRef(null);
//
//     const debouncedCallback = useCallback((...args) => {
//         if (timer.current) {
//             clearTimeout(timer.current)
//         }
//
//         timer.current = setTimeout(() => {
//             callback(...args)
//         }, delay)
//     }, [callback, delay])
//
//     return debouncedCallback;
// }




export const debounce = (func) => {
    let timer;
    return function (...args) {
        const context = this;
        if (timer) clearTimeout(timer)
        timer = setTimeout(
            () => {
               timer = null
               func.apply(context, args);
            }, 1000)
    }
}