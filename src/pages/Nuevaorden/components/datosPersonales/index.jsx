function DatosPersonales({register, errors, listaMutuales}) {
  const validateDate = (value) => {
    const selectedDate = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // Para ignorar la parte de la hora y hacer una comparación solo por fecha
    return selectedDate < today || "La fecha debe ser anterior a hoy";
  };

  return(
        <div className="flex flex-col w-full gap-[35px]">
              <div className="flex flex-col self-start items-center md:itemns-start w-[93%] md:gap-[8px]">
                <label className="self-start" htmlFor="inputNombre">Nombre</label>
                <input
                  {...register('nombre', {
                    required: true
                  })}
                  type="text"
                  className={`flex flex-row items-center border-solid border-[1px] 
                     ${errors.nombre?.type === 'required' ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                  w-full rounded-input p-[8px] h-[50px]`}
                  id="inputNombre"
                  name="nombre"
                  placeholder="Nombre"
                ></input>
                {errors.nombre?.type === 'required' && (
                  <p className="text-colors-rojo text-[25px] text-semibold
                  font-[inter] self-start">Debe ingresar un nombre</p>
                )}
              </div>
              <div className="flex flex-col self-start items-center md:itemns-start w-[93%] md:gap-[8px]">
                <label className="self-start" htmlFor="inputApellido">Apellido</label>
                <input
                  {...register('apellido', {
                    required: true
                  })}
                  type="text"
                  className={`flex flex-row items-center border-solid border-[1px] 
                     ${errors.apellido?.type === 'required' ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                  w-full rounded-input p-[8px] h-[50px]`}
                  id="inputApellido"
                  name="apellido"
                  placeholder="Apellido"
                ></input>
                {errors.apellido?.type === 'required' && (
                  <p className="text-colors-rojo text-[25px] text-semibold
                  font-[inter] self-start">Debe ingresar un apellido</p>
                )}
              </div>
              <div className="flex flex-col self-start items-center md:itemns-start w-[93%] md:gap-[8px]">
                <label className="self-start" htmlFor="inputNombre">Fecha de nacimiento</label>
                <input
                  {...register('fechanacimiento', {
                    required: 'Debe ingresar una fecha de nacimiento',
                    validate: validateDate  
                  })}
                  type="date"
                  className={`flex flex-row items-center border-solid border-[1px] 
                     ${errors.fechanacimiento ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                  w-full rounded-input p-[8px] h-[50px]`}
                  placeholder="Fecha de nacimiento"
                ></input>
                {errors.fechanacimiento && (
                  <p className="text-colors-rojo text-[25px] text-semibold
                  font-[inter] self-start">{errors.fechanacimiento.message}</p>
                )}
              </div>
              <div className="flex flex-col self-start items-center md:itemns-start w-[93%] md:gap-[8px]">
                <label className="self-start" htmlFor="inputApellido">Teléfono</label>
                <input
                  {...register('telefono', {
                    required: true
                  })}
                  type="text"
                  className={`flex flex-row items-center border-solid border-[1px] 
                     ${errors.telefono?.type === 'required' ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                  w-full rounded-input p-[8px] h-[50px]`}
                  id="inputApellido"
                  name="telefono"
                  placeholder="Teléfono"
                ></input>
                {errors.telefono?.type === 'required' && (
                  <p className="text-colors-rojo text-[25px] text-semibold
                  font-[inter] self-start">Debe ingresar un telefono</p>
                )}
              </div>
              <div className="flex flex-col self-start items-center md:itemns-start w-[93%] md:gap-[8px]">
                <label className="self-start" htmlFor="inputNombre">Fecha de receta</label>
                <input
                  {...register('fechareceta', {
                    required: 'Debe ingresar una fecha de receta',
                    validate: validateDate

                  })}
                  type="date"
                  className={`flex flex-row items-center border-solid border-[1px] 
                     ${errors.fechareceta ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                  w-full rounded-input p-[8px] h-[50px]`}
                  placeholder="Fecha de nacimiento"
                ></input>
                {errors.fechareceta && (
                  <p className="text-colors-rojo text-[25px] text-semibold
                  font-[inter] self-start">{errors.fechareceta.message}</p>
                )}
              </div>
              <div className="flex flex-col self-start items-center md:itemns-start w-[93%] md:gap-[8px]">
                <label className="self-start" htmlFor="inputApellido">Receta</label>
                <input
                  {...register('receta', {
                    required: true
                  })}
                  type="file"
                  accept=".jpg, .jpeg, .png, .gif"
                  className={`flex flex-row items-center border-solid border-[1px] 
                     ${errors.receta?.type === 'required' ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                  w-full rounded-input p-[8px] h-[50px]`}
                ></input>
                {errors.receta?.type === 'required' && (
                  <p className="text-colors-rojo text-[25px] text-semibold
                  font-[inter] self-start">Debe cargar una receta</p>
                )}
              </div>
              <div className="flex flex-col self-start items-center md:itemns-start w-[93%] md:gap-[8px]">
                <label className="self-start" htmlFor="inputApellido">Nombre y/o matrìcula del médico</label>
                <input
                  {...register('medico', {
                    required: true
                  })}
                  type="text"
                  className={`flex flex-row items-center border-solid border-[1px] 
                     ${errors.medico?.type === 'required' ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                  w-full rounded-input p-[8px] h-[50px]`}
                  placeholder="Nombre y/o matrìcula del médico"
                ></input>
                {errors.medico?.type === 'required' && (
                  <p className="text-colors-rojo text-[25px] text-semibold
                  font-[inter] self-start">Debe ingresar el nombre y/o matrícula del médico</p>
                )}
              </div>
              <div className="flex flex-col self-start items-center md:itemns-start w-[93%] md:gap-[8px]">
                <label className="self-start" htmlFor="inputApellido">Mutual</label>
                <select
                  {...register('mutual', {
                    required: true,
                    validate: (value) => {return (value !== 'Seleccionar...' || 'Debe seleccionar una mutual')}

                  })}
                  className={`flex flex-row items-center border-solid border-[1px] 
                     ${errors.mutual?.type === 'validate' ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                  w-full rounded-input p-[8px] h-[50px]`}
                >
                  <option>Seleccionar...</option>
    {listaMutuales.map((value, key) => {
                return (
                <option value={value.id} key={key}>
                {value.nombre}
                </option>
                )
                })}

                </select>
                {errors.mutual?.type === 'validate' && (
                  <p className="text-colors-rojo text-[25px] text-semibold
                  font-[inter] self-start">Debe seleccionar una mutual</p>
                )}
              </div>
              <div className="flex flex-col self-start items-center md:itemns-start w-[93%] md:gap-[8px]">
                <label className="self-start" htmlFor="inputNombre">Fecha de realización</label>
                <input
                  {...register('fecharealizacion', {
                    required: true
                  })}
                  type="date"
                  className={`flex flex-row items-center border-solid border-[1px] 
                     ${errors.fecharealizacion?.type === 'required' ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                  w-full rounded-input p-[8px] h-[50px]`}
                  placeholder="Fecha de nacimiento"
                ></input>
                {errors.fecharealizacion?.type === 'required' && (
                  <p className="text-colors-rojo text-[25px] text-semibold
                  font-[inter] self-start">Debe ingresar una fecha de realización</p>
                )}
              </div>
        </div>
    )
}
export default DatosPersonales