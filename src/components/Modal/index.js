import reactdom from "react-dom"

export default function Modal({children}){
    return reactdom.createPortal(children, document.body)
}