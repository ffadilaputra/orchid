import Wrapper from '@/components/Wrapper';
import AboutText from '@/prose/about.md';
import { NextSeo } from 'next-seo';

export default function About() {
  return (
    <Wrapper>
      <NextSeo title="About me" description="Here's some stuff about me" />
      <div className="prose">
        <AboutText />
      </div>
    </Wrapper>
  );
}

About.favicon = '😊';
