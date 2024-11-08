import { useMemo, useState } from "react";
import useFetch from "../hooks/useFetch";
import Product from "../components/Product";
import Modal from "../components/Modal";
import { FaAngleDoubleUp, FaQuestion } from "react-icons/fa";
import useWindowResize from "../hooks/useWindowResize";

function ProductPage({ url }) {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const { data, pending, error } = useFetch(url, {});
  const windowSize = useWindowResize();
  const handleClick = (currentProduct) => {
    setShowModal(true);
    setModalData(currentProduct);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const renderedProducts = useMemo(() => {
    if (!data) return null;
    const products = data.products.map((product) => {
      return (
        <Product
          key={product.id}
          productData={product}
          onChoose={() => handleClick(product)}
        />
      );
    });
    return products;
  }, [data]);

  const modal = useMemo(() => {
    if (!modalData) return;
    return (
      <Modal onClose={handleClose}>
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-evenly gap-2">
          <div className="w-2/5 h-auto rounded-3xl bg-gray-500">
            <img
              className="m-auto"
              src={modalData.thumbnail}
              alt={modalData.title}
            />
          </div>
          <div className="w-1/2 flex flex-col justify-between">
            <div className="w-full flex flex-nowrap flex-col gap-2">
              <p className="text-4xl font-extrabold text-white">
                {modalData.title}
              </p>
              <p className="text-sm text-left text-gray-400">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {modalData.description}
              </p>
            </div>
            <div className="w-full flex flex-nowrap justify-end mt-8">
              <button
                className="border px-8 py-2 text-white rounded-3xl text-3xl font-bold"
                onClick={handleClose}
              >
                {modalData.price}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }, [modalData]);
  return (
    <div className="relative flex flex-col flex-nowrap items-center justify-center text-white">
      <h1 className="m-4 text-8xl text-transparent font-bold bg-clip-text  bg-gradient-to-r from-yellow-300 via-green-400 to-blue-300 ">
        Products
      </h1>
      {pending ? (
        <div className="text-5xl font-extra-bold">Loading products...</div>
      ) : error ? (
        <div className="text-5xl font-extra-bold">{error}</div>
      ) : (
        <div className="min-w-96 m-4 p-4 grid grid-cols-2 grid-flow-row auto-rows-max sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {renderedProducts}
        </div>
      )}
      <button
        onClick={handleScrollUp}
        className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg"
      >
        <FaAngleDoubleUp size={50} />
      </button>
      <div
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        className="fixed top-4 right-4 bg-gray-800 text-white px-2 py-2 rounded-full shadow-lg"
      >
        <FaQuestion size={20} />
        {showInfo ? (
          <div className="min-w-48 min-h-18 fixed top-12 right-12 bg-gray-800 text-white px-2 py-2 border-gray-400 rounded-xl shadow-lg flex flex-col items-center justify-center">
            <p className="font-bold">Window width {windowSize.width}</p>
            <p className="font-bold">Window height {windowSize.height}</p>
          </div>
        ) : null}
      </div>
      {showModal && modal}
    </div>
  );
}

export default ProductPage;
