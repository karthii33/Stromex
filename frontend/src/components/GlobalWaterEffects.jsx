import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { WaterRippleEffect } from '../utils/waterEffect';

export default function GlobalWaterEffects() {
    const { pathname } = useLocation();

    useEffect(() => {
        const effects = new Map();

        // Selectors for buttons we want to apply the effect to
        const selectors = [
            'button',
            'a.btn-solution-cta',
            'a.nav-cta-btn',
            '.hero-btn-primary',
            '.hero-btn-secondary',
            '.crm-btn'
        ].join(', ');

        const applyEffects = () => {
            const elements = document.querySelectorAll(selectors);
            elements.forEach(el => {
                // Don't apply if it already has the effect
                if (!el.dataset.hasWaterEffect) {
                    // Specific exclusions
                    if (el.classList.contains('crm-pagination-btn')) return;

                    el.dataset.hasWaterEffect = 'true';
                    // Ensure children have z-index so they appear above canvas
                    Array.from(el.children).forEach(child => {
                        if (child.tagName !== 'CANVAS') {
                            if (getComputedStyle(child).position === 'static') {
                                child.style.position = 'relative';
                            }
                            child.style.zIndex = '10';
                        }
                    });

                    // Add a span wrapper for text nodes if they exist directly
                    let hasDirectTextNode = false;
                    for (let i = 0; i < el.childNodes.length; i++) {
                        const node = el.childNodes[i];
                        if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
                            hasDirectTextNode = true;
                            break;
                        }
                    }

                    if (hasDirectTextNode) {
                        const wrapper = document.createElement('span');
                        wrapper.style.position = 'relative';
                        wrapper.style.zIndex = '10';
                        wrapper.style.pointerEvents = 'none'; // so it doesn't block hover
                        
                        // Move all current children (except canvas) into wrapper
                        while (el.firstChild) {
                            wrapper.appendChild(el.firstChild);
                        }
                        el.appendChild(wrapper);
                    }

                    const effect = new WaterRippleEffect(el);
                    effects.set(el, effect);
                }
            });
        };

        // Run on mount and path change
        // Use a short timeout to let React render the DOM first
        const timeoutId = setTimeout(applyEffects, 100);

        // Optional: MutationObserver to catch dynamically added buttons (like in CRM)
        const observer = new MutationObserver((mutations) => {
            let shouldCheck = false;
            for (let m of mutations) {
                if (m.addedNodes.length > 0) {
                    shouldCheck = true;
                    break;
                }
            }
            if (shouldCheck) applyEffects();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
            effects.forEach(effect => effect.destroy());
            effects.clear();
        };
    }, [pathname]);

    return null;
}
