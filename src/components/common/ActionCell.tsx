import PreviewIcon from '@mui/icons-material/Preview'
import {IconButton, TableCell} from "@mui/material";
import {Link, LinkProps} from "react-router-dom";
import {forwardRef, useMemo} from "react";
import * as React from "react";

interface Props {
    path: string
}

export default function ActionCell(props: Props): JSX.Element {
    const {path} = props

    const handleView = useMemo(() => forwardRef<any, Omit<LinkProps, 'to'>>((itemProps, ref): React.ReactElement => (
        <Link to={`${path}`} ref={ref} {...itemProps} />
    )), [path])

    return (
        <TableCell style={{textAlign: 'center'}}>
            <IconButton title='View' size='small' component={handleView} style={{textAlign: 'center'}}>
                <PreviewIcon color='primary' fontSize='small'/>
            </IconButton>
        </TableCell>
    )
}