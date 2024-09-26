// app/top/page.tsx
import React from 'react';
import SphereCanvas from '/Users/manakanon/Work/portfolio/frontend/src/components/visuals/SphereCanvas.tsx'; 

export default function TopPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <SphereCanvas />
    </div>
  );
}
