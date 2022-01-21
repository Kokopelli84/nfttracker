import React, { ReactNode } from 'react'

interface IProps {
  handleSubmit: React.FormEventHandler<HTMLFormElement>,
  children: ReactNode,
  title: string,
  titleColour?: string,
}

const Form = ({ handleSubmit, children, title, titleColour }: IProps) => (
    <div>
      <div className={`font-semibold mb-5 text-xl ${titleColour}`}>{title}</div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        {children}
      </form>
    </div>
  );

export default Form;
