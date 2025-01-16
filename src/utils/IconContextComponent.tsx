import { IconContext } from "react-icons";

const IconContextComponent = ({ children }: { children: JSX.Element }) => {
  return (
    //prettier-ignore
    <IconContext.Provider value={{ style: { height: "100%", width: "100%", maxWidth: "25px", color: "black", marginLeft: "auto", marginRight: "auto" } }}>
        {children}
    </IconContext.Provider>
  );
};

export default IconContextComponent;
