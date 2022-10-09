import { ToastContainer } from 'react-toastify';

const Toaster = () => {

    return (
        <ToastContainer
            position="top-center"
            title='success'
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    )

}

export default Toaster;