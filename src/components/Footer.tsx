import React from 'react';
import { socials } from '../shared/data/social.data';

function Footer() {
  return (
    <footer className='w-full py-3 px-5 text-(--primary) bg-(--secondary) flex items-center justify-between'>
      <p className='font-mono font-bold text-[14px]'>© H.NEMATJONOV. BUILT FOR THE DEEP WEB.</p>
      <div className='flex items-center gap-4 text-(--primary)/80'>
        {socials.map((social) => (
          <a key={social.name} className='font-mono text-[14px] font-medium uppercase' href={social.url} target="_blank" rel="noopener noreferrer">
            {social.name}/
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer