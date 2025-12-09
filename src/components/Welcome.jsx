import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const FONT_WEIGHT = {
    subtitle: {min: 100, max: 400, default: 100},
    title: {min: 400, max: 900, default: 400}
}

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i)=>(
        <span key={i} className={className} style={{fontVariationSettings: `"wght" ${baseWeight}`}}>
            {char == " " ? '\u00A0' : char}
        </span>
    ))
}

const setupTextHover = (container, type) => {
    if(!container) return;

    const letters = container.querySelectorAll("span");
    const {min, max, default: base} = FONT_WEIGHT[type];

    const animateletter = (letter, weight, duration = 0.25) => {
        // font-variation settings expect quoted axis: "wght" 400
        return gsap.to(letter, {duration, ease: 'power2.out', fontVariationSettings: `"wght" ${weight}`});
    }

    const handleMouseMove = (e) => {
        const {left} = container.getBoundingClientRect();
        const mousex = e.clientX-left;

        letters.forEach((letter)=>{
            const {left:l, width:w} = letter.getBoundingClientRect();
            const distance = Math.abs(mousex - (l - left + w/2));
            const intancity = Math.exp(-(distance ** 2) / 20000);

            animateletter(letter, min + (max - min) * intancity);
        })
    }
    const handleMouseLeave = () => {
        letters.forEach((letter)=>{
            animateletter(letter, base, 0.3);
        })} 

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseleave", handleMouseLeave)
    }
}

const Welcome = () => {

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(()=>{
        const subtitleCleanup = setupTextHover(subtitleRef.current, 'subtitle');
        const titleCleanup = setupTextHover(titleRef.current, 'title');
        return () => {
            subtitleCleanup();
            titleCleanup();
        };
    }, [])

  return (
    <section id="welcome">
        <p ref={subtitleRef}>{renderText("Hey, i'm Surya! Welcome to my", "text-3xl font-georama", 100)}</p>
        <h1 ref={titleRef} className='mt-7'>{renderText("Portfolio", "text-9xl italic font-georama", 400)}</h1>
    </section>
  )
}

export default Welcome