import React from 'react'
import './index.scss'

export const Snow: React.FC = () => {
  let snowSize = []
  for (let i = 0; i < 200; i++) {
    snowSize.push(i)
  }

  const snowRender = snowSize.map(item => (
    <div key={item} className="snow"></div>
  ))

  return <div className="snow-container">{snowRender}</div>
}
