const utils = (ref, state) => {
  if(state) {
    const playPromise = ref.current.play();

    if(state !== undefined) {
      playPromise.then(audio => {
        ref.current.play()
      })
    }
  }
}

export default utils;