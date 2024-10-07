import React, { useMemo, useState } from 'react';
import { Box, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import Column from './Column';

const ReactDND = () => {
    const [columns, setColumns] = useState([]);

    const columnsId = useMemo(() => columns.map((item) => item.id), [columns]);

    const generateId = () => Date.now();

    console.log(columns);

    const createColumn = () => {
        const newColumn = {
            id: generateId(),
            title: "Enter Column Name",
            items: []
        };
        setColumns([...columns, newColumn]);
    };

    const deleteColumn = (id) => {
        setColumns(columns.filter(item => item.id !== id));
    };

    const addItemToColumn = (columnId, newItem) => {
        setColumns((prevColumns) =>
            prevColumns.map((column) =>
                column.id === columnId ? { ...column, items: [...column.items, { id: generateId(), content: newItem }] } : column
            )
        );
    };

    const deleteItemFromColumn = (columnId, itemId) => {
        setColumns((prevColumns) =>
            prevColumns.map((column) =>
                column.id === columnId ? { ...column, items: column.items.filter((item) => item.id !== itemId) } : column
            )
        );
    };

    const handleColumnDragEnd = ({ active, over }) => {
        if (active.id !== over.id) {
            setColumns((prevColumns) => {
                const oldIndex = prevColumns.findIndex(item => item.id === active.id);
                const newIndex = prevColumns.findIndex(item => item.id === over.id);
                return arrayMove(prevColumns, oldIndex, newIndex);
            });
        }
    };

    const handleItemDragEnd = ({ active, over }) => {
        if (!over) return;

        if (active.id === over.id) return;

        let oldColumn, newColumn;

        for (let col of columns) {
            if (col.items.some(item => item.id === active.id)) {
                oldColumn = col;
            }
            if (col.items.some(item => item.id === over.id)) {
                newColumn = col;
            }
        }

        if (oldColumn && newColumn) {
            setColumns((prevColumns) => {
                const updatedColumns = [...prevColumns];

                const oldColumnIndex = updatedColumns.findIndex(col => col.id === oldColumn.id);
                const activeItemIndex = oldColumn.items.findIndex(item => item.id === active.id);
                const activeItem = oldColumn.items[activeItemIndex];
                updatedColumns[oldColumnIndex].items.splice(activeItemIndex, 1);

                const newColumnIndex = updatedColumns.findIndex(col => col.id === newColumn.id);
                const overItemIndex = newColumn.items.findIndex(item => item.id === over.id);
                updatedColumns[newColumnIndex].items.splice(overItemIndex, 0, activeItem);

                return updatedColumns;
            });
        } else if (oldColumn) {
            setColumns((prevColumns) => {
                const updatedColumns = [...prevColumns];

                const oldColumnIndex = updatedColumns.findIndex(col => col.id === oldColumn.id);
                const activeItemIndex = oldColumn.items.findIndex(item => item.id === active.id);
                const activeItem = oldColumn.items[activeItemIndex];
                updatedColumns[oldColumnIndex].items.splice(activeItemIndex, 1);

                const targetColumnIndex = updatedColumns.findIndex(col => col.id === over.id);
                updatedColumns[targetColumnIndex].items.push(activeItem);

                return updatedColumns;
            });
        }
    };

    return (
        <Box sx={{ backgroundColor: 'black', color: 'white', }}>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleItemDragEnd}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        gap: 2
                    }}
                >
                    <Box sx={{ display: "flex" }}>
                        <SortableContext items={columnsId} strategy={verticalListSortingStrategy}>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                {columns.map((column) => (
                                    <Column
                                        key={column.id}
                                        id={column.id}
                                        title={column.title}
                                        deleteColumn={deleteColumn}
                                        addItemToColumn={addItemToColumn}
                                        deleteItemFromColumn={deleteItemFromColumn}
                                        items={column.items}
                                    />
                                ))}
                            </Box>
                        </SortableContext>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                ml: 2
                            }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#0C1015',
                                    border: '2px solid #131517',
                                    width: '250px',
                                    height: '50px',
                                    ':hover': { border: '2px solid #310712' }
                                }}
                                onClick={createColumn}
                            >
                                <AddCircleOutlineIcon sx={{ mr: 1 }} />
                                Add Column
                            </Button>
                        </Box>

                    </Box>
                </Box>
            </DndContext>
        </Box>
    );
};

export default ReactDND;