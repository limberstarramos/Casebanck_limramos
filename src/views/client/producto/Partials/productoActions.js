import { Box, IconButton, Tooltip } from '@mui/material';
import { Delete, Edit, Preview } from '@mui/icons-material';

const ProductoAction = ({ params }) => {

function deleteProduct(par){
    console.log(par);
}
  return (
    <Box>
      <Tooltip title="Editar">
        <IconButton onClick={() => {}}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Eliminar">
        <IconButton
          onClick={() => deleteProduct(params.row)}
        >
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ProductoAction;