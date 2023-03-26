import { atom } from 'jotai'

// dimport { atom } from 'jotai'

export const head = atom<string>(`
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
`)
const gap: number = 20
export const body = atom<string>(`
<body class="w-full h-full flex flex-col gap-[${gap}px] items-center">
<nav class="flex flex-row max-w-screen-lg w-full my-4 justify-between items-center">
  <ul class="p-2 ">
      <li>
          <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM24.0012 11.2C20.5249 11.2 20.0886 11.2152 18.7233 11.2773C17.3606 11.3397 16.4305 11.5555 15.6166 11.872C14.7747 12.1989 14.0606 12.6363 13.3491 13.348C12.6371 14.0595 12.1997 14.7736 11.8717 15.6152C11.5544 16.4294 11.3384 17.3598 11.2771 18.7219C11.216 20.0873 11.2 20.5238 11.2 24.0001C11.2 27.4764 11.2155 27.9114 11.2773 29.2767C11.34 30.6394 11.5557 31.5695 11.872 32.3834C12.1992 33.2253 12.6365 33.9394 13.3483 34.6509C14.0595 35.3629 14.7736 35.8013 15.615 36.1283C16.4294 36.4448 17.3598 36.6605 18.7222 36.7229C20.0876 36.7851 20.5236 36.8003 23.9996 36.8003C27.4762 36.8003 27.9111 36.7851 29.2765 36.7229C30.6391 36.6605 31.5703 36.4448 32.3848 36.1283C33.2264 35.8013 33.9394 35.3629 34.6506 34.6509C35.3626 33.9394 35.8 33.2253 36.128 32.3837C36.4427 31.5695 36.6587 30.6391 36.7227 29.277C36.784 27.9116 36.8 27.4764 36.8 24.0001C36.8 20.5238 36.784 20.0876 36.7227 18.7222C36.6587 17.3595 36.4427 16.4294 36.128 15.6155C35.8 14.7736 35.3626 14.0595 34.6506 13.348C33.9386 12.636 33.2266 12.1987 32.384 11.872C31.5679 11.5555 30.6373 11.3397 29.2746 11.2773C27.9092 11.2152 27.4746 11.2 23.9972 11.2H24.0012Z"
                  fill="black" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M22.8529 13.5067C23.1937 13.5062 23.574 13.5067 24.0012 13.5067C27.4188 13.5067 27.8239 13.519 29.1735 13.5803C30.4215 13.6374 31.0989 13.8459 31.5501 14.0211C32.1474 14.2531 32.5733 14.5304 33.021 14.9784C33.469 15.4264 33.7464 15.8531 33.9789 16.4505C34.1541 16.9011 34.3629 17.5785 34.4197 18.8265C34.481 20.1758 34.4944 20.5812 34.4944 23.9972C34.4944 27.4132 34.481 27.8186 34.4197 29.1679C34.3626 30.4159 34.1541 31.0933 33.9789 31.5439C33.7469 32.1413 33.469 32.5666 33.021 33.0144C32.573 33.4624 32.1477 33.7397 31.5501 33.9717C31.0994 34.1477 30.4215 34.3557 29.1735 34.4128C27.8242 34.4741 27.4188 34.4874 24.0012 34.4874C20.5833 34.4874 20.1782 34.4741 18.8289 34.4128C17.5809 34.3552 16.9035 34.1466 16.4521 33.9714C15.8547 33.7394 15.428 33.4621 14.98 33.0141C14.532 32.5661 14.2547 32.1405 14.0222 31.5429C13.847 31.0922 13.6382 30.4149 13.5814 29.1669C13.52 27.8175 13.5078 27.4122 13.5078 23.994C13.5078 20.5758 13.52 20.1726 13.5814 18.8233C13.6384 17.5753 13.847 16.8979 14.0222 16.4467C14.2542 15.8494 14.532 15.4227 14.98 14.9747C15.428 14.5267 15.8547 14.2494 16.4521 14.0168C16.9033 13.8408 17.5809 13.6328 18.8289 13.5755C20.0097 13.5222 20.4673 13.5062 22.8529 13.5035V13.5067ZM30.8338 15.632C29.9858 15.632 29.2978 16.3193 29.2978 17.1675C29.2978 18.0155 29.9858 18.7035 30.8338 18.7035C31.6818 18.7035 32.3698 18.0155 32.3698 17.1675C32.3698 16.3195 31.6818 15.632 30.8338 15.632ZM24.0012 17.4267C20.371 17.4267 17.4278 20.37 17.4278 24.0001C17.4278 27.6303 20.371 30.5722 24.0012 30.5722C27.6314 30.5722 30.5735 27.6303 30.5735 24.0001C30.5735 20.37 27.6314 17.4267 24.0012 17.4267Z"
                  fill="black" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M24.0012 19.7334C26.3575 19.7334 28.2679 21.6436 28.2679 24.0001C28.2679 26.3564 26.3575 28.2668 24.0012 28.2668C21.6446 28.2668 19.7345 26.3564 19.7345 24.0001C19.7345 21.6436 21.6446 19.7334 24.0012 19.7334Z"
                  fill="black" />
          </svg>
      </li>
  </ul>
  <ul class="p-2">
      <li>
          <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM26.5016 38.1115V25.0542H30.1059L30.5836 20.5546H26.5016L26.5077 18.3025C26.5077 17.1289 26.6192 16.5001 28.3048 16.5001H30.5581V12H26.9532C22.6231 12 21.0991 14.1828 21.0991 17.8536V20.5551H18.4V25.0547H21.0991V38.1115H26.5016Z"
                  fill="black" />
          </svg>
      </li>
  </ul>
  <ul class="p-2 ">
      <li class="font-semibold">About</li>
  </ul>
  <ul class="p-2 ">
      <li class="font-semibold">Support</li>
  </ul>
</nav>
<div class="flex flex-col items-center my-2 max-w-screen-lg ">
  <div class="flex-1 flex justify-center items-center">
      <img class="border-4 border-black bg-white opacity-20" src="http://via.placeholder.com/720x468"
          alt="placeholder">
      <div class="absolute z-10 flex flex-col text-center md:text-start justify-center items-center gap-4">
          <h1 class="text-5xl md:text-7xl flex-1 font-semibold">Explore</h1>
          <h3 class="text-3xl md:text-4xl font-normal">All the offers while it lasts</h3>
          <p class="font-medium text-sm">if you cannot decide here are somethings we can do with our product:</p>
      </div>
  </div>
  <section class="flex  my-5 flex-col items-center justify-start">
    <div class="flex bg-black/25 flex-row py-2 px-3 items-center justify-between md:w-[50vw] w-[90vw] ">  
      <h3 class="text-xl font-black"> Offer Expires Soon</h3>
      <p class="text-lg  underline underline-offset-2">Start Making Blocks</p>
    </div>
    <div class="flex flex-row my-2 mx-3 text-start items-center justify-between md:w-[50vw] w-[90vw]">
      <p class="text-lg bg-black/10 px-2 py-1.5 ">Reach the Inbox not the spam folder</p>
      <p class="text-lg font-semibold bg-black text-white px-2 py-1.5">Create Great Email For Every Subscriber, EveryWhere</p>
    </div>
  </section>
</div>
<section class="flex  my-5 flex-col items-center justify-start">
    <div class="flex bg-black/25 flex-row py-2 px-3 items-center justify-between md:w-[50vw] w-[90vw] ">  
      <h3 class="text-xl font-black"> Offer Expires Soon</h3>
      <p class="text-lg  underline underline-offset-2">Start Making Blocks</p>
    </div>
    <div class="flex flex-row my-2 mx-3 text-start items-center justify-between md:w-[50vw] w-[90vw]">
      <p class="text-lg bg-black/10 px-2 py-1.5 ">Reach the Inbox not the spam folder</p>
      <p class="text-lg font-semibold bg-black text-white px-2 py-1.5">Create Great Email For Every Subscriber, EveryWhere</p>
    </div>
  </section>
</body>
</html>
`)
