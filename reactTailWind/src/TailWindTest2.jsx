import React from 'react';

const TailWindTest2 = () => {
  return (
    <div>
      <div className='text-base text-red-500'>hello world</div>
      <div className='text-lg text-red-500'>hello world</div>
      <div className='text-2xl text-red-500'>hello world</div>
      <div className='text-2xl p-3 text-red-500'>hello world</div>
      <div className='text-2xl pt-3 text-red-500'>hello world</div>
      <br />
      <br />
      <br />

      <div className='text-2xl text-red-500'>hello world</div>
      <div className='text-2xl mt-3 mb-3 text-red-500'>hello world</div>
      <div className='text-2xl mt-3 text-red-500'>hello world</div>
      <br />
      <br />

      <div className='text-2xl text-red-500'>hello world</div>
      <div className='text-2xl my-3 text-red-500'>hello world</div>
      <div className='text-2xl text-red-500'>hello world</div>

      <div className='p-5'>
        <ul className='list-decimal'>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut consequuntur doloremque non quisquam dolor laudantium eius, quaerat inventore voluptates, deserunt quidem iure magni, soluta ipsam numquam illo minus? Similique, ducimus.</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
        </ul>
      </div>
      <div className='w-32 h-32 bg-red-400'></div>
      <br />
      <div className='w-32 h-32 bg-red-400 rounded'></div>
      <br />
      <div className='w-32 h-32 bg-red-400 rounded-2xl'></div>
      <br />
      <div className='w-32 h-32 bg-red-400 rounded-full'></div>
      <br />

      <div className='text-[17px]'>hello world</div>
      <div className='mt-[17px]'>hello world</div>
      <div className='bg-[#3b5998] text-white'>hello world</div>


    </div >
  );
};

export default TailWindTest2;