import React from 'react'

const SingleColor = ({ index, color }) => {

  const { hex, weight } = color;

  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success('Copied to clipboard');
      } catch (error) {
        toast.error('Cannot copy to clipboard');
      }
    } else {
      toast.error('Could not copy');
    }
  }

  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={saveToClipBoard}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  )
}

export default SingleColor