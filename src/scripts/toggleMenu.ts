interface SwipeActions {
  up?: Function
  right?: Function
  down?: Function
  left?: Function
}

function addSwipeListeners(element: HTMLElement | Document, onSwipeActions: SwipeActions) {
  let xDown: number | null = null
  let yDown: number | null = null

  function handleTouchStart(e: Event) {
    const touchEvent = e as TouchEvent
    const firstTouch = touchEvent.touches[0]
    xDown = firstTouch.clientX
    yDown = firstTouch.clientY
  }

  function handleTouchMove(e: Event) {
    const touchEvent = e as TouchEvent
    if (!xDown || !yDown) return

    const xUp = touchEvent.touches[0].clientX
    const yUp = touchEvent.touches[0].clientY

    const xDiff = xDown - xUp
    const yDiff = yDown - yUp

    // horizontal swipe
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      // right swipe
      if (xDiff > 0) {
        if (onSwipeActions.right) onSwipeActions.right()
      }

      // left swipe
      else {
        if (onSwipeActions.left) onSwipeActions.left()
      }
    }

    // vertical swipe
    else {
      // down swipe
      if (yDiff > 0) {
        if (onSwipeActions.down) onSwipeActions.down()
      }

      // up swipe
      else {
        if (onSwipeActions.up) onSwipeActions.up()
      }
    }

    xDown = null
    yDown = null
  }

  element.addEventListener("touchstart", handleTouchStart)
  element.addEventListener("touchmove", handleTouchMove)
}

function animateInSidebar() {
  sidebar.style.transform = "translateX(0)"
}

function animateOutSidebar() {
  sidebar.style.transform = "translateX(-100%)"
}

function animateSidebar() {
  const attr = "aria-expranded"
  const isSidebarOpen = sidebar.getAttribute(attr)

  if (isSidebarOpen === "true") {
    animateOutSidebar()
    sidebar.setAttribute(attr, "false")
  } else {
    animateInSidebar()
    sidebar.setAttribute(attr, "true")
  }
}

const toggleBtn = document.getElementById("mobile-sidebar-toggle-menu") as HTMLElement
const sidebar = document.querySelector(".sidebars") as HTMLElement

toggleBtn.addEventListener("click", () => animateSidebar())

addSwipeListeners(document, { left: animateInSidebar, right: animateOutSidebar })
