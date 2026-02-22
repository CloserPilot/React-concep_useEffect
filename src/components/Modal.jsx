import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children, onClose  }) {
  const dialog = useRef();

  //Solo se ejecuta si el estado de OPEN cambio, es decir
  //Si estaba en Open, el useEffect NO se vuelve a ejecutar, ya que sigue abierto
  //es solo hasta que se !open
  useEffect(()=>{
    if(open){
      dialog.current.showModal();
    }else{
      dialog.current.close();
    }
  },[open])

  //if (!open) return null

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
