import React, { FC, useState } from 'react'
import { style } from '../../data/style'
import CopyToClipboard from 'react-copy-to-clipboard'
import { sleep } from '../../lib/utils'
import { BsCheckAll } from 'react-icons/bs'
import { MdOutlineContentCopy } from 'react-icons/md'

interface ClipboardProps {
  copyText: string
  innerText: string
}

const Clipboard: FC<ClipboardProps> = ({ copyText, innerText }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (): Promise<void> => {
    setCopied(true)
    await sleep(3000)
    setCopied(false)
  }

  return (
    <CopyToClipboard text={copyText} onCopy={handleCopy}>
      <button
        type="button"
        className={`border ${style.roundContent} ${
          copied
            ? 'border-green-500 bg-green-200 bg-opacity-20 text-gray-800'
            : 'border-gray-500 bg-gray-800 bg-opacity-80 text-white'
        }`}>
        <p className="text-sm md:text-base inline align-middle">{innerText}</p>
        <span className="inline-flex items-center align-middle ml-2 h-4 w-4">
          {copied ? (
            <span className="inline-block text-green-500 -ml-1">
              <BsCheckAll size={'1.5rem'} />
            </span>
          ) : (
            <MdOutlineContentCopy />
          )}
        </span>
      </button>
    </CopyToClipboard>
  )
}

export default Clipboard
