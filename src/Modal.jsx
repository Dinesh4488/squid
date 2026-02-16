import React, { useEffect, useRef } from 'react';
import './Modal.css';

const FOCUSABLE_SELECTORS = 'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const Modal = ({ isOpen = false, onClose = () => {}, title, children, labelledBy }) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement;

    const content = contentRef.current;
    const focusable = content ? Array.from(content.querySelectorAll(FOCUSABLE_SELECTORS)) : [];

    // focus first focusable element or the content container
    if (focusable.length > 0) {
      focusable[0].focus();
    } else if (content) {
      content.tabIndex = -1;
      content.focus();
    }

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (!content) return;
        const nodes = Array.from(content.querySelectorAll(FOCUSABLE_SELECTORS));
        if (nodes.length === 0) {
          e.preventDefault();
          return;
        }
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }

    document.addEventListener('keydown', onKeyDown);

    // lock background scroll while modal is open
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused.current && previouslyFocused.current.focus) {
        previouslyFocused.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      ref={overlayRef}
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy || (title ? 'modal-title' : undefined)}
        ref={contentRef}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {title && (
          <h2 id={labelledBy || 'modal-title'} className="modal-title">
            {title}
          </h2>
        )}

        <div className="modal-body">{children}</div>

        <button className="modal-close" onClick={onClose} aria-label="Close dialog">
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;
