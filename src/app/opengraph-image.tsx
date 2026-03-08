import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';
export const alt = 'VAILIS | AI Execution Partner';
export const size = { width: 2400, height: 1260 };
export const contentType = 'image/png';

async function loadFont(
  family: string,
  weight: number,
  text: string
): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);
  if (!match) throw new Error(`Failed to load font ${family}`);
  const res = await fetch(match[1]);
  if (res.status !== 200) throw new Error(`Font fetch failed: ${res.status}`);
  return res.arrayBuffer();
}

export default async function Image() {
  const text = 'VAILIS AI Execution PartnerV';
  const [fontRegular, fontBold] = await Promise.all([
    loadFont('Inter', 400, text),
    loadFont('Inter', 700, text),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1A1A2E',
          fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'white',
              border: '16px solid #374151',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: 168, fontWeight: 700, color: '#374151' }}>V</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span style={{ fontSize: 128, fontWeight: 700, color: 'white' }}>VAILIS</span>
            <span style={{ fontSize: 56, fontWeight: 400, color: 'rgba(255,255,255,0.8)' }}>AI Execution Partner</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Inter', data: fontRegular, weight: 400, style: 'normal' },
        { name: 'Inter', data: fontBold, weight: 700, style: 'normal' },
      ],
    }
  );
}
