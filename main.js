document.addEventListener("mousemove", parallax);
function parallax (e) {
  document.querySelectorAll(".object").forEach((move) => {
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;

    move.style.transform = `translate( ${x}px, ${y}px)`;
  });
};

const tween = KUTE.fromTo(
  '#blob1',
  { path: '#blob1'},
  { path: '#blob2'},
  { repeat: 999, duration: 3000, yoyo: true}
)

tween.start()