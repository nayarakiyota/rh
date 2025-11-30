import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import FormColaborador from "../formcolaborador/FormColaborador";

function ModalColaborador() {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className='border rounded px-4 py-2 hover:bg-blue-600 hover:text-white'>
                        Novo Colaborador
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: "1rem",
                    paddingBottom: "2rem",
                    overflowY: "auto",
                    maxHeight: "90vh",
                    width: "95%",
                    maxWidth: "600px",
                }}
            >
                {((close: () => void) => (
                    <FormColaborador close={close} />
                )) as any}
            </Popup>

        </>
    );
}

export default ModalColaborador;
