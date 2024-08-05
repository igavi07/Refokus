import React from 'react'

const HomeIntro = () => {
  return (
    <div className="flex items-end h-screen w-full pb-20">
        <div className="flex justify-between">
          <div className="w-[50%]">
            <h1 className="text-[7vw] leading-none font-semibold">
              WE <br />
              MAKE <br />
              COOL <br />
              WEBSITES
            </h1>
          </div>
          <div className="w-[30%] flex items-end">
            <p className="text-lg">Refokus is a forward-thinking web agency that combines Web Design, Webflow Development, and Creative Development to create cool websites that help brands position themselves as market leaders.</p>
          </div>
        </div>
      </div>
  )
}

export default HomeIntro