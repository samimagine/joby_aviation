import React from 'react';
import { Box, Typography } from '@mui/material';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { File } from '../../../../../../store/interfaces';
import SelectDepartment from './SelectDepartment/SelectDepartment';
import Files from './Files/Files';

interface FilesSectionProps {
    selectedTab: string;
    onTabChange: (event: React.SyntheticEvent, newValue: string) => void;
    filteredFiles: File[];
}

const FilesSection: React.FC<FilesSectionProps> = ({ selectedTab, onTabChange, filteredFiles }) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            overflow: 'hidden',
            marginTop: 2,
        }}>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginLeft: '80px',
            }}>
            <InsertDriveFileOutlinedIcon fontSize='large' sx={{ color: '#626879', marginRight: '16px' }} />
            <Typography variant='h6'>Files:</Typography>
        </Box>

        <Box
            sx={{
                display: 'flex',
                flex: 1,
                overflow: 'hidden',
            }}>
            <SelectDepartment selectedTab={selectedTab} onTabChange={onTabChange} />
            <Files files={filteredFiles} />
        </Box>
    </Box>
);

export default FilesSection;
