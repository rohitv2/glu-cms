import React, { useState } from 'react';
import { Button, TextField, Typography, Checkbox, TablePagination, makeStyles } from '@material-ui/core';
import { ArrowDownward, Search } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { CsvBuilder } from 'filefy';
import OutlineBtn from '../Button/OutlineBtn';
import { colors } from '../../Styles/colors';
import FormControlInput from '../Form/FormControlInput';

const useStyles = makeStyles({
    parent: {
        width: (props) => props.width,
    },
});

const SearchBoxFilterExport = ({ availabeProps, filter, width, disableExport }) => {
    const classes = useStyles({ width });
    const [showFilter, setShowFilter] = useState(false);
    const [search, setSearch] = useState('');
    const handleFilter = () => {
        setShowFilter(!showFilter);
    };
    const handleSearch = (e) => {
        setSearch(e.target.value);
        availabeProps.onSearchChanged(e.target.value);
    };
    const handleExport = () => {
        const headColumn = Object.keys(availabeProps.renderData[0]);
        const rowData = [];
        availabeProps.renderData.map((item) => {
            rowData.push(Object.values(item));
        });
        new CsvBuilder('products.csv').setColumns(headColumn).addRows(rowData).exportFile();
    };
    return (
        <div className={`search-box-container ${classes.parent}`}>
            {!disableExport && (
                <div className="filter-container">
                    {filter}
                    <Button
                        disableRipple
                        className="export-btn"
                        endIcon={<ArrowDownward className="icon" />}
                        onClick={handleExport}
                    >
                        Export
                    </Button>
                </div>
            )}

            <FormControlInput
                id=""
                name=""
                value={search}
                placeholder="Search"
                onChange={handleSearch}
                variant="outlined"
                fullWidth={true}
                icon={<i className="icon-Search_Nav" />}
            />
        </div>
    );
};

SearchBoxFilterExport.propTypes = {
    availabeProps: PropTypes.object,
    filter: PropTypes.element,
    width: PropTypes.string,
    disableExport: PropTypes.bool,
};

export default SearchBoxFilterExport;
