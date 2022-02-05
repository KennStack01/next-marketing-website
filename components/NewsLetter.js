import React from 'react'
import { BiMailSend } from 'react-icons/bi'

const NewsLetter = () => {
  return (
    <div className="mx-auto my-6 md:my-8">
      <form
        className="flex flex-col"
        method="post"
        action={`https://getform.io/f/e2419428-661a-4a22-acb4-d246cf183899`}
      >
        <div className="mx-auto flex flex-col">
          <label
            className="mb-2 text-sm font-bold text-gray-800 md:text-lg"
            htmlFor="email"
          >
            Subscribe to Our NewsLetter
          </label>
        </div>
        <div className="mx-auto my-auto flex flex-row">
          <input
            className="w-52 rounded-sm border p-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 md:mx-2 md:w-64 md:py-2 md:px-3"
            type="email"
            name="email"
            id="email"
            placeholder="contact@codewithkenn.com"
            required
          />
          <button
            type="submit"
            className="mx-2 flex flex-row justify-evenly rounded-md bg-gray-800 py-2 px-2 text-sm font-bold text-white hover:text-pink-400 md:py-3 md:px-6 md:text-xl"
          >
            <h2 className="my-auto">Subscribe {` `}</h2>
            <BiMailSend className="my-auto text-3xl" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewsLetter
