import "./heroBanner.css";
import RocketSvg from "../../assets/svg/rocket";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from "react";


const HeroBanner = () => {
    const heroRowDownloadLeft = useRef<HTMLElement>(null);

    useGSAP(() => {
        const textWidth = heroRowDownloadLeft.current!.offsetWidth;
        console.log(textWidth);

        gsap.to(heroRowDownloadLeft.current, {
            x: -textWidth,
            repeat: -1,
            duration: 25,
            ease: "none",
            onStart:() => {
                //duplicate the text
                const duplicateText = heroRowDownloadLeft.current!.cloneNode(true) as HTMLElement;
                heroRowDownloadLeft.current!.appendChild(duplicateText);
            },
            onUpdate: () => {
            }
        });
    });

    return(
        <div className="hero-banner">
            <nav className="hero-nav"></nav>
            <div className="hero-container">
                <div className="hero-row-download">
                    <div className="hero-row-download-left">
                        <span ref={heroRowDownloadLeft}>Multi-Instance • Smart Sync • Import & Export • Isolated Configs • Theme Customization • &nbsp;</span>
                    </div>
                    <button className="hero-row-download-button">
                        DownLoad 
                        <RocketSvg />
                    </button>
                </div>
                <div className="hero-row-content">
                    <div className="hero-row-content-left">
                        <h1>Vs Instance</h1>
                    </div>
                    <div className="hero-row-content-right">
                        <h1>Effortlessly manage multiple <br /> VSCode and Fork instances.</h1>
                        <p>Create isolated environments for each project. Customize, sync, <br /> and switch with total freedom.</p>
                        <button className="hero-row-content-right-button"><span>Features</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;


