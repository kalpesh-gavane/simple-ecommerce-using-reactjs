import { ToastContainer } from 'react-toastify';

const Toaster = () => {

    return (
        <ToastContainer
            position="bottom-right"
            title='success'
            autoClose={400}
            hideProgressBar={true}
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