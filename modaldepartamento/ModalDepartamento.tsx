import Popup from "reactjs-popup";
import FormDepartamento from "../formdepartamento/FormDepartamento";

function ModalDepartamento() {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className='border rounded border-fuchsia-500 font-bold px-4 py-2 bg-fuchsia-400 hover:bg-fuchsia-700 w-80 md:text-lg'>
                        Novo Departamento
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '2rem'
                }}
            >
                <FormDepartamento />
            </Popup>
        </>
    );
}

export default ModalDepartamento;