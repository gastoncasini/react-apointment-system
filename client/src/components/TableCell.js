import React from 'react';

export default function TableCell(props) {
  const isTaken = props.taken ? '--taken' : '';

  return <td className={`table__cell${isTaken}`}>{props.content}</td>;
}
