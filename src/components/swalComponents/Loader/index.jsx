import { MySwal } from "../../../utils/Swalreact";
import '../styles.css'
export const LoadingSwal = (mensaje) => {
    MySwal.fire({
        
        html: (
            <div className="flex flex-col gap-[20px] overflow-hidden">
                <h1 className="text-[20px] text-black">{mensaje}</h1>
                <div className="inline-block h-8 w-8 animate-spin rounded-[22px] self-center border-4 border-solid border-azul border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    </span> 
                </div>
            </div>
        ),
        showConfirmButton: false,
        allowOutsideClick: false,
        width: 438,
    })
}
export const closeLoadingSwal = () => { MySwal.close() }