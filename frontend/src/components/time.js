import * as dayjs from 'dayjs'
import pt from 'dayjs/locale/pt-br' // Locale
dayjs.locale(pt)


export function time(){
    return dayjs().format('dddd')
}

export function hour(){
    return dayjs().format('H')
}