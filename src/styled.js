import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    annual:{
        backgroundColor: "#ECF0FF",
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-between',
        padding: "15px",
        borderRadius: "5px",
    },

    annualDiv:{
        display: "flex",
        justifyContent: "space-around",
    },
}));

export default useStyles;