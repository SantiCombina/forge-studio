import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Forge Studio — Custom Software Development';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: '#0a0a0a',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        padding: '80px',
        fontFamily: 'serif',
      }}
    >
      {/* Accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: '#c9a96e',
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p
          style={{
            fontSize: '16px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#888',
            margin: 0,
            fontFamily: 'sans-serif',
          }}
        >
          Software Development Studio
        </p>
        <h1
          style={{
            fontSize: '72px',
            fontWeight: 800,
            color: '#f5f0e8',
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Forge<span style={{ color: '#c9a96e' }}>.</span>
        </h1>
        <p
          style={{
            fontSize: '26px',
            color: '#aaa',
            margin: 0,
            maxWidth: '700px',
            fontFamily: 'sans-serif',
            fontWeight: 400,
          }}
        >
          We build software that moves your business forward.
        </p>
      </div>
    </div>,
    { ...size },
  );
}
