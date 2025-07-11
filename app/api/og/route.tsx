import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.

export async function GET() {
    const username = 'nivas7';
    if (!username) {
        return new ImageResponse(<>Visit with &quot;?username=vercel&quot;</>, {
            width: 1200,
            height: 630,
        });
    }

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    fontSize: 60,
                    color: 'black',
                    background: '#f6f6f6',
                    width: '100%',
                    height: '100%',
                    paddingTop: 50,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    width="256"
                    height="256"
                    src={`https://github.com/${username}.png`}
                    style={{
                        borderRadius: 128,
                    }}
                />
                <p>github.com/{username}</p>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}