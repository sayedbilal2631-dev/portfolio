import type { Metadata } from 'next';
import { ThemeProvider } from '@/theme/ThemeProvider';

const svgIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g transform="scale(1.1) translate(-1 -1)">
    <path fill="white" d="M8.7 16.7a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.4 1.4L5.41 12l3.3 3.3a1 1 0 0 1 0 1.4zm6.6-9.4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 1 1-1.4-1.4l3.3-3.3-3.3-3.3a1 1 0 0 1 0-1.4zM14.3 4.2a1 1 0 0 1 .7 1.2l-4 14a1 1 0 1 1-1.9-.6l4-14a1 1 0 0 1 1.2-.6z"/>
  </g>
</svg>
`;
export const metadata: Metadata = {
  title: 'Bilal Developer | Portfolio',
  description:
    'Web Developer Portfolio — Building responsive, fast and modern websites with clean code and great user experience.',
  icons: {
    icon: `data:image/svg+xml,${encodeURIComponent(svgIcon)}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>

      <body style={{ margin: 0 }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}