import React, { useEffect, useState } from "react";
import "./ItemBar.scss"
import Pagination from "./../Pagination/Pagination";

export interface ISvgProps {
    pathFill: string
}

export interface IItemBar {
    title: string
    items: {}[]
}

interface IProps { }

export default function ItemBar(props: IProps & IItemBar) {

    const [items, setItems] = useState<JSX.Element[]>([])
    const [paginationButtons, setPaginationButtons] = useState<JSX.Element[]>([])
    let { indexOfFirstItem, pageNumber, pageCounts } = Pagination(props.items.length, 8)

    const renderItems = (indexOfFirstItem: number, pageNumber: number, pageCounts: number) => {

        let items: JSX.Element[] = []

        if (pageCounts === pageNumber) {
            for (let index = indexOfFirstItem; index < props.items.length; index++) {
                items.push(<div className="ItemBar" key={index}></div>)
            }
        } else {
            for (let index = indexOfFirstItem; index < indexOfFirstItem + 8; index++) {
                items.push(<div className="ItemBar" key={index}></div>)
            }
        }

        setItems(items)
    }

    //#region paginationButtons

    const renderButton = (selectedIndex: number) => {
        let items: JSX.Element[] = []

        for (let index = 1; index < pageCounts + 1; index++) {
            items.push(<button className={`Pagination__button ${index === selectedIndex ? "Pagination__button--selected" : ""}`} onClick={() => { buttonOnClickHandler(index) }} key={index}>{index}</button>)
        }

        setPaginationButtons(items)
    }

    const buttonOnClickHandler = (buttonIndex: number) => {
        setPaginationButtons([])
        let { indexOfFirstItem, pageNumber, pageCounts } = Pagination(props.items.length, 8, buttonIndex)
        renderItems(indexOfFirstItem, pageNumber, pageCounts)
        renderButton(buttonIndex)
    }

    //#endregion

    useEffect(() => {
        renderItems(indexOfFirstItem, pageNumber, pageCounts)
        renderButton(1)
    }, [])

    return (<>
        <div className="ItemBar ItemBar--open">
            <h5 className="ItemBar__title">{props.title}</h5>
        </div>
        <div className="ItemBars">
            <div className="ItemBars__Container">
                {items}
            </div>
            <div className="ItemBars__Buttons">
                {paginationButtons}
            </div>
        </div>
    </>)
}