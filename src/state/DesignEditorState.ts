import { atom } from 'jotai'

export const htmlState = atom<string>(`
 <!doctype html>
<html>
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[${colorHexCode}]">

<div class="flex flex-col justify-start  min-h-screen w-full gap-[${gap}px] items-center flex-1">
  <h1 class="text-4xl md:text-6xl font-normal bg-[#d0f7b0] underline">
    Edit Your Template!
  </h1>
  <h3 class="text-3xl font-light bg-[#f0f0a0]">
    Click On Any Of These Blocks
  </h3>
  ${paragraph_one}
  </div>
</body>
</html>
`)

export const bodyState = atom<string>(`<body>
</body>`) 

