import React, { ReactNode } from 'react';
import ClientOnlyPortal from './ClientOnlyPortal';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { changeTxStatus, changeResponse } from '../state/actions';

interface ModalProps {
  show: boolean,
  cancel: () => void,
  children: ReactNode,
}

const Modal = ({ show, cancel, children }: ModalProps) => {
  const dispatch = useDispatch();
  if (show) {
    return (
      <>
        <ClientOnlyPortal selector="#modal">
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-zinc-900 bg-opacity-50 w-full h-full"
            onClick={() => {
              cancel();
              dispatch(changeTxStatus(''));
              dispatch(changeResponse(''));
            }}
          ></div>
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col p-7 w-1/3 rounded-lg">
            <button
              className="text-right float-right self-end absolute top-0 right-1 text-xl"
              onClick={() => {
                cancel();
                dispatch(changeTxStatus(''));
                dispatch(changeResponse(''));
              }}
            >
              <FaTimes className="inline" />
            </button>
            {children}
          </div>
        </ClientOnlyPortal>
      </>
    );
  } else {
    return null;
  }
};

export default Modal;
