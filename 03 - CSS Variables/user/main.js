const inputs = document.querySelectorAll('.controls input');

// querySelectorAll gives a nodelist and it has limited methods vs an array which has filter, reduce, map, etc...
//
function handleUpdate() {
  // dataset is an object that has everything that has data- and puts it into an object for you
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));