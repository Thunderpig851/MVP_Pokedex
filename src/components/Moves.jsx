import React, { Fragment, useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from '@material-tailwind/react'

const Moves = ({ moves }) => {
  const [open, setOpen] = useState(0)

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }

  return (
    <Fragment>
      <Accordion open={open === 1} onClick={() => handleOpen(1)}>
        <AccordionHeader>Moves</AccordionHeader>
        {moves.map((move, index) => <AccordionBody key={index}>
          <div>
            <p>Move Name: {move.name}</p>
            <p>Learned Through: {move.learn_method}</p>
            <p>Learn at level: {move.learned_at}</p>
          </div>
        </AccordionBody>)}
      </Accordion>
    </Fragment>
  )
}

export default Moves
