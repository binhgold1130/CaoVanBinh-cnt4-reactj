import React, { createContext , useState} from 'react'
import CvbContext1 from './CvbContext1';

export const ThemeContext = createContext();// tạo ngữ cảnh 
export default function CvbContext() {
      // state
      const [theme,setTheme] = useState('red');
      // hàm thay đổi ng
      const cvbHandleChange = ( )=>{
          setTheme(theme=='red'?'blue':'red');
      }
  return (
    <ThemeContext.Provider value={theme}>
    <div>
      <h2>demo context </h2>
      <CvbContext1 />
      <button onClick={cvbHandleChange}>Change Bgcolor</button>
    </div>
    </ThemeContext.Provider>
  )
}