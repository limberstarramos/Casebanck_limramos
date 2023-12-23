import { Box, IconButton, Tooltip } from '@mui/material';
import { Delete, Edit,CheckCircle, ThumbDownAltRounded,CheckCircleOutlineRounded } from '@mui/icons-material';
// import { useValue } from '../../../context/ContextProvider';
// import { deleteRoom } from '../../../actions/room';

const TarjetaActios = ({ params }) => {
   
function aprobar(par){
    const tarjetas = localStorage.getItem("tarjetas");
    const tarjets= JSON.parse(tarjetas);
    let _tarjets=[];
    for (let index = 0; index < tarjets.length; index++) {
        let element = tarjets[index];
        if(element.id==par.id){
            _tarjets.push({...element,aprobado:true});
        }else{
            _tarjets.push(element);
        }
        
        
    }
 
    localStorage.setItem("tarjetas", JSON.stringify(_tarjets));

}
function desaprobar(par){
    const tarjetas = localStorage.getItem("tarjetas");
    const tarjets= JSON.parse(tarjetas);
    let _tarjets=[];
    for (let index = 0; index < tarjets.length; index++) {
        let element = tarjets[index];
        if(element.id==par.id){
            _tarjets.push({...element,aprobado:false});
        }else{
            _tarjets.push(element);
        }
        
        
    }
 
    localStorage.setItem("tarjetas", JSON.stringify(_tarjets));

}
  return (
    <Box>
    <Tooltip title="Aprobar">
        <IconButton
          onClick={() => aprobar(params.row)}
        >

        <CheckCircle />
        </IconButton>
      </Tooltip>
      <Tooltip title="Desaprobar">
        <IconButton   onClick={() => desaprobar(params.row)}>
          <ThumbDownAltRounded />
        </IconButton>
      </Tooltip>
      
    </Box>
  );
};

export default TarjetaActios;