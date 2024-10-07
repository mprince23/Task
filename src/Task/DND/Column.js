import React, { useState } from 'react';
import { Box, Button, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Item from './Item';

const Column = ({ id, title, deleteColumn, addItemToColumn, deleteItemFromColumn, items }) => {
  const { setNodeRef } = useDroppable({ id });
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleValue, setTitleValue] = useState(title);

  const handleAddClick = () => setShowInput(!showInput);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleInputSubmit = () => {
    if (inputValue.trim()) {
      addItemToColumn(id, inputValue);
      setInputValue('');
      setShowInput(false);
    }
  };

  const handleTitleChange = (e) => setTitleValue(e.target.value);

  const handleTitleSubmit = () => {
    setIsEditingTitle(false);
  };

  return (
    <Box
      ref={setNodeRef}
      sx={{
        backgroundColor: '#151C23',
        width: '300px',
        height: '100%',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'grab',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#0C1015',
          border: '3px solid #131517',
          height: '40px',
          borderRadius: '5px 5px 0 0',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          justifyContent: 'space-between',
          padding: '0 8px',
        }}
      >
        {isEditingTitle ? (
          <TextField
            value={titleValue}
            onChange={handleTitleChange}
            onBlur={handleTitleSubmit}
            onKeyPress={(e) => e.key === 'Enter' && handleTitleSubmit()}
            variant="standard"
            sx={{ input: { color: 'white' } }}
            autoFocus
          />
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }} onDoubleClick={() => setIsEditingTitle(true)}>
            <Box
              sx={{
                backgroundColor: '#151C23',
                borderRadius: '50%',
                fontSize: '14px',
                height: '25px',
                width: '25px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {items.length}
            </Box>
            {titleValue}
          </Box>
        )}
        <IconButton
          sx={{
            color: 'gray',
            ':hover': { color: 'white' },
          }}
          onClick={() => deleteColumn(id)}
        >
          <DeleteOutlineIcon />
        </IconButton>
      </Box>

      <Box sx={{ padding: '8px', flexGrow: 1, overflowY: 'auto' }}>
        <SortableContext items={items.map((item) => item.id)} strategy={verticalListSortingStrategy}>
          {items.map((item) => (
            <Item key={item.id} id={item.id} content={item.content} deleteItem={(itemId) => deleteItemFromColumn(id, itemId)} />
          ))}
        </SortableContext>
      </Box>

      <Button
        onClick={handleAddClick}
        sx={{
          backgroundColor: '#1a1f26',
          color: 'white',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #131517',
          gap: 1,
          ':hover': { border: '2px solid #310712' },
        }}
      >
        <AddIcon /> Add Item
      </Button>

      {showInput && (
        <Box sx={{ marginTop: 2 }}>
          <TextField
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
            label="New Item"
            variant="outlined"
            sx={{ input: { color: 'white' } }}
          />
          <Button
            onClick={handleInputSubmit}
            sx={{
              marginTop: 1,
              backgroundColor: '#0C1015',
              color: 'white',
              width: '100%',
              ':hover': { border: '2px solid #310712' },
            }}
          >
            Submit
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Column;