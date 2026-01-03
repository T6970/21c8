export const draw = {
  img (src,x,y) {
    src.onLoad = () => {
      screen.drawImage(src, x, y)
    }
  }
}