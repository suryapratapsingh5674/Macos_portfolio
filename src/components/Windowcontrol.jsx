import useWindowStore from "#store/window"

const Windowcontrol = ({target}) => {
    const {closeWindow, minimizeWindow, toggleMaximizeWindow, focusWindow} = useWindowStore();

    const handleMinimize = () => {
        minimizeWindow(target);
    };

    const handleMaximize = () => {
        toggleMaximizeWindow(target);
    };

    return (
      <div id="window-controls" onPointerDown={()=> focusWindow(target)}>
          <div className="close" onClick={()=>closeWindow(target)}/>
          <div className="minimize" onClick={handleMinimize}/>
          <div className="maximize" onClick={handleMaximize}/>
      </div>
    )
  }

export default Windowcontrol