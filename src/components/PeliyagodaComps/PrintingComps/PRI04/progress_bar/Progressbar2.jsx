import React from "react";
import propTypes from "prop-types";
import Styled from "styled-components";
import mqtt from 'mqtt';

const Container = Styled.div`
    progress{
            margin-right:10px;
            margin-left:20px;
    }

    progress[value] {
        width:${props => props.width};
        -webkit-appearance:none;
        appearance:none;
    }

    progress[value]::-webkit-progress-bar{
        height:5px;
        border-radius:50px;
        background-color:#e2e2e2;
    }

    progress[value]::-webkit-progress-value{
        height:5px;
        border-radius:50px;
        background-color:${props => props.color};
    }

    span{
        top:-10px;
        font-size:10px;
    }
`;

const ProgressBar = ({value,max,color,width}) => {
    return(
        <Container color={color} width={width}>
            <progress value={value} max={max}/>
            <span>{value/max *100}%</span>
        </Container>
    )
};

ProgressBar.propTypes = {
    value : propTypes.number.isRequired,
    max : propTypes.number,
    color: propTypes.string,
    width: propTypes.string,
};

ProgressBar.defaultProps = {
    max :100,
    width:'210px',
    color:'red',
};

export default ProgressBar;