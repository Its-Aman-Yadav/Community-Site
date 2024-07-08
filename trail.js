document.addEventListener('DOMContentLoaded', () => {
    const coords = { x: 0, y: 0 };
    const circles = [];
    const colors = [
        "#ff21bc", "#ff21bc", "#ff21bc", "#ff21bc", "#ff21bc", "#ff21bc", 
        "#ff21bc", "#ff21bc", "#3fbcc0c6", "#ff21bc", "#ff21bc", "#ff21bc", 
        "#3fbcc0c6", "#ff21bc", "#ff21bc", "#ff21bc", "#ff21bc", "#ff21bc", 
        "#ff21bc", "#ff21bc", "#ff21bc", "#ff21bc", "#ff21bc"
    ];

    for (let i = 0; i < colors.length; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.backgroundColor = colors[i];
        document.body.appendChild(circle);
        circles.push(circle);
    }

    window.addEventListener('mousemove', (e) => {
        coords.x = e.clientX;
        coords.y = e.clientY + window.scrollY; 
    });

    function animateCircles() {
        let x = coords.x;
        let y = coords.y;

        circles.forEach((circle, index) => {
            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;

            const maxSize = 28; 
            const minSize = 5; 
            const size = maxSize - (index * ((maxSize - minSize) / (circles.length - 1)));
            circle.style.width = `${size}px`;
            circle.style.height = `${size}px`;

            const nextCircle = circles[index + 1] || circles[0];
            x += (parseInt(nextCircle.style.left || 0, 10) - x) * 0.3;
            y += (parseInt(nextCircle.style.top || 0, 10) - y) * 0.3;
        });

        requestAnimationFrame(animateCircles);
    }

    animateCircles();
});
