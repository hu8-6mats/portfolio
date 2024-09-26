// app/top/page.tsx
import React from 'react';
import SphereCanvas from '/Users/manakanon/Work/portfolio/frontend/src/components/visuals/SphereCanvas.tsx'; 

export default function TopPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <SphereCanvas 
      elementType="Dot"  // 'Dot' または 'Hexagon' を指定
      elementQuantity={100}  // 数字で要素の数を指定
      areElementsRandomized={true}  // ランダム化をオンにするかどうか
      primaryDelay={500}  // 遅延をミリ秒単位で指定
      cameraPosition={[0, 0, 5]}  // カメラの位置を指定
      cameraFOV={75}  // カメラの視野角 (Field of View)
      lightIntensity={1.5}  // ライトの強さ
      lightPosition={[10, 10, 10]}  // ライトの位置
      />
    </div>
  );
}
