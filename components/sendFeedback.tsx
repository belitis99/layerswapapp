import { FC, useState, Fragment } from 'react'
import Modal from './modalComponent';
import SubmitButton from './buttons/submitButton';
import { ExternalLinkIcon, ExclamationIcon, XIcon, LinkIcon } from '@heroicons/react/outline';
import { Combobox, Transition } from '@headlessui/react';
import { SwapFormValues } from './DTOs/SwapFormValues';

type Props = {
    isOpen: boolean,
    onClose: () => void
}

const SendFeedback: FC<Props> = ({ isOpen, onClose }) => {
    const [loading, setLoading] = useState(false);

    const token = "5497557256:AAHOgmIi549pH8uiBvFsGmgH16kkBxSFtRA";
    const token2 = "5366632516:AAHRlo58yEgoAj2-qe2poJOR19ybOuGMBpQ"
    const chat_id = "-677284250";
    let api = new XMLHttpRequest();

    return (
        <Transition
            appear
            show={isOpen}
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-full">
            <div className='absolute inset-0 z-40 -inset-y-11 flex flex-col w-full bg-darkBlue'>
                <div className='relative z-40 overflow-hidden bg-darkBlue p-10 pt-0'>
                    <div className='relative grid grid-cols-1 gap-4 place-content-end z-40 mb-2 mt-1'>
                        <span className="justify-self-end text-pink-primary-300 cursor-pointer">
                            <div className="hidden sm:block ">
                                <button
                                    type="button"
                                    className="rounded-md text-pink-primary-300 focus:ring-2 hover:text-light-blue"
                                    onClick={onClose}
                                >
                                    <span className="sr-only">Close</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                        </span>
                    </div>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="relative inset-0" ></div>
                    </Transition.Child>

                    <div className="relative inset-0 flex flex-col overflow-y-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-darkblue-500 scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded scrollbar-track:!bg-slate-500/[0.16] scrollbar-thumb:!bg-slate-500/50">
                        <div className="relative min-h-full items-center justify-center p-4 pt-0 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95">
                                <Combobox
                                    as="div"
                                    className="transform  transition-all "
                                    onChange={() => { }}
                                    value=""
                                >
                                    <h3 className='mb-4 pt-2 text-xl text-center md:text-left font-roboto text-white font-semibold'>
                                        Send Feedback
                                        <p className='mb-10 pt-2 text-base text-center md:text-left font-roboto text-pink-primary-300 font-light'>
                                            Please help us shape the product, catch bugs, and prioritize features. Your feedback will go directly into our Telegram channel.                                            
                                        </p>
                                    </h3>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                        <textarea id="feedback" className="no-resize appearance-none block w-full bg-darkblue-600 text-white border border-darkblue-100 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-darkblue-500 focus:border-darkblue-200 h-48 resize-none"></textarea>
                                        </div>
                                    </div>
                                    <div className="mt-3 sm:mt-6 text-white text-sm">
                                        <SubmitButton icon={''} isDisabled={loading} isSubmitting={loading} onClick={() => {api.open("GET", `https://api.telegram.org/bot${token2}/sendMessage?chat_id=${chat_id}&text=${(document.getElementById("feedback") as HTMLInputElement).value}`, true); api.send()}}>
                                            Send
                                        </SubmitButton>
                                    </div>

                                </Combobox>

                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </div>

        </Transition>
    )
}

export default SendFeedback;