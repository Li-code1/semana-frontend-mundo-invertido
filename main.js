const body = document.body;
  const audio = document.getElementById('music');

  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    body.setAttribute('aria-label', 'O site está utilizando o tema dark');
    audio.src = 'assets/musics/upside-down.mpeg';
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    body.setAttribute('aria-label', 'O site está utilizando o tema light');
    audio.src = 'assets/musics/normal-world.mpeg';
  }

</script>
  audio.play();