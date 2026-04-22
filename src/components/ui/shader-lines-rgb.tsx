import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * WebGL shader background — streaming line field tinted to the
 * site's holographic palette (purple → orange → pink → blue).
 */
export function ShaderLinesRGB({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);

    const uniforms = {
      u_time: { value: 1.0 },
      u_resolution: { value: new THREE.Vector2(1, 1) },
    };

    const setSize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      renderer.setSize(w, h, false);
      uniforms.u_resolution.value.set(w, h);
    };

    const vertex = `
      void main(){ gl_Position = vec4(position, 1.0); }
    `;

    // Original RGB lines, then tinted to holo palette.
    // Tints: purple #C084FC, orange #FB923C, pink #F472B6, blue #60A5FA
    const fragment = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;

      float random(in float x){ return fract(sin(x)*1e4); }

      void main(void){
        vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);

        vec2 fMosaicScal = vec2(4.0, 2.0);
        vec2 vScreenSize = vec2(256.0, 256.0);
        uv.x = floor(uv.x * vScreenSize.x / fMosaicScal.x) / (vScreenSize.x / fMosaicScal.x);
        uv.y = floor(uv.y * vScreenSize.y / fMosaicScal.y) / (vScreenSize.y / fMosaicScal.y);

        float t = u_time * 0.06 + random(uv.x) * 0.4;
        float lineWidth = 0.0008;

        vec3 raw = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i = 0; i < 5; i++){
            raw[j] += lineWidth * float(i*i) /
              abs(fract(t - 0.01*float(j) + float(i)*0.01) * 1.0 - length(uv));
          }
        }

        // Holographic palette tints
        vec3 purple = vec3(0.753, 0.518, 0.988); // #C084FC
        vec3 orange = vec3(0.984, 0.573, 0.235); // #FB923C
        vec3 pink   = vec3(0.957, 0.447, 0.714); // #F472B6
        vec3 blue   = vec3(0.376, 0.647, 0.980); // #60A5FA

        // raw.r, raw.g, raw.b each drive a tinted contribution; mix in a 4th hue via time
        float w = 0.5 + 0.5 * sin(u_time * 0.15);
        vec3 hueA = mix(purple, blue, w);
        vec3 hueB = mix(orange, pink, w);

        vec3 col =
            raw.r * hueA
          + raw.g * pink
          + raw.b * hueB;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
    });
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    container.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";

    setSize();
    const ro = new ResizeObserver(setSize);
    ro.observe(container);

    let raf = 0;
    const start = performance.now();
    const tick = () => {
      uniforms.u_time.value = (performance.now() - start) / 1000;
      renderer.render(scene, camera);
      if (!reduce) raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className={`absolute inset-0 ${className}`} aria-hidden />;
}
