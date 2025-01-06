import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '147px',
                height: '4px',
                borderRadius: '10px',
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    height: 18 ,
                    width: 18,
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    border: '2px solid currentColor',
                    '&:hover, &.Mui-focusVisible': {
                        boxShadow: 'inherit',
                    },
                },
                '& .MuiSlider-track': {
                    height: 4,
                    borderRadius: 10,
                },
                '& .MuiSlider-rail': {
                    height: 4,
                    borderRadius: 10,
                    color: 'black'
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
