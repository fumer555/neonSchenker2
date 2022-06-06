
console.log('about to fetch a rainbow');

catchRainbow()
  .then(response => {
    console.log('yay');
  })
  .catch(error => {
    console.log('error!');
    console.error(error);
  });

async function catchRainbow() {
  const response = await fetch('rainbow.png');
  const blob = await response.blob();
  document.getElementById('rainbow').src = URL.createObjectURL(blob);
}
