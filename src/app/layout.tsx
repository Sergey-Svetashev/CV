import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Background from '~/views/background';
import Contacts from '~/views/contacts';
import Skills from '~/views/skills';
import SkillsButton from '~/views/skills/button';
import { TopDrawerContextProvider } from '~/views/skills/context';
import TEXT from '../TEXT.json';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${TEXT.main.name} ${TEXT.main.family} | Dev`,
  description: 'Portfolio Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' /* TODO: multi-lang */>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='font-sans overflow-x-hidden pb-[72px]'>
          <main className='items-center sm:items-start'>{children}</main>
          <div id='contacts' className='fixed top-0 left-full mt-2'>
            <Contacts />
          </div>
          <div id='skills' className='fixed top-0 left-0 w-full'>
            <TopDrawerContextProvider>
              <Skills />
              <SkillsButton />
            </TopDrawerContextProvider>
          </div>
          <div id='experience' className='fixed w-full top-full'>
            <Background title={TEXT.experience.title} experience={TEXT.experience.data} />
          </div>
        </div>
      </body>
    </html>
  );
}
