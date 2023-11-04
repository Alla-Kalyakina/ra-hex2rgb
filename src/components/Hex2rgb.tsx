export interface Props {
    color: string
}
export default function Hex2rgb({color} : Props) {
    if(color.length == 7) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
        if((result != null)) {
            document.querySelector('body').style.backgroundColor = color;
        } else
            document.querySelector('body').style.backgroundColor = 'orange';

        return(
            <>
                <div className="output">{(result != null) ? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)})` : `Ошибка`}</div>
            </>
        )
    }
}