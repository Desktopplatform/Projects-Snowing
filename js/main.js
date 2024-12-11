const createSnow = () => {
            const snowflake = document.createElement('div');
            snowflake.setAttribute('class','snowflake');
            snowflake.innerHTML = '❄';
            snowflake.style.left = Math.random() * window.innerWidth + 'px';
            snowflake.style.fontSize = Math.random() * 20 + 30 + 'px'; // Random size
            snowflake.style.position='absolute';
            snowflake.style.color='#ffffff';
            snowflake.style.opacity='0.8';
            document.body.append(snowflake);

            // Animate the snowflake
            const fallDuration = Math.random() * 2 + 1; // Random fall duration
            snowflake.animate([
                { transform: 'translateY(0)' },
                { transform: `translateY(${window.innerHeight + 10}px)` }
            ], {
                duration: fallDuration * 1000,
                easing: 'linear',
                iterations: 1,
                fill: 'forwards'
            });
        };
        setInterval(createSnow, 200);