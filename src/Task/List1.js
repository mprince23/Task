import React from 'react';
import LazyLoad from 'react-lazyload';
import { useQuery } from 'react-query';
import { Box, CircularProgress, Typography } from '@mui/material';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeList } from 'react-window';

const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/products?limit=500');

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data.products.map((item) => ({
        id: item.id,
        name: item.title,
        imageUrl: item.thumbnail
    }));
};

const List1 = () => {
    const { data, isLoading, error } = useQuery('items', fetchData);

    if (isLoading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}
            >
                <Typography variant="h6">Error loading data</Typography>
            </Box>
        );
    }

    const rowRenderer = ({ index, style }) => {
        const item = data[index];
        return (
            <div key={item.id} style={style}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '15px',
                    backgroundColor: '#f9f9f9',
                    '&:hover': { backgroundColor: '#e2e2e2' }
                }}>
                    <img src={item.imageUrl} alt={item.name} style={{ marginRight: '15px', width: '50px', height: '50px' }} />
                    <p>{item.name}</p>
                </div>
            </div>
        );
    };

    return (
        <Box>
            <Box sx={{ padding: '20px' }}>
                <Typography variant="h6">Virtualized List</Typography>
                <Box sx={{ width: '100%', height: '400px' }}>
                    <AutoSizer>
                        {({ width, height }) => (
                            <VariableSizeList
                                width={width}
                                height={height}
                                itemCount={data.length}
                                itemSize={() => 60}
                            >
                                {rowRenderer}
                            </VariableSizeList>
                        )}
                    </AutoSizer>
                </Box>
            </Box>

            <Box sx={{ padding: '20px' }}>
                <Typography variant="h6">Lazy Loaded List</Typography>
                {data.map(item => (
                    <LazyLoad key={item.id} height={60} offset={100}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '15px',
                                borderBottom: '1px solid #ccc',
                                backgroundColor: '#f9f9f9',
                                '&:hover': { backgroundColor: '#e2e2e2' },
                            }}
                        >
                            <img
                                src={item.imageUrl}
                                alt={item.name}
                                style={{ marginRight: '15px', width: '50px', height: '50px', borderRadius: '8px' }}
                            />
                            <Typography>{item.name}</Typography>
                        </Box>
                    </LazyLoad>
                ))}
            </Box>
        </Box>
    );
};

export default List1;
