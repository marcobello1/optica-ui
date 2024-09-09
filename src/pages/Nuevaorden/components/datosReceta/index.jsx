function DatosReceta({register, errors, watch}) {
    return(
        <div className="flex flex-col w-full gap-[35px]">
            <div className={`flex flex-col self-start items-center md:itemns-start w-[93%] md:gap-[8px] 
              border-solid border-[1px] rounded-input p-2 
              ${errors.tipoanteojo?.type === 'required' ? 'border-colors-rojo' : 'border-colors-grisinput'}`}>
                <label className="self-start" htmlFor="inputNombre">Tipo de anteojo</label>
                <div className="flex gap-5">
                  <div className="flex gap-2">
                <input
                  {...register('tipoanteojo', {
                    required: true
                  })}
                  name="tipoanteojo"
                  value='bifocal'
                  type="radio"
                  className={`flex flex-row items-center border-solid border-[1px] accent-[#000000] 
                     ${errors.tipoanteojo?.type === 'required' ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                  w-[25px] rounded-input p-[8px] items-center `}
                ></input>
                <label className="text-[18px]">Bifocal</label>
                 </div>
                 <div className="flex gap-2">
                <input
                  {...register('tipoanteojo', {
                    required: true
                  })}
                  name="tipoanteojo"
                  value='multifocal'
                  type="radio"
                  className={`flex flex-row items-center border-solid border-[1px] accent-[#000000]
                     ${errors.fecharealizacion?.type === 'required' ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                  w-[25px] rounded-input p-[8px] items-center`}
                ></input>
                <label className="text-[18px]">Multifocal</label>
                 </div>
                 <div className="flex gap-2">
                <input
                  {...register('tipoanteojo', {
                    required: true
                  })}
                  name="tipoanteojo"
                  value='monofocal'
                  type="radio"
                  className={`flex flex-row items-center border-solid border-[1px] accent-[#000000]
                     ${errors.fecharealizacion?.type === 'required' ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                  w-[25px] rounded-input p-[8px] items-center`}
                ></input>
                <label className="text-[18px]">Monofocal</label>
                 </div>  
                </div>
                {errors.tipoanteojo?.type === 'required' && (
                  <p className="text-colors-rojo text-[25px] text-semibold
                  font-[inter] self-start">Debe seleccionar un tipo de anteojo</p>
                )}
              </div>
              {watch('tipoanteojo') == 'bifocal' && (
                <div className="flex flex-col self-start items-center md:itemns-start w-[93%] md:gap-[8px]">
                <label className="self-start" htmlFor="inputApellido">Tipo de cristal</label>
                <select
                  {...register('cristalbifocal', {
                    required: true,
                    validate: (value) => {return ((value !== 'Seleccionar...' && 
                      watch('tipoanteojo') == 'bifocal') || 'Debe seleccionar un tipo de cristal')}

                  })}
                  className={`flex flex-row items-center border-solid border-[1px] 
                     ${errors.cristalbifocal?.type === 'validate' ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                  w-full rounded-input p-[8px] h-[50px]`}
                >
                  <option selected disabled>Seleccionar...</option>
                  <option>Orgánico blanco</option>
                  <option>AR</option>
                  <option>Blue light</option>
                  <option>Fotocromático</option>
                </select>
                {errors.cristalbifocal?.type === 'validate' && (
                  <p className="text-colors-rojo text-[25px] text-semibold
                  font-[inter] self-start">Debe seleccionar un tipo de cristal</p>
                )}
              </div>
              )}
              {watch('tipoanteojo') == 'multifocal' && (
               <div className={`flex flex-col self-start items-center md:itemns-start w-[93%] md:gap-[8px] 
                border-solid border-[1px] rounded-input p-2 
                ${errors.diseniomultifocal?.type === 'required' ? 'border-colors-rojo' : 'border-colors-grisinput'}`}>
                  <label className="self-start" htmlFor="inputNombre">Tipo de cristal</label>
                  <div className="flex gap-5">
                    <div className="flex gap-2">
                  <input
                    {...register('diseniomultifocal', {
                      required: watch('tipoanteojo') == 'multifocal' ? true : false
                    })}
                    name="diseniomultifocal"
                    value='talladodigital'
                    type="radio"
                    className={`flex flex-row border-solid border-[1px] accent-[#000000] 
                    w-[25px] rounded-input p-[8px] items-center `}
                  ></input>
                  <label className="text-[18px]">Tallado digital</label>
                   </div>
                   <div className="flex gap-2">
                  <input
                    {...register('diseniomultifocal', {
                      required: watch('tipoanteojo') == 'multifocal' ? true : false
                    })}
                    name="diseniomultifocal"
                    value='bignorm'
                    type="radio"
                    className={`flex flex-row border-solid border-[1px] accent-[#000000]
                   w-[25px] rounded-input p-[8px] items-center`}
                  ></input>
                  <label className="text-[18px]">BIG NORM</label>
                   </div>  
                  </div>
                  {errors.diseniomultifocal?.type === 'validate' && (
                  <p className="text-colors-rojo text-[25px] text-semibold
                  font-[inter] self-start">Debe seleccionar un diseño</p>
                )}
                </div>
              )}
               {watch('tipoanteojo') == 'monofocal' && (
               <div className={`flex flex-col self-start items-center md:itemns-start w-[93%] md:gap-[8px] 
                border-solid border-[1px] rounded-input p-2 
                ${errors.diseniomonofocal?.type === 'required' ? 'border-colors-rojo' : 'border-colors-grisinput'}`}>
                  <label className="self-start" htmlFor="inputNombre">Tipo de cristal</label>
                  <div className="flex gap-5">
                  <div className="flex gap-2">
                  <input
                    {...register('diseniomonofocal', {
                      required: watch('tipoanteojo') == 'monofocal' ? true : false
                    })}
                    name="diseniomonofocal"
                    value='STOCK'
                    type="radio"
                    className={`flex flex-row border-solid border-[1px] accent-[#000000] 
                    w-[25px] rounded-input p-[8px] items-center `}
                  ></input>
                  <label className="text-[18px]">STOCK</label>
                   </div>
                   <div className="flex gap-2">
                  <input
                    {...register('diseniomonofocal', {
                      required: watch('tipoanteojo') == 'monofocal' ? true : false
                    })}
                    name="diseniomonofocal"
                    value='TALLADO DIGITAL'
                    type="radio"
                    className={`flex flex-row border-solid border-[1px] accent-[#000000] 
                    w-[25px] rounded-input p-[8px] items-center `}
                  ></input>
                  <label className="text-[18px]">TALLADO DIGITAL</label>
                   </div>
                    <div className="flex gap-2">
                  <input
                    {...register('diseniomonofocal', {
                      required: watch('tipoanteojo') == 'monofocal' ? true : false
                    })}
                    name="diseniomonofocal"
                    value='IMPRESSION BIG NORM MONO/MONO+'
                    type="radio"
                    className={`flex flex-row border-solid border-[1px] accent-[#000000] 
                    w-[25px] rounded-input p-[8px] items-center `}
                  ></input>
                  <label className="text-[18px]">IMPRESSION BIG NORM MONO/MONO+</label>
                   </div>
                   <div className="flex gap-2">
                  <input
                    {...register('diseniomonofocal', {
                      required: watch('tipoanteojo') == 'multifocal' ? true : false
                    })}
                    name="diseniomonofocal"
                    value='IMPRESSION BIG NORM MONO SPORT'
                    type="radio"
                    className={`flex flex-row border-solid border-[1px] accent-[#000000]
                   w-[25px] rounded-input p-[8px] items-center`}
                  ></input>
                  <label className="text-[18px]">IMPRESSION BIG NORM MONO SPORT</label>
                   </div>  
                   <div className="flex gap-2">
                  <input
                    {...register('diseniomonofocal', {
                      required: watch('tipoanteojo') == 'multifocal' ? true : false
                    })}
                    name="diseniomonofocal"
                    value='MULTIREGRESSIV BIG NORM MONO/MONO+'
                    type="radio"
                    className={`flex flex-row border-solid border-[1px] accent-[#000000]
                   w-[25px] rounded-input p-[8px] items-center`}
                  ></input>
                  <label className="text-[18px]">MULTIREGRESSIV BIG NORM MONO/MONO+</label>
                   </div> 
                   <div className="flex gap-2">
                  <input
                    {...register('diseniomonofocal', {
                      required: watch('tipoanteojo') == 'multifocal' ? true : false
                    })}
                    name="diseniomonofocal"
                    value='COSMOLIT BIG NORM MONO/MONO+'
                    type="radio"
                    className={`flex flex-row border-solid border-[1px] accent-[#000000]
                   w-[25px] rounded-input p-[8px] items-center`}
                  ></input>
                  <label className="text-[18px]">COSMOLIT BIG NORM MONO/MONO+</label>
                   </div>  
                  </div>
                  {errors.diseniomonofocal?.type === 'validate' && (
                  <p className="text-colors-rojo text-[25px] text-semibold
                  font-[inter] self-start">Debe seleccionar un diseño</p>
                )}
                </div>
              )}
               {watch('diseniomultifocal') == 'talladodigital' && (
                <div className="flex flex-col self-start items-center md:itemns-start w-[93%] md:gap-[8px]">
                <label className="self-start" htmlFor="inputApellido">Marca</label>
                <select
                  {...register('marcatdigital', {
                    required: true,
                    validate: (value) => {return (value !== 'Seleccionar...' || 'Debe seleccionar una mutual')}

                  })}
                  className={`flex flex-row items-center border-solid border-[1px] 
                     ${errors.marcatdigital?.type === 'validate' ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                  w-full rounded-input p-[8px] h-[50px]`}
                >
                  <option selected disabled>Seleccionar...</option>
                  <option>Lumen</option>
                 <option>Swing free</option>
                 <option>Varilux</option>

                </select>
                {errors.marcatdigital?.type === 'validate' && (
                  <p className="text-colors-rojo text-[25px] text-semibold
                  font-[inter] self-start">Debe seleccionar una marca</p>
                )}
              </div>
              )}
              {(watch('diseniomultifocal') == 'bignorm' || 
              watch('diseniomonofocal') == 'COSMOLIT BIG NORM MONO/MONO+' ||
              watch('diseniomonofocal') == 'MULTIREGRESSIV BIG NORM MONO/MONO+' ||
              watch('diseniomonofocal') == 'IMPRESSION BIG NORM MONO/MONO+' ||
              watch('diseniomonofocal') == 'IMPRESSION BIG NORM MONO SPORT') && (
                <div className="flex flex-col self-start items-center md:itemns-start w-[93%] md:gap-[8px]">
                <label className="self-start" htmlFor="inputApellido">Marca</label>
                <select
                  {...register('marca', {
                    required: true,
                    validate: (value) => {return (value !== 'Seleccionar...' || 'Debe seleccionar una mutual')}

                  })}
                  className={`flex flex-row items-center border-solid border-[1px] 
                     ${errors.marca?.type === 'validate' ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                  w-full rounded-input p-[8px] h-[50px]`}
                >
                  <option selected disabled>Seleccionar...</option>
                  <option>Rodenstock</option>

                </select>
                {errors.marca?.type === 'validate' && (
                  <p className="text-colors-rojo text-[25px] text-semibold
                  font-[inter] self-start">Debe seleccionar una marca</p>
                )}
              </div>
              )}
              <div className={`flex flex-col self-start items-center md:itemns-start w-[93%] md:gap-[8px] 
                border-solid border-[1px] rounded-input p-2 
                ${errors.armazon?.type === 'required' ? 'border-colors-rojo' : 'border-colors-grisinput'}`}>
                 <label className="self-start">Armazón</label>
                  <div className="flex gap-5">
                 <div className="flex gap-2">
                  <input
                  type="checkbox"
                  name="zilo"
                  value='zilo'
                  className={`flex flex-row items-center border-solid border-[1px] accent-[#000000]
                    ${errors.armazon?.type === 'required' ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                 w-[25px] rounded-input p-[8px] items-center`}
                  {...register('armazon',{
                    required: true
                  })}
                  >
                  </input>
                  <label>Zilo</label>
                   </div> 
                 <div className="flex gap-2">
                  <input
                  type="checkbox"
                  name="metal"
                  value='metal'
                  className={`flex flex-row items-center border-solid border-[1px] accent-[#000000]
                    ${errors.armazon?.type === 'required' ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                 w-[25px] rounded-input p-[8px] items-center`}
                  {...register('armazon',{
                    required: true
                  })}
                  >
                  </input>
                  <label>Metal</label>
                   </div>
                   <div className="flex gap-2">
                  <input
                  type="checkbox"
                  name="ranurado"
                  value='ranurado'
                  className={`flex flex-row items-center border-solid border-[1px] accent-[#000000]
                    ${errors.armazon?.type === 'required' ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                 w-[25px] rounded-input p-[8px] items-center`}
                  {...register('armazon',{
                    required: true
                  })}
                  >
                  </input>
                  <label>Ranurado</label>
                   </div>
                   <div className="flex gap-2">
                  <input
                  type="checkbox"
                  name="perforado"
                  value='perforado'
                  className={`flex flex-row items-center border-solid border-[1px] accent-[#000000]
                    ${errors.armazon?.type === 'required' ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                 w-[25px] rounded-input p-[8px] items-center`}
                  {...register('armazon',{
                    required: true
                  })}
                  >
                  </input>
                  <label>Perforado</label>
                   </div>
                   </div> 
                   {errors.armazon?.type === 'required' && (
                    <p className="text-colors-rojo text-[25px] text-semibold
                    font-[inter] self-start">Debe seleccionar al menos un armazón</p>
                  )}
                </div>
        </div>
    )
}
export default DatosReceta