import React, { useRef, useLayoutEffect } from 'react';
import NativeChessdrill from 'chessdrill';

export default function Chessdrill() {
  
  const element = useRef(null);

  useLayoutEffect(() => {
    const opts = { mode: 'play', lines: ['1. e4 e5 2. Nf3 Nc6'] };
    const drill = new NativeChessdrill(element.current, opts);
    drill.redraw();
    return () => {
      drill.destroy();
    };
  }, []);

  return (
    <div ref={element} />
  );
}
