import React from 'react';
import './Chess.css';
function Box1(){
    return <div className="black"></div>;
}
function Box2(){
    return <div className="white"></div>;
}
function Row1(){
    return (
        <div className="row1">
            <Box1/>
            <Box2/>
            <Box1/>
            <Box2/>
            <Box1/>
            <Box2/>
            <Box1/>
            <Box2/>
        </div>
    )
}
function Row2(){
    return (
        <div className="row2">
            <Box2/>
            <Box1/>
            <Box2/>
            <Box1/>
            <Box2/>
            <Box1/>
            <Box2/>
            <Box1/>
        </div>
    )
}
function Chess(){
    return(
        <div className="board">
            <Row1/>
            <Row2/>
            <Row1/>
            <Row2/>
            <Row1/>
            <Row2/>
            <Row1/>
            <Row2/>
        </div>
    )
}
export default Chess;