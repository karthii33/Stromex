export class WaterRippleEffect {
    constructor(element) {
        this.element = element;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
        
        this.canvas.className = 'water-canvas';
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '1'; // Behind text but above background
        this.canvas.style.borderRadius = 'inherit';
        
        // Ensure element can contain absolute canvas
        if (getComputedStyle(this.element).position === 'static') {
            this.element.style.position = 'relative';
        }
        this.element.style.overflow = 'hidden';
        
        this.element.appendChild(this.canvas);
        
        // Performance scale (lower = faster, larger pixels)
        this.scale = 0.3; 
        this.width = 0;
        this.height = 0;
        
        this.buffer1 = [];
        this.buffer2 = [];
        this.damping = 0.95; // Controls how long ripples last
        
        this.isHovering = false;
        this.isAnimating = false;
        
        // Bind events
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        
        this.element.addEventListener('mousemove', this.onMouseMove);
        this.element.addEventListener('mouseenter', this.onMouseEnter);
        this.element.addEventListener('mouseleave', this.onMouseLeave);
        this.element.addEventListener('mousedown', this.onMouseDown);
        
        // Resize observer
        this.resizeObserver = new ResizeObserver(() => this.resize());
        this.resizeObserver.observe(this.element);
        
        this.resize();
    }
    
    resize() {
        const rect = this.element.getBoundingClientRect();
        this.width = Math.floor(rect.width * this.scale);
        this.height = Math.floor(rect.height * this.scale);
        
        // Minimum size to prevent errors
        if (this.width < 1) this.width = 1;
        if (this.height < 1) this.height = 1;
        
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        
        const size = this.width * this.height;
        this.buffer1 = new Float32Array(size);
        this.buffer2 = new Float32Array(size);
        this.imgData = this.ctx.createImageData(this.width, this.height);
    }
    
    disturb(x, y, radius, force) {
        // Map screen space to canvas space
        const cx = Math.floor(x * this.scale);
        const cy = Math.floor(y * this.scale);
        
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                const px = cx + dx;
                const py = cy + dy;
                
                if (px > 0 && px < this.width - 1 && py > 0 && py < this.height - 1) {
                    // Circular drop
                    if (dx * dx + dy * dy < radius * radius) {
                        this.buffer1[py * this.width + px] += force;
                    }
                }
            }
        }
        
        if (!this.isAnimating) {
            this.isAnimating = true;
            this.animate();
        }
    }
    
    onMouseMove(e) {
        const rect = this.element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Constant small ripples while moving
        this.disturb(x, y, 2, 80); 
    }
    
    onMouseEnter(e) {
        this.isHovering = true;
        const rect = this.element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        this.disturb(x, y, 4, 300); // Initial entry ripple
    }
    
    onMouseLeave(e) {
        this.isHovering = false;
        const rect = this.element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        this.disturb(x, y, 3, 200); // Exit ripple
    }
    
    onMouseDown(e) {
        const rect = this.element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        this.disturb(x, y, 8, -800); // Big negative splash impact
    }
    
    animate() {
        if (!this.isAnimating) return;
        
        let hasActiveWaves = false;
        const size = this.width * this.height;
        const data = this.imgData.data;
        
        // Calculate physics
        for (let i = this.width; i < size - this.width; i++) {
            if (i % this.width === 0 || i % this.width === this.width - 1) continue;
            
            this.buffer2[i] = (
                this.buffer1[i - 1] + 
                this.buffer1[i + 1] + 
                this.buffer1[i - this.width] + 
                this.buffer1[i + this.width]
            ) / 2 - this.buffer2[i];
            
            this.buffer2[i] *= this.damping;
            
            if (Math.abs(this.buffer2[i]) > 0.5) hasActiveWaves = true;
        }
        
        // Render to ImageData
        let p = 0;
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let val = this.buffer2[p];
                let idx = p * 4;
                
                if (Math.abs(val) < 0.1) {
                    // Empty space optimization
                    data[idx+3] = 0;
                } else {
                    // Calculate slope for lighting
                    let slopeX = 0;
                    let slopeY = 0;
                    if (x > 0 && x < this.width - 1 && y > 0 && y < this.height - 1) {
                        slopeX = this.buffer2[p+1] - this.buffer2[p-1];
                        slopeY = this.buffer2[p+this.width] - this.buffer2[p-this.width];
                    }
                    
                    // Lighting calculation (fake specular highlight and refraction)
                    let highlight = Math.max(0, slopeX * 1.5 + slopeY * 1.5);
                    let shadow = Math.max(0, -slopeX * 1.0 - slopeY * 1.0);
                    
                    if (highlight > 0) {
                        data[idx] = 255;   // R
                        data[idx+1] = 255; // G
                        data[idx+2] = 255; // B
                        data[idx+3] = Math.min(255, highlight * 6); // Alpha
                    } else if (shadow > 0) {
                        data[idx] = 10;    // R
                        data[idx+1] = 40;  // G
                        data[idx+2] = 90;  // B
                        data[idx+3] = Math.min(255, shadow * 4); // Alpha
                    } else {
                        data[idx] = 255;
                        data[idx+1] = 255;
                        data[idx+2] = 255;
                        data[idx+3] = Math.min(255, Math.abs(val));
                    }
                }
                p++;
            }
        }
        
        this.ctx.putImageData(this.imgData, 0, 0);
        
        // Swap buffers
        let temp = this.buffer1;
        this.buffer1 = this.buffer2;
        this.buffer2 = temp;
        
        if (hasActiveWaves || this.isHovering) {
            requestAnimationFrame(() => this.animate());
        } else {
            // Settle down
            this.isAnimating = false;
            this.ctx.clearRect(0, 0, this.width, this.height);
        }
    }
    
    destroy() {
        this.element.removeEventListener('mousemove', this.onMouseMove);
        this.element.removeEventListener('mouseenter', this.onMouseEnter);
        this.element.removeEventListener('mouseleave', this.onMouseLeave);
        this.element.removeEventListener('mousedown', this.onMouseDown);
        this.resizeObserver.disconnect();
        if (this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}
