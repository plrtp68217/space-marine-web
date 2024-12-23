(() => {
    let canvas = document.querySelector('#canvas') as HTMLCanvasElement;

    const resizeCanvas = (): void => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
})()