import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {

    // const lastPage = Math.ceil(totalCount / itemsCountForPage)
    const lastPage = itemsCountForPage > 0
        ? Math.ceil(totalCount / itemsCountForPage)
        : 1

    const onChangeCallback = (event: any, page: number) => {
        // пишет студент
        // const newCount = +event.currentTarget.value
        onChange(page, itemsCountForPage)
    }

    const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        // пишет студент
        const newCount = +event.currentTarget.value
        onChange(1, newCount)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    '& .MuiPaginationItem-root': {
                        width: 24,
                        height: 24,
                        borderRadius: 0,
                    },
                    '& .Mui-selected': {backgroundColor: '#1976d2', color: 'white'}
                    // стили для Pagination // пишет студент
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                Показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChangeOption={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
