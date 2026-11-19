import '../src/scss/app.style.scss';
import { App } from '@containers/App';

export const metadata = {
  title: 'Wasim Akram | Portfolio',
  description: 'Portfolio of Wasim Akram, Frontend Engineer.',
  icons: {
    icon: '/portfolio/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
