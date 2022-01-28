import { useEffect, useState } from "react";

export default function useHover(ref) {
    const [hovering, setHovering] = useState(false);

    const on = () => setHovering(true)
    const off = () => setHovering(false)
    
    useEffect(() => {
     if (!ref.current) {
         return
     }
     console.log(ref);
     const node = ref.current
     console.log(node);
     node.addEventListener('mouseenter', on)
     node.addEventListener('mousemove', on)
     node.addEventListener('mouseleave', off)

     return function() {
        node.removeEventListener('mouseenter', on)
        node.removeEventListener('mousemove', on)
        node.removeEventListener('mouseleave', off)
     }
    }, []);
    
console.log(hovering);
    return hovering
}