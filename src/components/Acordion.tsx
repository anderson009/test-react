import React, { Children, useState } from 'react'

type AcordionProps = {
    title: string;
    children: React.ReactNode;
}

const Acordion = ({title, children}: AcordionProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
        <h3>{title}</h3>
        <button onClick={() => setOpen(!open)}>{open ? 'close' : 'open'}</button>
       {open &&  <div>{children}</div>}
    </div>
  )
}

export default Acordion