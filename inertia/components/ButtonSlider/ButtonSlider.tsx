import "./ButtonSlider.css";
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from '@gsap/react';
import { useRef } from "react";

const ButtonSlider = ({ mainText, slidingText }: { mainText: string, slidingText: string }) => {

    const text_to_slide = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const textWidth = text_to_slide.current!.offsetWidth;
        gsap.to(text_to_slide.current, {
            x: -textWidth,
            repeat: -1,
            duration: 25,
            ease: "none",
            onStart:() => {
                //duplicate the text
                const duplicateText = text_to_slide.current!.innerText;
                for (let i = 0; i < 10; i++) {
                    text_to_slide.current!.innerHTML += duplicateText;
                }
            },
            onUpdate: () => {
            }
        });
    })
    return(
        <button className="button-slider">
            <div className="button-slider-main-text">
                <span>{mainText}</span>
            </div>
            <div className="button-slider-sliding-text-container">
                <div className="button-slider-sliding-text">
                    <span ref={text_to_slide}>{slidingText}</span>
                </div>
            </div>
        </button>
    )
}

export default ButtonSlider;