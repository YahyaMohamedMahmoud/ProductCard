import {Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { ReactNode } from 'react';
interface IProps{
    title?: string;
    isOpen: boolean
    close: () => void;
    children?: ReactNode;
    description?: string
}

const Modal = ({close, isOpen , children , title , description}: IProps) => {
 

  return (
    <>
    
 <Dialog open={isOpen} as="div" className="relative z-50" onClose={close}>
  <div className="fixed inset-0 z-40 w-screen overflow-y-auto bg-black/50 backdrop-blur-xs ">
    <div className="flex min-h-full items-center justify-center p-4 z-50">
      <DialogPanel
        transition
        className="w-full max-w-md rounded-xl bg-white/90 p-6 backdrop-blur-lg duration-150 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
      >
        <DialogTitle as="h3" className="text-base/7 font-medium text-black mb-5">
          {title}
        </DialogTitle>
      {description && <DialogTitle as="p" className="text-base/7 font-normal text-black mb-5">
        {description}
      </DialogTitle>
      }

        {children}
        
      </DialogPanel>
    </div>
  </div>
</Dialog>


    </>
  )
}

export default Modal;