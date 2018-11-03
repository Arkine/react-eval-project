import {TweenMax} from 'gsap'

export const fadeUp = (props) => {
  return {
    unmountOnExit: true,
    timeout: 1000,
    onEnter: node => TweenMax.set(node, { autoAlpha: 0, y: -50 }),
    addEndListener: (node, done) => {
      TweenMax.to(node, 0.5, {
        autoAlpha: props.mounted ? 1 : 0,
        y: props.mounted ? 0 : 50,
        onComplete: done
      })
    }
  }
}
