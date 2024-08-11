"use client";

const InlineArrowButton = ({ href, text, reversed }) => {
  return (
    <>
      <div>
        {reversed && (
          <a
            href={href}
            className="group mt-7.5 inline-flex items-center gap-2.5 text-primary hover:text-primaryho dark:text-white dark:hover:text-primary"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="currentColor"
              transform="rotate(180)"
            >
              <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
            </svg>
            <span className="duration-300 group-hover:pl-2">
              {text}
            </span>
          </a>
        )
        }
        {!reversed && (
          <a
            href={href}
            className="group mt-7.5 inline-flex items-center gap-2.5 text-primary hover:text-primaryho dark:text-white dark:hover:text-primary"
          >
            <span className="duration-300 group-hover:pr-2">
              {text}
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="currentColor"
            >
              <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
            </svg>
          </a>
        )
        }

      </div>



    </>
  )
}

export default InlineArrowButton;