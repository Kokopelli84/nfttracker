import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const ContentWrapper = ({ children }: IProps) => (
  <div className="flex justify-center items-center h-full">
    <div className="w-1/3 bg-transparent  border-2 border-gray-500 p-5 rounded-lg">{children}</div>
  </div>
);

export default ContentWrapper;
