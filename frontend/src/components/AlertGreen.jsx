import React from 'react'

const AlertGreen = ({text}) => {
  return (
    <div>
        <div id="alert-2" class="flex items-center p-4 mb-4 mt-2 top-[450px] border-s-4 border-green-500 lg:w-[20%] text-green-800 rounded bg-green-50  dark:text-green-600 animate-fade animate-once animate-duration-[2500ms] animate-ease-linear animate-reverse animate-fill-forwards absolute lg:top-0 lg:left-0 z-10" role="alert">
  <span class="sr-only">Info</span>
  <div class="ms-3 text-sm font-medium capitalize">
    {text}
  </div>
</div>
    </div>
  )
}

export default AlertGreen