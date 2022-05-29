import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Modal({ title, label }) {
  let [isOpen, setIsOpen] = useState(false);
  let [val, setinput] = useState("");

  function closeModal({keyCode}) {
    if (keyCode === 13) {//enter
      setIsOpen(false);
    }
  }

  const openModal = () => {
    const key = localStorage.getItem("apiKey");
    if (key !== null) {
      setinput(key);
    }
    setIsOpen(true);
  };

  const setApiKey = (apikey) => {
    const key = localStorage.getItem("apiKey");
    if (key === null || key !== apikey) {
      localStorage.setItem("apiKey", apikey);
    }
    setinput(apikey);
  };

  return (
    <>
      <div className="items-end">
        <button
          type="button"
          onClick={(e) => openModal()}
          className="rounded-md bg-gray-800 bg-opacity-90 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          {title}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={e=>setIsOpen(false)} onKeyDown={e =>closeModal(e)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-2xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-gray-900">
                    {label}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-xs text-gray-500">
                      Api Key is required if you are planing to make more than 10 queries daily.
                    </p>
                  </div>

                  <div className="mt-4">
                    {/* <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button> */}

                    <input
                      type="text"
                      name="ApiKey"
                      id="apikey-input"
                      // style={{backgroundColor: "#dadada"}}
                      className="focus:ring-black focus:border-black block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="Api key here"
                      onInput={(e) => setApiKey(e.target.value)}
                      value={val}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
