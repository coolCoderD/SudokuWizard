import React from 'react'

const Alert = ({text}) => {
  return (
<div id="alert-2" class="flex items-center p-4 mb-4 mt-2 top-[450px] border-s-4 border-red-500 lg:w-[20%] text-red-800 rounded bg-red-50  dark:text-red-600 animate-fade animate-once animate-duration-[2500ms] animate-ease-linear animate-reverse animate-fill-forwards absolute lg:top-0 lg:left-0 z-10" role="alert">
  <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div class="ms-3 text-sm font-medium capitalize">
    {text}
  </div>
</div>
  )
}

export default Alert