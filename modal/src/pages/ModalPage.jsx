import { useState } from "react";
import Modal from "../components/Modal";

function ModalPage(){
    const [showModal,setShowModal] = useState(false);
    const handleClick = ()=>{
        setShowModal(true);
    }
    const handleClose = ()=>{
        setShowModal(false);
    }
    const modal = <Modal 
        onClose={handleClose}
        header = {<p className="w-full text-4xl text-center font-bold ">
            The Most Important AGREEMENT!!!
        </p>}
        footer = {<div className="w-full flex justify-end">
            <button onClick={handleClose} className="border px-6 py-1">
                I ACCEPT
            </button>
        </div>}>
        Here is an important agreement for you to accept.
    </Modal>
    return (
        <div className="relative flex flex-col items-center">
          <h1 className="text-4xl text-center font-extrabold">The Most Important AGREEMENT</h1>
          <div className="m-8 max-w-3xl">
            <p className="text-lg font-light">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum mollis facilisis. Etiam malesuada tempus eros eget bibendum. Duis mollis urna sem, ultricies efficitur neque porttitor eget. Suspendisse sed metus eget odio aliquet finibus vel vel urna. Suspendisse potenti. Mauris feugiat ante nisl, sit amet gravida lectus tristique a. Nullam enim sem, tincidunt at placerat vitae, mollis ac augue. Nulla facilisi. Integer sollicitudin posuere rutrum. Morbi et mi non purus consectetur pulvinar ut sit amet mi. Etiam gravida sed leo eget rhoncus. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel dapibus orci. Etiam at nibh non enim vehicula tempor. Nulla non dui id felis maximus sodales sit amet et massa.
            </p>
            <p className="text-lg font-light">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum mollis facilisis. Etiam malesuada tempus eros eget bibendum. Duis mollis urna sem, ultricies efficitur neque porttitor eget. Suspendisse sed metus eget odio aliquet finibus vel vel urna. Suspendisse potenti. Mauris feugiat ante nisl, sit amet gravida lectus tristique a. Nullam enim sem, tincidunt at placerat vitae, mollis ac augue. Nulla facilisi. Integer sollicitudin posuere rutrum. Morbi et mi non purus consectetur pulvinar ut sit amet mi. Etiam gravida sed leo eget rhoncus. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel dapibus orci. Etiam at nibh non enim vehicula tempor. Nulla non dui id felis maximus sodales sit amet et massa.
            </p>
            <p className="text-lg font-light">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum mollis facilisis. Etiam malesuada tempus eros eget bibendum. Duis mollis urna sem, ultricies efficitur neque porttitor eget. Suspendisse sed metus eget odio aliquet finibus vel vel urna. Suspendisse potenti. Mauris feugiat ante nisl, sit amet gravida lectus tristique a. Nullam enim sem, tincidunt at placerat vitae, mollis ac augue. Nulla facilisi. Integer sollicitudin posuere rutrum. Morbi et mi non purus consectetur pulvinar ut sit amet mi. Etiam gravida sed leo eget rhoncus. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel dapibus orci. Etiam at nibh non enim vehicula tempor. Nulla non dui id felis maximus sodales sit amet et massa.
            </p>
            <p className="text-lg font-light">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum mollis facilisis. Etiam malesuada tempus eros eget bibendum. Duis mollis urna sem, ultricies efficitur neque porttitor eget. Suspendisse sed metus eget odio aliquet finibus vel vel urna. Suspendisse potenti. Mauris feugiat ante nisl, sit amet gravida lectus tristique a. Nullam enim sem, tincidunt at placerat vitae, mollis ac augue. Nulla facilisi. Integer sollicitudin posuere rutrum. Morbi et mi non purus consectetur pulvinar ut sit amet mi. Etiam gravida sed leo eget rhoncus. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel dapibus orci. Etiam at nibh non enim vehicula tempor. Nulla non dui id felis maximus sodales sit amet et massa.
            </p>
            <p className="text-lg font-light">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum mollis facilisis. Etiam malesuada tempus eros eget bibendum. Duis mollis urna sem, ultricies efficitur neque porttitor eget. Suspendisse sed metus eget odio aliquet finibus vel vel urna. Suspendisse potenti. Mauris feugiat ante nisl, sit amet gravida lectus tristique a. Nullam enim sem, tincidunt at placerat vitae, mollis ac augue. Nulla facilisi. Integer sollicitudin posuere rutrum. Morbi et mi non purus consectetur pulvinar ut sit amet mi. Etiam gravida sed leo eget rhoncus. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel dapibus orci. Etiam at nibh non enim vehicula tempor. Nulla non dui id felis maximus sodales sit amet et massa.
            </p>
            <p className="text-lg font-light">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum mollis facilisis. Etiam malesuada tempus eros eget bibendum. Duis mollis urna sem, ultricies efficitur neque porttitor eget. Suspendisse sed metus eget odio aliquet finibus vel vel urna. Suspendisse potenti. Mauris feugiat ante nisl, sit amet gravida lectus tristique a. Nullam enim sem, tincidunt at placerat vitae, mollis ac augue. Nulla facilisi. Integer sollicitudin posuere rutrum. Morbi et mi non purus consectetur pulvinar ut sit amet mi. Etiam gravida sed leo eget rhoncus. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel dapibus orci. Etiam at nibh non enim vehicula tempor. Nulla non dui id felis maximus sodales sit amet et massa.
            </p>
            <p className="text-lg font-light">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum mollis facilisis. Etiam malesuada tempus eros eget bibendum. Duis mollis urna sem, ultricies efficitur neque porttitor eget. Suspendisse sed metus eget odio aliquet finibus vel vel urna. Suspendisse potenti. Mauris feugiat ante nisl, sit amet gravida lectus tristique a. Nullam enim sem, tincidunt at placerat vitae, mollis ac augue. Nulla facilisi. Integer sollicitudin posuere rutrum. Morbi et mi non purus consectetur pulvinar ut sit amet mi. Etiam gravida sed leo eget rhoncus. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel dapibus orci. Etiam at nibh non enim vehicula tempor. Nulla non dui id felis maximus sodales sit amet et massa.
            </p>
            <p className="text-lg font-light">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum mollis facilisis. Etiam malesuada tempus eros eget bibendum. Duis mollis urna sem, ultricies efficitur neque porttitor eget. Suspendisse sed metus eget odio aliquet finibus vel vel urna. Suspendisse potenti. Mauris feugiat ante nisl, sit amet gravida lectus tristique a. Nullam enim sem, tincidunt at placerat vitae, mollis ac augue. Nulla facilisi. Integer sollicitudin posuere rutrum. Morbi et mi non purus consectetur pulvinar ut sit amet mi. Etiam gravida sed leo eget rhoncus. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel dapibus orci. Etiam at nibh non enim vehicula tempor. Nulla non dui id felis maximus sodales sit amet et massa.
            </p>
            <p className="text-lg font-light">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum mollis facilisis. Etiam malesuada tempus eros eget bibendum. Duis mollis urna sem, ultricies efficitur neque porttitor eget. Suspendisse sed metus eget odio aliquet finibus vel vel urna. Suspendisse potenti. Mauris feugiat ante nisl, sit amet gravida lectus tristique a. Nullam enim sem, tincidunt at placerat vitae, mollis ac augue. Nulla facilisi. Integer sollicitudin posuere rutrum. Morbi et mi non purus consectetur pulvinar ut sit amet mi. Etiam gravida sed leo eget rhoncus. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel dapibus orci. Etiam at nibh non enim vehicula tempor. Nulla non dui id felis maximus sodales sit amet et massa.
            </p>
            <p className="text-lg font-light">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum mollis facilisis. Etiam malesuada tempus eros eget bibendum. Duis mollis urna sem, ultricies efficitur neque porttitor eget. Suspendisse sed metus eget odio aliquet finibus vel vel urna. Suspendisse potenti. Mauris feugiat ante nisl, sit amet gravida lectus tristique a. Nullam enim sem, tincidunt at placerat vitae, mollis ac augue. Nulla facilisi. Integer sollicitudin posuere rutrum. Morbi et mi non purus consectetur pulvinar ut sit amet mi. Etiam gravida sed leo eget rhoncus. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel dapibus orci. Etiam at nibh non enim vehicula tempor. Nulla non dui id felis maximus sodales sit amet et massa.
            </p>
            <p className="text-lg font-light">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum mollis facilisis. Etiam malesuada tempus eros eget bibendum. Duis mollis urna sem, ultricies efficitur neque porttitor eget. Suspendisse sed metus eget odio aliquet finibus vel vel urna. Suspendisse potenti. Mauris feugiat ante nisl, sit amet gravida lectus tristique a. Nullam enim sem, tincidunt at placerat vitae, mollis ac augue. Nulla facilisi. Integer sollicitudin posuere rutrum. Morbi et mi non purus consectetur pulvinar ut sit amet mi. Etiam gravida sed leo eget rhoncus. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel dapibus orci. Etiam at nibh non enim vehicula tempor. Nulla non dui id felis maximus sodales sit amet et massa.
            </p>
            <p className="text-lg font-light">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum mollis facilisis. Etiam malesuada tempus eros eget bibendum. Duis mollis urna sem, ultricies efficitur neque porttitor eget. Suspendisse sed metus eget odio aliquet finibus vel vel urna. Suspendisse potenti. Mauris feugiat ante nisl, sit amet gravida lectus tristique a. Nullam enim sem, tincidunt at placerat vitae, mollis ac augue. Nulla facilisi. Integer sollicitudin posuere rutrum. Morbi et mi non purus consectetur pulvinar ut sit amet mi. Etiam gravida sed leo eget rhoncus. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel dapibus orci. Etiam at nibh non enim vehicula tempor. Nulla non dui id felis maximus sodales sit amet et massa.
            </p>
          </div>
          <div className="w-full max-w-3xl flex justify-end">
            <button onClick={handleClick} className="m-8 mt-0 border px-6 py-1">
                I ACCEPT
            </button>
          </div>
          {showModal && modal}
        </div>
      )
}

export default ModalPage;