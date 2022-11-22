import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';

function ErrorModal({ error }) {
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (error) setIsOpen(true);
  }, [error]);

  return (
    <Dialog
      className='bg-black backdrop-blur-sm bg-opacity-30 fixed inset-0 flex justify-center items-center'
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}>
      <Dialog.Panel className='bg-white container mx-auto my-8 p-3 rounded-lg max-w-2xl w-[90%] flex flex-col gap-y-4'>
        <Dialog.Title className='font-bold'>{error?.title}</Dialog.Title>
        <Dialog.Description>{error?.message}</Dialog.Description>
        <button
          className='border px-2 py-1 rounded-md text-white font-medium bg-black'
          onClick={() => {
            setIsOpen(false);
          }}>
          Okay
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}

export default ErrorModal;
