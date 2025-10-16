import Drawer from '~/components/drawer';
import { CloseButton } from '~/components/drawer/button';
import type { StylableProp } from '~/models';
import TEXT from '~/TEXT.json';

export default function Skills({ className = '' }: StylableProp) {
  return (
    <Drawer id='skills' className='absolute w-full bottom-12'>
      <div
        className={`bg-white text-black rounded-b-xl shadow-2xl shadow-gray-800 p-4 w-11/12 mx-auto sm:max-w-96 sm:ml-auto sm:mr-5 ${className}`}
      >
        {TEXT.skills.map(({ level, name, period }) => (
          <div className='flex justify-end items-center p-2' key={name}>
            <span className='mr-auto flex-[0_0_45%]'>{name}</span>
            <span className='w-16'>{period}</span>
            <span className='w-24'>{level}</span>
          </div>
        ))}
        <CloseButton id='skills'>X</CloseButton>
      </div>
    </Drawer>
  );
}
