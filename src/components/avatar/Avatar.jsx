// Avatar.js
import React from 'react';

function Avatar({
  children,
  backgroundColor,
  px,
  py,
  borderRadius,
  color,
  cursor
}) {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || "black",
    borderRadius,
    textAlign: 'center',
    cursor
  };

  return (
    <div style={style}>
      {children} {/* Render children directly */}
    </div>
  );
}

export default Avatar;
