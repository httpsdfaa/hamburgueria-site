import * as dayjs from 'dayjs'
import pt from 'dayjs/locale/pt-br' // Locale
dayjs.locale(pt)


function time(){
    return dayjs().format('dddd')
}

export default time;