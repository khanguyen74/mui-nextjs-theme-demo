import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import { ThemeProviderWrapper } from '@/components';
import { Theme } from '@/components/ThemeProviderWrapper/ThemeProviderWrapper';
import { Container, CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJs MUI Theming Demo',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme: Theme = (cookieStore.get('theme')?.value as Theme) || 'default';

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProviderWrapper currentTheme={theme}>
            <CssBaseline />
            <InitColorSchemeScript attribute="class" />
            <Container
              maxWidth="lg"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {children}
            </Container>
          </ThemeProviderWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
