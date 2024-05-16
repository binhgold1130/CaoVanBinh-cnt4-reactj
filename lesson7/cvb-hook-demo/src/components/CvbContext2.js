import React, {useContext} from 'react'
import { ThemeContext} from './CvbContext'

export default function CvbContext2() {
    const theme = useContext(ThemeContext  )
  return (

    <div className = {theme } >
      <h2>CvbContext2 </h2>
      <p>
        <b>Cao Văn Bình</b>
        <b>2210900091</b>
        <b>K22CNT4</b>
      </p>
    </div>
  )
}
