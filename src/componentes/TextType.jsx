"use client";

import { useEffect, useRef, useState, createElement } from "react";
import { gsap } from "gsap";
import "@/estilos/TextType.css";

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef(null);
  const containerRef = useRef(null);

  const textArray = Array.isArray(text) ? text : [text];

  const getRandomSpeed = () => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  };

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return "#ffffff";
    return textColors[currentTextIndex % textColors.length];
  };

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setIsVisible(true)),
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout;
    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode
      ? currentText.split("").reverse().join("")
      : currentText;

    const tick = () => {
      if (isDeleting) {
        // 🔧 Caso especial: queda 1 carácter -> en el MISMO frame cambiamos al siguiente texto
        if (displayedText.length === 1) {
          const nextIndex =
            currentTextIndex === textArray.length - 1 ? 0 : currentTextIndex + 1;

          const rawNext = textArray[nextIndex];
          const nextProcessed = reverseMode
            ? rawNext.split("").reverse().join("")
            : rawNext;

          onSentenceComplete?.(textArray[currentTextIndex], currentTextIndex);

          // Swap “sin hueco”: primer carácter del siguiente texto inmediatamente
          setIsDeleting(false);
          setCurrentTextIndex(nextIndex);
          setCurrentCharIndex(1);
          setDisplayedText(nextProcessed[0] ?? "");

          // Continuamos tipeando el resto sin dejar el span vacío
          timeout = setTimeout(tick, variableSpeed ? getRandomSpeed() : typingSpeed);
          return;
        }

        // Borrado normal (aún hay >1 caracteres)
        if (displayedText.length > 1) {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        } else {
          // Si llegamos aquí es que había 0 (raro con el caso anterior, pero lo dejamos por seguridad)
          setIsDeleting(false);
        }
      } else {
        // Escribiendo
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + processedText[currentCharIndex]);
            setCurrentCharIndex((prev) => prev + 1);
          }, variableSpeed ? getRandomSpeed() : typingSpeed);
        } else {
          // Pausa con texto completo visible, luego borrar (si hay más o si loop)
          if (textArray.length > 1 || loop) {
            timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
      timeout = setTimeout(tick, initialDelay);
    } else {
      tick();
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < (textArray[currentTextIndex] || "").length || isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `text-type ${className}`,
      ...props,
    },
    <span
      className="text-type__content"
      style={{
        color: getCurrentTextColor(),
        display: "inline-block",
        minWidth: "1ch",
        // 👇 “Seguro” visual: nunca permitir fondo blanco del span
        backgroundColor: "transparent",
      }}
    >
      {displayedText || "\u00A0"}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={`text-type__cursor ${cursorClassName} ${
          shouldHideCursor ? "text-type__cursor--hidden" : ""
        }`}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;