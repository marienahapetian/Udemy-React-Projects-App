import React, { useRef } from 'react'
import Input from '../components/Input';
import Modal from './Modal';

export default function NewProject({onAdd}) {
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();
  const modal = useRef();

  function handleSubmit(){
    const title = titleRef.current.value;
    const desc = descRef.current.value;
    const date = dateRef.current.value;

    if(title.trim() === '' || desc.trim() === '' || date.trim() === ''){
      modal.current.open();
      return;
    }


    onAdd({title, desc, date})
  }

  return (
    <>
    <Modal ref={modal}/>
    <div className='w-[35rem]'>
        <menu className='flex items-center justify-end gap-4 my-4' >
            <li><button className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
            <li><button className='bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md' onClick={handleSubmit}>Save</button></li>
        </menu>
        <div>
            <Input label="Title" ref={titleRef} type="text"/>
            <Input label="Description" isTextarea={true}  ref={descRef}/>
            <Input label="Due Date" ref={dateRef} type="date"/>
        </div>
    </div>
    </>
  )
}
