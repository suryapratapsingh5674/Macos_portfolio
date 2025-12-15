import { dockApps } from '#constants';
import { Tooltip } from 'react-tooltip';
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import useWindowStore from '#store/window.js';

const Doc = () => {

  const {openWindow, closeWindow, windows} = useWindowStore();

    const dockRef = useRef(null);

    useGSAP(() => {
      const dock = dockRef.current;
      if(!dock) return;

      const icons = dock.querySelectorAll(".dock-icon");
      const animateIcons = (mouseX) => {
        const {left} = dock.getBoundingClientRect();
        icons.forEach((icon) => {
          const {left: iconLeft, width} = icon.getBoundingClientRect();
          const center = iconLeft - left + width / 2;
          const distance = Math.abs(mouseX - center);
          const intancity = Math.exp(-(distance ** 2.5) / 20000);

          gsap.to(icon, {duration: 0.2, ease: 'power1.out', scale: 1 + 0.25 * intancity, y: -15 * intancity});
        });
      }

      const handleMouseMove = (e) => {
        const {left} = dock.getBoundingClientRect();

        animateIcons(e.clientX - left);
      }

      const reseticon = () => icons.forEach((icon) => gsap.to(icon, {duration: 0.3, ease: 'power1.out', scale: 1, y: 0}));

      dock.addEventListener('mousemove', handleMouseMove);
      dock.addEventListener('mouseleave', reseticon);

      return () => {
        dock.removeEventListener('mousemove', handleMouseMove);
        dock.removeEventListener('mouseleave', reseticon);
      }
    }, [])

    const toggleApp = (app) => {
      if(!app.canOpen) return;

      const win = windows[app.id];
      if(!win) return;

      // Restore if minimized, close if open, otherwise open fresh
      if (win.isOpen && win.isMinimized) {
        openWindow(app.id);
      } else if (win.isOpen) {
        closeWindow(app.id);
      } else {
        openWindow(app.id);
      }
    }

  return (
    <section id='dock' className='absolute bottom-5 left-1/2 -translate-x-1/2 z-50 select-none max-sm:hidden'>
        <div ref={dockRef} className='dock-container'>
            {dockApps.map(({id, name, icon, canOpen}) => {
              const win = windows[id];
              const isRunning = win?.isOpen;

              return (
                <div key={id} className='relatie flex justify-center'>
                  <button
                    type='button'
                    className='dock-icon relative'
                    aria-label={name}
                    data-tooltip-id="dock-tooltip"
                    data-tooltip-content={name}
                    data-tooltip-delay-show={150}
                    disabled={!canOpen}
                    onClick={()=>toggleApp({id, canOpen})}
                  >
                    <img src={`/images/${icon}`} alt={name} loading='lazy' className={canOpen? " " : "opacity-60"} />
                    {isRunning && <span className="dock-indicator" />}
                  </button>
                </div>
              );
            })}
            <Tooltip id='dock-tooltip' place='top' className='tooltip'/>
        </div>
    </section>
  )
}

export default Doc