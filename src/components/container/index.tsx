import "./index.scss"
import React from "react";

interface ContainerProps {
  children: JSX.Element
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return <div className="container">
    {children}
  </div>
}

export default Container