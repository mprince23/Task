import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { Box, IconButton, utton, Typography } from '@mui/material';
import { CSS } from '@dnd-kit/utilities';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Item = ({ id, content, deleteItem }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  return (
    <Box
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      sx={{
        backgroundColor: '#1d2b36',
        color: 'white',
        borderRadius: '3px',
        marginBottom: '8px',
        padding: '8px 0 8px 8px',
        maxHeight: "100%",
        cursor: 'grab',
        transform: CSS.Transform.toString(transform),
        transition,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography>{content}</Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
          width: '100%',
        }}
      >
        <IconButton
          sx={{
            color: 'gray',
            ':hover': { color: 'white' },
          }}
          onClick={(e) => {
            e.stopPropagation();
            deleteItem(id);
          }}
        >
          <DeleteOutlineIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Item;