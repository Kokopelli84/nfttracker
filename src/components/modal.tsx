import React, { ReactNode } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { changeResponse, changeTxStatus } from '../state/actions';
import ClientOnlyPortal from './ClientOnlyPortal';

interface Iprops {
  show: boolean;
  cancel: () => void;
  children: ReactNode;
}

const Modal = ({ show, cancel, children }: Iprops) => {
  const dispatch = useDispatch();
  if (show) {
    return (
      <ClientOnlyPortal selector="#modal">
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-zinc-900 bg-opacity-50 w-full h-full"
          onClick={() => {
            cancel();
            dispatch(changeTxStatus(''));
            dispatch(changeResponse(''));
          }}
          onKeyDown={() => {
            cancel();
            dispatch(changeTxStatus(''));
            dispatch(changeResponse(''));
          }}
          role="button"
          tabIndex={0}
          aria-label="Idk"
        />
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col p-7 w-1/3 rounded-lg">
          <button
            className="text-right float-right self-end absolute top-0 right-1 text-xl"
            onClick={() => {
              cancel();
              dispatch(changeTxStatus(''));
              dispatch(changeResponse(''));
            }}
            type="button"
          >
            <FaTimes className="inline" />
          </button>
          {children}
        </div>
      </ClientOnlyPortal>
    );
  }
  return null;
};

export default Modal;
