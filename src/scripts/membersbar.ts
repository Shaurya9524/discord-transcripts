const membersBarToggleBtn = document.getElementById("chat-head-members-icon") as HTMLElement
const membersBar = document.querySelector(".membersbar") as HTMLElement
const defaultAvatarURL = "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg"
const defaultColor = "rgb(255, 255, 255)"

membersBarToggleBtn.addEventListener("click", () => {
  const attr = "aria-expanded"
  const styles = membersBar.style
  const isOpen = membersBarToggleBtn.getAttribute(attr) === "true"

  if (isOpen) {
    membersBarToggleBtn.setAttribute(attr, "false")
    styles.display = "none"
  } else {
    membersBarToggleBtn.setAttribute(attr, "true")
    styles.display = "flex"
  }
})

const uniqueMembers: { username: string, usernameColor?: string, avatarSrc: string, tag?: Node }[] = []

Array.from(document.querySelectorAll(".message")).forEach(el => {
  const children = el.childNodes
  const avatarHolder = children[0]
  const avatar = avatarHolder.childNodes[0]
  // @ts-ignore
  const avatarSrc = avatar.currentSrc as string

  const messageContents = children[1]
  const messageHead = messageContents.childNodes[0]

  const usernameDiv = messageHead.childNodes[0] as HTMLElement
  const username = usernameDiv.textContent as string
  const usernameDivColor = usernameDiv.style.color
  const usernameColor = usernameDivColor !== defaultColor ? usernameDivColor : undefined

  const existingUsernames = uniqueMembers.map(member => member.username)

  const tagWrapper = messageHead.childNodes[1] as HTMLElement
  const tag = tagWrapper.classList && tagWrapper.classList.contains("message-bot-tag-wrapper") ? tagWrapper.cloneNode(true) : undefined

  if (!existingUsernames.includes(username)) {
    uniqueMembers.push({ username, usernameColor, avatarSrc, tag })
  }
})

function MemberData({ username, usernameColor, avatarSrc, tag }: { username: string, usernameColor?: string, avatarSrc: string, tag?: Node }) {
  const memberDataDiv = document.createElement("div")
  memberDataDiv.classList.add("membersbar-member")

  const avatarHolder = document.createElement("div")
  avatarHolder.classList.add("membersbar-member-avatar-holder")

  const avatar = document.createElement("img")
  avatar.classList.add("membersbar-member-avatar")
  avatar.src = avatarSrc
  if (avatarSrc === defaultAvatarURL) {
    avatar.style.padding = "5px"
  }
  avatarHolder.appendChild(avatar)
  memberDataDiv.appendChild(avatarHolder)

  const usernameDiv = document.createElement("div")
  if (usernameColor) {
    usernameDiv.style.color = usernameColor
  }
  usernameDiv.classList.add("membersbar-member-username")
  usernameDiv.textContent = username
  memberDataDiv.append(usernameDiv)

  if (tag) {
    memberDataDiv.appendChild(tag)
  }

  return memberDataDiv
}

for (const member of uniqueMembers) {
  membersBar.appendChild(MemberData(member))
}
